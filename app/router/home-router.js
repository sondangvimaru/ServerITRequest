 module.exports=function(router){
    var homecontroller = require('../controllers/home.controller');
router.get('/', homecontroller.home);

router.get('/about',homecontroller.about);
 };