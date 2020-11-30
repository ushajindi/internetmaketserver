const http=require("http")

 
http.createServer((req,res)=>{
    res.end("hello")
    console.log(req.rawHeaders['cookie'])
}).listen(3000,()=>{
    console.log("server start")
})