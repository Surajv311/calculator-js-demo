const express = require('express')
const app = express()
const bodyp = require('body-parser')
app.get("/contact",function(request,response){
  response.send("entered back");
});

app.use(bodyp.urlencoded({extended:true}))

app.post("/",function(req,res){
	// req.body is used to tap into individual piece of input data 
var v1 = Number(req.body.n1); // n1 is the name of our first input in <form> tag 
var v2 = Number(req.body.n2); // n2 is the name of our second input in <form> tag 
var result =v1 +v2 ; // adding the numbers in the input
  res.send("solved"+ result ); // displaying the result
  //NOTE : res.send is used to send a single response. 
  //To send a file we would have to use res.sendFile 
});

app.get("/",function(request,response){
  response.sendFile(__dirname + "/calculator.html");
});
app.listen(3000,function(){
  console.log("port created");
});
