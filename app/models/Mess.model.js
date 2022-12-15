const db=require('../common/connect');
const Message=function(mess){
    this.id=mess.id_chat;
    this.type=mess.type;
    this.content=mess.content;
    this.roomid=mess.roomid;
    this.time_send=mess.time_send;
    }



Message.get_message_inroom=function(roomid,result){
    db.query("SELECT * FROM tbl_mess WHERE tbl_mess.roomid=? ORDER BY tbl_mess.time_send ASC",roomid,function(err,res){
        if(err){
            
            result(null);
        }else
        {
            result(res);
        }
});
}

Message.setmessage_inroom=function(data,result){
    var datecurrent= new Date();
    let date = ("0" + datecurrent.getDate()).slice(-2);
  
  
    let month = ("0" + (datecurrent.getMonth() + 1)).slice(-2);
    
   
    let year = datecurrent.getFullYear();
    
   
    let hours = datecurrent.getHours();
    
   
    let minutes = datecurrent.getMinutes();
    
    
    let seconds = datecurrent.getSeconds();
    let final_time=year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    var qr="INSERT INTO tbl_mess (type,content,roomid,time_send) VALUES ("+ data.type+",'"+data.content+"','"+data.roomid+"','"+final_time+"');";
    db.query(qr, function(err, res) {

        if(err){
            result("0");
        }else{
            result("1");
        }
    });
}




    
module.exports=Message;