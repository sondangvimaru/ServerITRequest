const db=require('../common/connect');
const userIt=function(user){
    this.Itsupport_ID =user.Itsupport_ID;
    this.name= user.name;
    }


 userIt.checklogin=function(email,result){
var qr="SELECT * FROM  ituser  WHERE email="+"'"+email+"'";
    db.query(qr,function(err,resp){
        // console.log(resp);
        // const isFound = resp.some(element => {
        //     if (element.email == email+"\n") {
        //       return true;
        //     }
          
        //     return false;
        //   });

        if(err){
            result(null)
        }else{
                  
            console.log(resp);
            if(resp.length > 0){
            result("1"); 

            }
            else{
                result("0");
            }
        }
    
    });
        
 };

 userIt.getuserbyemail = function(email,result){
    var qr="SELECT * FROM  ituser  WHERE email="+"'"+email+"'";
    db.query(qr,function(err,resp){
    
    if(err){
        result(null)
    }else{
        result(resp);
    }
    });
}
 module.exports=userIt;