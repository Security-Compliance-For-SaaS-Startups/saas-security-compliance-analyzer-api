const config = require("../config/config.js");
var mongoAdapter = require("../mongo-adapter");
const http = require('http');

exports.analyizeCatCGovDataCluster = function (req, response) {
    var catCGovReqObject = req.body;
    console.dir(catCGovReqObject);

    if (typeof catCGovReqObject != 'undefined' && catCGovReqObject) {
        if (catCGovReqObject.hasOwnProperty('C3') && catCGovReqObject.hasOwnProperty('C4') && catCGovReqObject.hasOwnProperty('C5')
        && catCGovReqObject.hasOwnProperty('C8') && catCGovReqObject.hasOwnProperty('C9') && catCGovReqObject.hasOwnProperty('C10')) {
            mongoAdapter.insertDocument(config.mongodb.collections.CatCGov, catCGovReqObject, config.mongodb.centralDB, function(error, doc) {

                if (error) {
                    response.writeHead(500, {"Content-Type": "application/json"});
                    response.write(JSON.stringify({"message":"Error in communicating with the DB"}));
                    response.end();
                    return;
                }

                // Score Calculation Logic
                var mandatory_questions_ids = ['C3', 'C4', 'C8', 'C9', 'C10'];
                var response_score = 0;

                for (const mandatory_questions_id of mandatory_questions_ids) {
                    if (catCGovReqObject[mandatory_questions_id].toLowerCase() == "yes") {
                        response_score++;
                    }
                }

                let final_score_percentage = (response_score / mandatory_questions_ids.length) * 100;
                final_score_percentage = final_score_percentage.toFixed(0); 

                let url = config.apis.clusteringServiceEndpoint + "?category=" + config.category.CatCGov;

                http.get(url, (res) => {
                    const {statusCode} = res;
                    const contentType = res.headers['content-type'];

                    let error;
                    // Any 2xx status code signals a successful response 
                    if (statusCode !== 200) {
                        error = new Error('Request Failed.\n' +
                            `Status Code: ${statusCode}`);

                    } else if (!/^application\/json/.test(contentType)) {
                        error = new Error('Invalid content-type.\n' +
                            `Expected application/json but received ${contentType}`);
                    }

                    if (error) {
                        console.error(error.message);                 
                        response.writeHead(500, {"Content-Type": "application/json"});
                        response.write(JSON.stringify({"message":"Error in processing Clustering Service"}));
                        response.end();
                        return;
                    }

                    res.setEncoding('utf8');
                    let rawData = '';
                    res.on('data', (chunk) => {
                        rawData += chunk;
                    });
                    res.on('end', () => {
                        // Final response
                        try {
                            const parsedData = JSON.parse(rawData);
                            console.log(parsedData);

                            var result;

                            if (parsedData == "0") {
                                result = JSON.stringify({
                                    response: true,
                                    code: 200,
                                    response_cluster: parsedData,
                                    score_percentage: final_score_percentage,
                                    analysis: config.category.CatCGovRecommendationBest
                                });

                            } else if (parsedData == "1") {
                                result = JSON.stringify({
                                    response: true,
                                    code: 200,
                                    response_cluster: parsedData,
                                    score_percentage: final_score_percentage,
                                    analysis: config.category.CatCGovRecommendationWorst
                                });

                            } else if (parsedData == "2") {
                                result = JSON.stringify({
                                    response: true,
                                    code: 200,
                                    response_cluster: parsedData,
                                    score_percentage: final_score_percentage,
                                    analysis: config.category.CatCGovRecommendationMedium
                                });

                            } else {
                                response.writeHead(500, {"Content-Type": "application/json"});
                                response.write(JSON.stringify({"message":"Error in returning response analysis"}));
                                response.end();
                                return;
                            }

                            response.writeHead(200, {"Content-Type": "application/json"});
                            response.write(result);
                            response.end();
                            return;

                        } catch (e) {
                            console.error(e.message);
                        }
                    });
                }).on('error', (e) => {
                    console.error(`Got error: ${e.message}`);
                });
            });

        } else {
            response.writeHead(400, {"Content-Type": "application/json"});
            response.write(JSON.stringify({"message":"Required Parameters for Category C - Governance are not defined"}));
            response.end();
            return;
        }

    } else {
        response.writeHead(400, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"message":"Required Payload for Category C - Governance not defined"}));
        response.end();
        return;
    }
};