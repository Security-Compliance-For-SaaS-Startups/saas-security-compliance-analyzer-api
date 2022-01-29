const config = require("../config/config.js");
var mongoAdapter = require("../mongoadapter");
const http = require('http');

exports.analyizeCatAOpsDataCluster = function (req, response) {
    var catAOpsReqObject = req.body;
    console.dir(catAOpsReqObject);

    if (typeof catAOpsReqObject != 'undefined' && catAOpsReqObject) {
        if (catAOpsReqObject.hasOwnProperty('A1') && catAOpsReqObject.hasOwnProperty('A2') && catAOpsReqObject.hasOwnProperty('A5')
        && catAOpsReqObject.hasOwnProperty('A6') && catAOpsReqObject.hasOwnProperty('A8') && catAOpsReqObject.hasOwnProperty('A9')) {
            mongoAdapter.insertDocument(config.mongodb.collections.CatAOps, catAOpsReqObject, config.mongodb.centralDB, function(error, doc) {

                if (error) {
                    response.writeHead(500, {"Content-Type": "application/json"});
                    response.write(JSON.stringify({"message":"Error in communicating with the DB"}));
                    response.end();
                    return;
                }

                // Score Calculation Logic
                var mandatory_questions_ids = ['A1', 'A2', 'A5', 'A8', 'A9'];
                var response_score = 0;

                for (const mandatory_questions_id of mandatory_questions_ids) {
                    if (catAOpsReqObject[mandatory_questions_id].toLowerCase() == "yes") {
                        response_score++;
                    }
                }

                let final_score_percentage = (response_score / mandatory_questions_ids.length) * 100;
                final_score_percentage = final_score_percentage.toFixed(0); 

                let url = config.apis.clusteringServiceEndpoint + "?category=" + config.category.CatAOps;

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
                        // TODO: Write analysis
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
                                    analysis: config.category.CatAOpsRecommendationBest
                                });

                            } else if (parsedData == "1") {
                                result = JSON.stringify({
                                    response: true,
                                    code: 200,
                                    response_cluster: parsedData,
                                    score_percentage: final_score_percentage,
                                    analysis: config.category.CatAOpsRecommendationWorst
                                });

                            } else if (parsedData == "2" || parsedData == "3") {
                                result = JSON.stringify({
                                    response: true,
                                    code: 200,
                                    response_cluster: parsedData,
                                    score_percentage: final_score_percentage,
                                    analysis: config.category.CatAOpsRecommendationMedium
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
            response.write(JSON.stringify({"message":"Required Parameters for Category A - Operations are not defined"}));
            response.end();
            return;
        }

    } else {
        response.writeHead(400, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"message":"Required Payload for Category A - Operations not defined"}));
        response.end();
        return;
    }
};