const db=require('../common/connect');
const Service=function(service){
    this.id=service.id;
    this.name=service.name;
    }

Service.get_all=function(result){
        db.query("select * from tbl_service",function(err,Request){
            if(err){
             result(null);
             
            }else
            result(Request);
          })
    }

 module.exports=Service;