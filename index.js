var express=require('express');
var app= express();
const cors = require('cors');
const io = require('socket.io')(3001);
var Message=require('./app/models/Mess.model');
/**
 * Cấu hình body-parser
 */
 var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended: false}));    
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(cors());
    require('./app/router/home-router')(app);
    require('./app/router/bookrouter')(app);
    require('./app/router/Itrequest.router')(app);
    require('./app/router/user.router')(app);
    require('./app/router/service.router')(app);
    require('./app/router/mess.router')(app);
    io.on('connect', socket => {
      console.log('có người kết nối');
    });
    app.listen(3000, function () {  

    console.log('listening on *:3000');
 }); 

 const getClientRoom = () => {
   let index = 0;
   while (true) {
     if(!io.sockets.adapter.rooms[index] || io.sockets.adapter.rooms[index].length < 2) {
       return index;
     }
     index ++;
   }
}
io.on('connect', socket => {
   var clientRoom =1;
 

   socket.on("sendroom",function(message) {
    console.log(message);
    clientRoom=message;
    socket.join(clientRoom);

    
  //   if(io.sockets.adapter.rooms[clientRoom].length < 2) { //kiểm tra xem phòng có dưới 2 ng trong phòng không 
  //     io.in(clientRoom).emit('statusRoom', 'đang chờ IT trở lại'); // emit cho tất cả client trong phòng
  // } else {
      
  //     io.in(clientRoom).emit('statusRoom', 'It đã vào tiến trình'); // emit cho tất cả client trong phòng
  // }
  
  // socket.on('disconnect', (reason) => { // Khi client thoát thì emit cho người cùng phòng biết
  //    console.log("IT đã roi phong")
  //    socket.to(clientRoom).emit('statusRoom', 'It đã rời tiến trình xử lý');
  // });
   });
   

  
   socket.on('sendMessage', function (message) {  
    var data=JSON.parse(message);
    socket.join(data.roomid);
    Message.setmessage_inroom(data,function(result) {
     console.log("result: "+result);
  });
      socket.to(clientRoom).emit('receiveMessage', data.content);  
  })
 
});

// var server= http.createServer(  function(req,res){
//     res.end("hello world"); 
// });
//     server.listen(3000,function(){
//         console.log('listening on *:3000');
//     }) ;