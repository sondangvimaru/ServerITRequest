 
var userIt=require('../models/User.model');
exports.Checklogin = function(req, res) {
    var email=req.body.email;
    
    userIt.checklogin(email,function(result){
        res.send(result);
    });
    

};

exports.getuserbyemail=function(req, res){
var email=req.params.email;
userIt.getuserbyemail(email,function(result){
  
    res.send(result);
})
}