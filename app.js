const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

const shortenerRouter = require('./src/routes/shortenerRoutes');

app.use('/', shortenerRouter);

app.listen(port, function (err) {
    if (err) console.log(err);    
    console.log('running server on port ' + port);
});