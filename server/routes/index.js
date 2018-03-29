const Scheduler = require("../controllers/scheduler");

module.exports = function (app) {
  app.get('/', function (req, res) {
 
  });
  app.post('/api/v1/startComponent',function(req,res,next){
    Scheduler.runComponent(req, res, next);
  });
  app.post('/api/v1/getComponents',function(req,res,next){
    Scheduler.getComponents(req, res, next);
  });

};
