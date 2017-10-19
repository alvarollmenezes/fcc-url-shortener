const express = require('express');
const shortenerRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
//const objectId = require('mongodb').ObjectID;

const router = function (nav) {
    const urlController = require('../controllers/urlController');
    shortenerRouter.use(urlController.middleware);
    // Route to create new URL's
    shortenerRouter.route('/new/:newUrl').get(urlController.insertUrl);

    // Route to visit created URL's
    shortenerRouter.route('/:suffix').get(urlController.getBySuffix);

    return shortenerRouter;
};
module.exports = router;