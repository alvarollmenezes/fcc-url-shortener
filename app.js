const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const shortId = require('short-mongo-id');

const getCurrentId = function(){
    const dbUrl = 'mongodb://localhost:27017/url_shortener';
    mongodb.connect(dbUrl, function (err, db) {
        const collection = db.collection('counters');
        collection.findOne({_id: 'url_count'}, function(err, doc){
            const a = doc.seq;
            console.log(a);            
            return(a);
        });
    });
}
//cons setUrlId = function()
const insertUrl = function (req, res) {
    const dbUrl = 'mongodb://localhost:27017/urlApp';
    //TODO Why not just use the "url" from the router?
    const newUrl = req.params.url;
    const id = getCurrentId();
    res.send('O id é: ' + id);
    //res.send('INSERT');
    
    /*mongodb.connect(dbUrl, function (err, db) {
        const collection = db.collection('urls');      
        collection.insertOne({
            originalUrl: newUrl,
            shortenedUrl: shortId()
        },
            function (err, results) {
                if (results.originalUrl) {
                    res.send('Inseriu');
                } else {
                    res.send('Erro ao inserir');
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
    res.send('GET');
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

app.get('/new/:newUrl', insertUrl);
app.get('/:suffix', getBySuffix);

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log('running server on port ' + port);
});