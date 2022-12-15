var Service=require('../models/Service.model');
exports.getall = function(req, res) {
   
      Service.get_all(function(data) {
              res.send(data);
      }) 
} ; 