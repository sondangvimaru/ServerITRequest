module.exports=function(router){
    var Messsagecontroller= require('../controllers/Mess.controller');
    router.get('/message/getmessinroom/:id',Messsagecontroller.getmessinroom);
    router.post('/message/setmessinroom',Messsagecontroller.setmessage_inroom);
   
}