const http=require('http');
const server=http.createServer(function (req,res){
    if (req.url=== '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<html><body><h1>Hello Sam how are you doing</h1></body></html>')
        console.log("Server responded");
        res.end();
    }
    else if (req.url === '/samuellunghe'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h1 style="color:#224">Your are really Samuel Lunghe The Great </h1>')
        console.log("Server responded to /samuellunghe");
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.write('<h1>Request not found sorry</h1>')
        console.log("404 Not Found");
        res.end();
    }
})

const PORT=5000;
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});