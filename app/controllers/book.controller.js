var Book=require('../models/Book.model');

    exports.get_list=function(req, res){
   Book.get_all(function(data){

    res.send(data);
   })
    res.send({datas:data});
}

exports.details=function(req, res){ 

var data=Book.getByid(req.params.id)
res.send({datas:data});
}

exports.add_book=function(req, res){
    var data=req.body; 

    Book.create(data,function(respon){
        res.send({result:respon});
    });
}
exports.removebook=function(req, res){
    var id=req.params.id;
    Book.remove(id,function(respon){

        res.send({result:respon});
    });

}
exports.edit=function(req, res){
    var data=req.body;
     
    Book.update(data,function(respon){
        res.send({result:respon});
    });
}