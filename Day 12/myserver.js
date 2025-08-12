const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<h1>Welcome to home page</h1>')
        res.end()
    }
   else  if(req.url==="/about"){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<h1>This is an about page</h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h3> NO Resource found 404 error </h3>')
        res.end()
    }
})

server.listen(3005,()=>{
    console.log("Server is up n running")
})