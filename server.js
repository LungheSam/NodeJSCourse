const http=require('http');
const { eventEmitter }= require("./anothermodule");
const fs=require('fs');
eventEmitter.emit("Event-1",11,22,"gauge",56);

const server=http.createServer(function (req,res){
    if (req.url=== '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<html><body><h1>Hello Sam how are you doing</h1></body></html>')
        // console.log("Server responded");
        res.end();
    }
    else if (req.url === '/samuellunghe'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h1 style="color:#224">Your are really Samuel Lunghe The Great </h1>')
        // console.log("Server responded to /samuellunghe");
        res.end();
    }
    else if (req.url==="/mypage"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        const data=fs.readFileSync("test.html","utf8");
        res.write(data);
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.write('<h1>Request not found sorry</h1>')
        console.log("404 Not Found");
        res.end();
    }
})
server.on("connection",()=>{
    let facts=["I will become rich soon", " I will help  my friends and family", "I will make a great husband", "I will never care about money", " I am getting my master's degree soon"]

    console.log("Fun Fact");
    console.log(facts[Math.floor(Math.random()*5)])
})
const PORT=5000;
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});