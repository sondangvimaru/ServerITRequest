const Book=function(book){
this.id=book.id;
this.name=book.name;
}

Book.get_all=function(result){

    var data=[
        {"id":1,"name":"bookname1"},
            {"id":2,"name":"bookname2"},
            {"id":3,"name":"bookname3"},
            {"id":4,"name":"bookname4"},
            {"id":5,"name":"bookname5"},
        
            ];
            result(data);
}
Book.getByid=function(id){
    var data ={"id":id,"name":"bookname"};
    return data;
}
Book.create=function(data,result){
  result(data);
}
Book.remove=function(id,result){
result("xoa bo co id "+id+" thanh cong");
}
Book.update=function(data,result){
    result({update:data});
    }
module.exports=Book;