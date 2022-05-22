// const express = require('express');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 3000;

// // sendFile will go here
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
//   res.sendFile(path.join(__dirname, '/index.js'));
// });

// app.listen(port);
// console.log('Server started at http://localhost:' + port);
// var http = require('http');
// var fs =require('fs');
// var server = http.createServer(function(req,res){
// var myReadStream = fs.createReadStream(__dirname+'/index.html')

// myReadStream.pipe(res)
// });
// app.listen(3000);
//  console.log('Server started at http://localhost:' + port);
const http = require('http')
const fs =require('fs')
const express = require('express')
const fileContent =fs.readFileSync('index.html')
const app=express();

app.set('view engine', 'hbs');

// const poorjava =fs.readFileSync('index.js')
const server = http.createServer((req,res)=>
{
res.writeHead(200, {'Content-Type':'text/html'});
app.use('/static/hello.js', express.static('public'));

// console.log(poorjava)
res.end(fileContent)

})
// server.listen(80, '127.0.0.1',()=>{

//     console.log("listening")
// })
server.listen(8000);
 console.log('Server started at http://localhost:' + 5000);
