module.exports=function(router){
    var servicectr= require('../controllers/service.controller');  
    router.get('/service/getall/',servicectr.getall);
   
}