module.exports=function(router){
    var itrequest= require('../controllers/Itrequest.controller');
    router.post('/request/sendrequest/',itrequest.sendrequest);
    router.get('/request/getall/',itrequest.getall);
    router.get('/request/getbyid/:id',itrequest.getbyticket);
    router.get('/request/getbyITid/:id',itrequest.getbyITsuport);
    router.put('/request/setstatus/',itrequest.updateStatus);
    router.get('/request/getmyticket/:email',itrequest.getbyEmail);
    router.get('/request/getallavailable/',itrequest.get_all_available);
    router.put('/request/updateITsupport/',itrequest.updateITsupport);
    router.get('/request/getrequestinprocess/:id',itrequest.getpRquestinprocess);
    router.get('/request/getmaxroomchatcurrent',itrequest.getmaxroomchatcurrent);
    router.put('/request/updateroomchat',itrequest.upDateroomchat);
    router.get('/request/getroomchatbyticket/:id',itrequest.getroomchatbyTicket);
   
}