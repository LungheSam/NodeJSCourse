/* core modules, os, path, event,fs, http, etc*/
const path=require('path');
// console.log(path);
// const addition=(a,b)=>{
//     return a+b;
// }
// function findTheBigNumber(a,b){
//     return a>b?a:b;
// }
// module.exports = {addition: addition, bigNumber:findTheBigNumber};

//====PATH MODULE =======
const myPath="C:/Users/Lunghe Samuel/Desktop/Programming/Web Development/Courses/NodeJSCourse/anothermodule.js";
const parsePath=path.parse(myPath);
let dirname_mine=parsePath.dir;
let dirname_mine_2=path.dirname(myPath);
let extension= path.extname(myPath);
// console.log(path.basename(myPath));
// console.log(extension);
// console.log(dirname_mine_2);
// console.log(dirname_mine);
// console.log(parsePath.dir);

//====== OS MODULE ===============

const os=require("os");
let typeOfOS=os.type()
// console.log(typeOfOS);
let message=typeOfOS=="Windows_NT" ? "Welcome to Windows 11": "Mikuwa na Makwapa";
// console.log(message);
let architecture=os.arch();
let user=os.userInfo();
let cpu=os.cpus();
let hostname=os.hostname();
let platform=os.platform();
// console.log(platform);
// console.log(hostname);
// console.log(cpu);
// console.log(user);
// console.log(architecture);
let totalmem= os.totalmem();
let freemem = os.freemem();
// console.log(freemem);
// console.log(totalmem);


const fs=require('fs');

// fs.writeFileSync("test.txt","Hello From Node JS"); 
// fs.appendFileSync("test.txt","\nYou know I am your friend wright?")
// let data=fs.readFileSync("test.txt","utf-8");
// console.log(data);
// try {
//     fs.unlinkSync("test.txt");
//     console.log("Test deleted successfully");
// } catch (error) {
//     console.log(error);
//     console.log("Unable to delete test.txt");
// }

//Asynchronously 

// fs.writeFile("test.txt","Hello NodeJS",(error)=>{
//     if(!error){
//         console.log("File created successfully");
//     }
//     else{
//         console.log("Error Occured. File not created successfully");
//     }
// });
// console.log("Are you alright?");

// fs.appendFile("test.txt","\n I am coming for you",(error)=>{
//     if(!error) console.log("File appended successfully");
//     else console.log("Error Occured: " + error);
// })
// console.log("This is Synchronous");

// fs.readFile("test.txt",{encoding:"utf8"},(error,data)=>{
//     if(error) console.log("Error: " + error);
//     else console.log(data);
// });


// fs.writeFile("PCData.txt", "== PC DATA ==", (error)=>{
//     if(error) console.log("Error Occured:Unable to write file");
//     else console.log("PC Data Created successfully");
// });

// const osData={
//     type: typeOfOS,
//     architecture: architecture,
//     user: user.username,
  
// }
// console.log(osData);
// let keys= Object.keys(osData);
// let values= Object.values(osData);
// for (let item=0; item<keys.length; item++){
//     fs.appendFile("PCData.txt","\n"+String(keys[item])+":"+String(osData[keys[item]])+"\n",(error) =>{
//         if(error) console.log(error);
//         else console.log("Appended Successfully");
//     });
// }


// ====== EVENTS MODULE ===
const events = require("events");
// console.log(events);
const { EventEmitter }= events;
const eventEmitter= new EventEmitter();

eventEmitter.on("Event-1",(parm1, val, name, age)=>{
    console.log("I am the best");
    console.log(val);
    console.log(name);
    console.log(age);
    console.log(parm1);
});
// eventEmitter.emit("Event-1",11,22,"gauge",56);
// console.log("I am Synchronous");

eventEmitter.on("Event-2",(obj)=>{
    console.log(obj);
});
// eventEmitter.emit("Event-2",{msg:"Hello, world!", age:13, name:"Samuel Smith"});

module.exports = { 'eventEmitter': eventEmitter};

const readStream=fs.createReadStream("PCData.txt");

readStream.on("data", function(buffer){
    console.log(buffer);
    console.log(buffer.toString());
});



