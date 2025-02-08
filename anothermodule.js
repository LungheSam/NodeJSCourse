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
console.log("Hello world")
