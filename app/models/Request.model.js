const db=require('../common/connect');
const crypto = require("crypto");

var Request=function(request){
  this.msv=request.msv;  
  this.email=request.email;
  this.name=request.name;
  this.service=request.service;
  this.content=request.content;
  this.idticket =request.idticket;
  this.Itsupport_ID=request.Itsupport_ID;
  this.	status=request.status;
}

Request.sendrequest=function(data,result){

if(data!=null)
{
  const id = crypto.randomBytes(16).toString("hex");
  var datecurrent= new Date();
  let date = ("0" + datecurrent.getDate()).slice(-2);


  let month = ("0" + (datecurrent.getMonth() + 1)).slice(-2);
  
 
  let year = datecurrent.getFullYear();
  
 
  let hours = datecurrent.getHours();
  
 
  let minutes = datecurrent.getMinutes();
  
  
  let seconds = datecurrent.getSeconds();
  let final_time=year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
  
  const str_qr='insert into request (idticket,msv,email,name,service,content,Itsupport_ID,status,datecreate) values('+'"'+id+'","'+data.msv+'","'+data.email+'","'+data.name+'","'+data.service+'","'+data.content+'",'+null+','+data.status+',"'+final_time+'")';
 
  db.query(str_qr,function(err,request){
  if(err)
  {
    result(null);
  }
  else
  {
    result(id);
  }
});
 
}else result("giá trị vào bị null");

    

// return data;

}
Request.get_all=function(result){
db.query("select * from request",function(err,Request){
  if(err){
   result(null);
   
  }else
  result(Request);
})
}

Request.get_by_id=function(id,result){
  db.query("SELECT * FROM request where idticket=?",[id],function(err,Request){
   if(err){
    result(null);
   }else
   {
    
if(Request.length>0) {
  var ID_idsupport=Request[0].Itsupport_ID;
 if(ID_idsupport==null)
 {
  result(Request);
 }else{
  db.query("SELECT *,ituser.name as itname FROM request,ituser where idticket=? and request.Itsupport_ID = ituser.Itsupport_ID",[id],function(err,Request){
   if(err){
    result(null);
   }else
   {
    result(Request);
   }
  })
 }
    
}
   }
    
  })
}
Request.get_by_email=function(email,result){
  db.query("select idticket,datecreate from request where email='"+email+"'",function(err,Request){
   if(err){
    result(null);
   }else
   result(Request);
  })
}
Request.getallavailable=function(result){
  const qr="select * from request WHERE Itsupport_ID IS NULL ORDER BY request.datecreate DESC";

  db.query(qr,function(err,Request){

    if(err){
      result(null);
    }else{
  
      result(Request);
    }
  })
}
Request.get_by_ITsuportid=function(id,result){
  db.query("select * from request where Itsupport_ID=? and status=0",[id],function(err,Request){
    if(err){
      result(null);}
      else{
       
         result(Request);
      }
           
  })
}

Request.updateITsupport=function(data,result){
  var datecurrent= new Date();
  let date = ("0" + datecurrent.getDate()).slice(-2);


  let month = ("0" + (datecurrent.getMonth() + 1)).slice(-2);
  
 
  let year = datecurrent.getFullYear();
  
 
  let hours = datecurrent.getHours();
  
 
  let minutes = datecurrent.getMinutes();
  
  
  let seconds = datecurrent.getSeconds();
  let final_time=year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
  db.query("UPDATE request SET Itsupport_ID=?,dateiITrecivie=? WHERE idticket=? ORDER BY request.dateiITrecivie DESC",[data.Itsupport_ID,final_time,data.idticket],function(err,Request){
    if(err){

      result("0");
    }else{
      result("1");
    }});
}
Request.updateStatus=function(data,result){
  db.query("UPDATE request SET status=? WHERE idticket=?",[data.status,data.idticket],function(err,Request){
    if(err){
      result("0");
    }else{
      result("1");
    }});
}

Request.getrequestinprocess=function(data,result){

  db.query("SELECT * FROM request where status=1 and Itsupport_ID=?",[data],function(err,Request){
if(err){
  result(null);
}else{
  result(Request);
}
  });
  
  }

Request.getmaxroomchatcurrent=function(result){ 
  db.query("select MAX(roomchat) as roommax from request",function(err,Request){
    if(err){
      result(null);
    }else{
      result(Request);
    }
  })
} 

Request.Updateroomchat=function(data,result){
  db.query("UPDATE request SET roomchat=? WHERE idticket=?",[data.roomchat,data.ticketId],function(err,Request){
    if(err){
      result("0");
    }else{
      result("1");
    }
  })
}
Request.getroomchatbyTicket=function(ticketId,result){
  db.query("SELECT  roomchat FROM request WHERE idticket=?",[ticketId],function(err,Request){
    if(err){
      result(null);
    }else{
      result(Request);
    }
  })
}
module.exports=Request;