const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const opn = require('opn');
const path = require('path');
const Scheduler = require("./controllers/scheduler");
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');

// Routes
const index = require('./routes/index');



const url = "http://localhost:8080";
// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
index(app);

app.use(express.static(path.resolve(__dirname + '/public')));
app.post('api/v1/startComponent',function(req,res,next){
    Scheduler.runComponent(req,res,next);

} );
app.get('*', function(req, res) {
    res.sendfile(path.resolve(__dirname + '/public/views/404.html'));
   });

// Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);





