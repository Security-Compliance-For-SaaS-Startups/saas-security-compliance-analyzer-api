var config = require('./config/config');

var express = require('express')
var http = require('http'),
    path = require('path');

var cat_A_Gov = require('./routes/cat-a-gov')
var cat_A_Ops = require('./routes/cat-a-ops')
var cat_B_Gov = require('./routes/cat-b-gov')
var cat_B_Ops = require('./routes/cat-b-ops')
var cat_C_Gov = require('./routes/cat-c-gov')
var cat_C_Ops = require('./routes/cat-c-ops')
var cat_D_Gov = require('./routes/cat-d-gov')
var cat_D_Ops = require('./routes/cat-d-ops')

const mongoAdapter = require('./mongo-adapter')
const cors = require('cors')
const bodyParser = require('body-parser')
var app = express();
let port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/cat-a-gov', cat_A_Gov.analyizeCatAGovDataCluster); 
app.post('/cat-a-ops', cat_A_Ops.analyizeCatAOpsDataCluster);
app.post('/cat-b-gov', cat_B_Gov.analyizeCatBGovDataCluster);
app.post('/cat-b-ops', cat_B_Ops.analyizeCatBOpsDataCluster);
app.post('/cat-c-gov', cat_C_Gov.analyizeCatCGovDataCluster);
app.post('/cat-c-ops', cat_C_Ops.analyizeCatCOpsDataCluster);
app.post('/cat-d-gov', cat_D_Gov.analyizeCatDGovDataCluster);
app.post('/cat-d-ops', cat_D_Ops.analyizeCatDOpsDataCluster);

app.get('/', (req, res) => {
    res.send('Hello World! SaaS Security Compliance Analyzer Proxy API service is Live!')
});

var server = http.createServer(app).listen(port, function () {
    console.log(`SaaS Security Compliance Analyzer Proxy API service is listening on port ${port}!`)

    mongoAdapter.openConnection(function (status) {
    });
});

config.httpServer = server;
exports = module.exports = app;