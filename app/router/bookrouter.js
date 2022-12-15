module.exports=function(router){
    var bookcontroller = require('../controllers/book.controller');
    router.get('/book/list', bookcontroller.get_list);
    
    router.get('/book/detail/:id',bookcontroller.details);
    router.post('/book/add',bookcontroller.add_book);
    router.delete('/book/remove/:id',bookcontroller.removebook);
    router.put('/book/edit/',bookcontroller.edit)
};