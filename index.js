var http=require("http"),port=1111;
var respon=require("./youtube-handrawan/respon");
var youtube=require("./youtube-handrawan/youtube-x");
var enk=require("./youtube-handrawan/Woaenc");
var ip=require("./youtube-handrawan/ip");
var axios=require("axios");

"use strict";
try{
var server=http.createServer((req,res)=>{
if(req.url==="/"){
respon.bacaFS(req,res,__dirname+"/index.html");
}else if(req.url.indexOf(".css")!=-1||req.url.indexOf(".js")!=-1||req.url.indexOf(".json")!=-1){
respon.bacaFS(req,res,__dirname+req.url);
}else if(req.url.indexOf("woa-download/")!=-1){
var gx=req.url,xg=gx.split("/woa-download/")[1],xgx=enk.wanDec(xg.toString());
if(typeof xgx==="string"){
if(xgx===""){
console.error("kode woaEnc tidak ada");
}else{
//console.log("https://ytmp3.eu/files/downloadc.php?file="+xgx+".mp3");
/*https://ytmp3.eu/files/downloadc.php?file=hBBwJ8Us-qs.mp3*/
respon.arsipC(res,200,{"Content-Type":"text/html"},'<script>var a=location.assign("https://ytmp3.eu/files/downloadc.php?file='+xgx+'.mp3");setTimeout(function(){window.close()},30000);</script>');
}
}

}else{
respon.arsipC(res,404,{"Content-Type":"text/html"},"<h1>404 Halaman Not Found</h1>");
}

});
/*AIzaSyCxSeRD3t61HYSBCeV4Z8z1L1TY_lpaLLQ*/
var io=require("socket.io")(server);
io.on("connection",function(socket){
var user=[];
var cekIp=ip.infoX(),ins={alamat_ip:cekIp.getIP()};

if(user.indexOf(cekIp.getIP())==-1){
//IP User dikirim ke array user
user.push(cekIp.getIP());
}
socket.on("pesan",function(msg){
youtube.cari({
part:"snippet",
key:"AIzaSyCxSeRD3t61HYSBCeV4Z8z1L1TY_lpaLLQ",
maxResults:25,
q:msg,
}).then(function(s){
socket.emit("hpesan",JSON.stringify(s));

});

});
var juml=user.length;
//User dihitung
socket.emit("juser",juml.toString());

socket.on("disconnect",function(){
user.splice(user.indexOf(cekIp.getIP()),1);
});

});
server.listen(port,(err)=>{
if(err) throw err;
console.log(`Server is running at PORT ${port}`);
});
}catch(e){
console.log("Server Error bro :  "+e);
}
