const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const shortId = require('short-mongo-id');

const urlController = function () {
    const middleware = function (req, res, next) {
        next();
    };

    const insertUrl = function (req, res) {
        const dbUrl = 'mongodb://localhost:27017/urlApp';
        //TODO Why not just use the "url" from the router?
        const newUrl = req.params.url;
        console.log(req.newUrl);
        /*
        mongodb.connect(dbUrl, function (err, db) {
            const collection = db.collection('urls');      
            collection.insertOne({
                originalUrl: newUrl
            },
                function (err, results) {
                    if (results.originalUrl) {
                        // RENDER SUCCESS
                    } else {
                        // RENDER FAILURE
                    }
                }
            );

        });
        */
    };

    const getBySuffix = function (req, res) {
        const dbUrl = 'mongodb://localhost:27017/urlApp';
        //TODO Why not just use the "suffix" from the router?
        const suffix = req.params.suffix;
        console.log(req.params.suffix);        
        /*
        mongodb.connect(dbUrl, function (err, db) {
            const collection = db.collection('urls');
            collection.findOne({
                suffix: suffix
            },
                function (err, results) {
                    if (results.originalUrl) {
                        // RETURN JSON
                    } else {
                        // RETURNS EMPTY JSON
                    }
                    db.close();
                }

            );           
        });
        */
    };

    return {
        insertUrl: insertUrl,
        getBySuffix: getBySuffix,
        middleware: middleware
    };
};
module.exports = urlController;