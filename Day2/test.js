const http = require('http')

http.createServer((request,response)=>{
    response.end("hello")
    console.log(request.url, request.headers,request.body)
}).listen(8080, ()=>{
    console.log("8080")
})