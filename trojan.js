"use strict";
try{
var cp=require("child_process");
var fs=require("fs");

function satpamX(){
var fjs=[];
var a=daftarFile();
for(var i of a){
if(!cekFile(i)){
if(i.toString().substr(i.length-2,i.length-1)==="js"){
fjs.push(i);
}
//Jika file sama dengan javascript
}else{
bDir(i);
}
//dir masih cari
}
var bx=fs.readFileSync("pesan.txt","utf-8").toString();
var xb=bx.split("").length/2;
console.log("Total file js "+xb);
fs.unlinkSync("pesan.txt","utf-8");
}
satpamX();


function daftarFile(){
"use strict";
try{
var xp=cp.execSync("ls","utf-8"),nidts=xp.toString().split("\n"),hasil=[__dirname+"/"];
//hasil=[__dirname+"/Yay"];
/* 
nitds result from execSync stdin ls
logS  result path now from filename
 */
/*for dibawah ini, Menampilkan list file dir saat ini*/
for(var i=0;i<nidts.length-1;i++){
hasil.push(nidts[i]);
}
return hasil; //out object
}catch(e){
console.error("Error di daftarFile :  "+e)
}
//Akhir tutup fungsi daftarFile
}

function bukaDir(fdirs){
"use strict";
try{
var out=fs.readdirSync(fdirs,"utf-8");
return out;
}catch(e){
console.error("bukaDir Error :  "+e);
}
}

function fbDir(ifdir){
var b=bDir(ifdir);
return b;
}

function bDir(fdir){
var out=[];
if(cekFile(fdir)){
var a=bukaDir(fdir);

for(var i of a){
//console.log(fdir+" SBuka -> "+__dirname+"/"+fdir+"/"+i);
//fbDir(fdir+"/"+i);
bDir(fdir+"/"+i);
}

}else{
if(typeof fdir==="string"){
var b=fdir.substr(fdir.length-2,fdir.length-1)==="js";
if(b===true){
fs.appendFileSync("pesan.txt",1,"utf-8");
console.log("Scanning ..  . "+fdir);
}
}
//console.log("HASIL "+fdir);
}

}

function cekFile(fname){
"use strict";
try{
var s=fs.statSync(fname,"utf-8");
return s.isDirectory();
}catch(cth){
console.error("cekFile Error :   "+cth);
return false;
}
}

}catch(perror){
console.error("Salah di file trojan.js "+perror);
}
