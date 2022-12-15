var Message=require('../models/Mess.model');
exports.getmessinroom = function(req, res) {
   var roomid=req.params.id;
   Message.get_message_inroom(roomid,function(data) {
            res.send(data);
    }) 
} ;

exports.setmessage_inroom = function(req, res) {
    var data=req.body;
    Message.setmessage_inroom(data,function(result) {
        res.send(result);
    });

}