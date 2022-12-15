 
var Request=require('../models/Request.model');

exports.sendrequest = function(req, res) {
 var data =req.body;
 Request.sendrequest(data,function(datar){
 res.send(datar);
 });
};
exports.getall = function(req, res) {
      var data = req.body;
        Request.get_all(function(data) {
                res.send(data);
        }) 
} ;   
exports.getbyticket=function(req,res){
var id=req.params.id;
Request.get_by_id(id,function(data){
                res.send(data);      
})
};
exports.getbyITsuport=function(req,res){    
var id=req.params.id;
Request.get_by_ITsuportid(id,function(data){
                res.send(data);
})
};

exports.getbyEmail=function(req,res){
       
        var email=req.params.email; 
       
        Request.get_by_email(email,function(data){
        
                res.send(data);
        });  
}
exports.get_all_available=function(req,res){
Request.getallavailable(function(data){
res.send(data);
});
};


exports.updateITsupport=function(req,res){
        var data=req.body;
Request.updateITsupport(data,function(datar){

res.send(datar);
});

};
exports.updateStatus=function(req,res){
        var data=req.body;
   Request.updateStatus(data,function(result){
        res.send(result);
   }) ; 
}
exports.getpRquestinprocess=function(req,res){
var data=req.params.id;
Request.getrequestinprocess(data,function(result){
res.send(result);
});

};   
exports.getmaxroomchatcurrent=function(req,res){
        Request.getmaxroomchatcurrent(function(result){
            res.send(result);
        });
}
exports.upDateroomchat=function(req,res){
        var data=req.body;
        Request.Updateroomchat(data,function(result){
            res.send(result);
        });
}
exports.getroomchatbyTicket=function(req,res){
var idticket=req.params.id;
Request.getroomchatbyTicket(idticket,function(result){

        res.send(result);
});
}