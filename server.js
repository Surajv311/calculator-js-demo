const express = require('express')
const app = express()
const bodyp = require('body-parser')
app.get("/contact",function(request,response){
  response.send("entered back");
});
app.use(bodyp.urlencoded({extended:true}))

app.post("/",function(req,res){
var v1 = Number(req.body.n1);
var v2 = Number(req.body.n2);
var result =v1 +v2 ;
  res.send("solved"+ result );
});
app.get("/",function(request,response){
  response.sendFile(__dirname + "/calculator.html");
});
app.listen(3000,function(){
  console.log("port created");
});
