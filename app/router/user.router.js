module.exports=function(router){
    var usercontroller= require('../controllers/user.controller');
    router.post('/user/checklogin',usercontroller.Checklogin);
    router.get('/user/getuserbyemail/:email',usercontroller.getuserbyemail);
}