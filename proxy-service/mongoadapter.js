var config = require('./config/config');
var environment = process.argv[2];

var MongoClient = require('mongodb').MongoClient;
var dbClient, retryCount = 0;

exports.openConnection = function (callback) {
    MongoClient.connect(config.mongodb.connectionString, function (err, mongoClient) {
        if (err) {
            console.log('Cannot connect to Mongo DB! Retrying');
            //console.log(err);
            retryCount++;
            if (retryCount <= 20) {
                setTimeout(function () {
                    exports.openConnection(callback);
                }, 5000);
            } else {
                callback(false)
            }
        } else {
            dbClient = mongoClient;
            console.log('Connected to Mongo DB');
            callback(true)
        }
    });
}

module.exports.getConn = function () {
    return dbClient;
}

//insert a document to the specified collection
exports.insertDocument = function (collection, doc, db, fn) {
    var idSent = doc._id ? true : false;

    var fn1 = function () {
    }

    fn1 = fn || fn1;

    db1 = dbClient.db(db);
    const col = db1.collection(collection);

    col.insertOne(doc, { safe: true }, function (err, records) {
        if (!idSent) {
            delete doc._id;
        }

        if (err) {
            fn1(err);
            return;
        }

        fn1(null, records.insertedId.toString());
    });
};


