const cors = require('cors');
const axios = require('axios');
function runComponent(req, res, next){

       axios.post('http://10.27.8.34:2180/restgateway/services/componentSchedulerTest/runComponent', {
        id:req.body.item._id,
        name:req.body.item.name
        
        }).then(function (response) {
            res.send(response);
        }).catch(function (error) {
            if (error.response) {
              console.log(error.response.headers);
              res.send(error.response.headers);
            } 
            else if (error.request) {
              res.send(error.request);
            } 
            else {
              res.send(error.message);
            }
        console.log(error.config);
    });
    }

function getComponents(req,res,next){
    axios.post('http://10.27.8.34:2180/restgateway/services/componentSchedulerTest/getComponents', {"test":"test"})
    .then(function (response) {
            res.send(response);
            this.setState({item: response})
        }).catch(function (error) {
            if (error.response) {
              console.log(error.response.headers);
              res.send(error.response.headers);
            } 
            else if (error.request) {
              res.send(error.request);
            } 
            else {
              res.send(error.message);
            }

    });
}

module.exports = {runComponent, getComponents};
