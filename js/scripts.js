"use strict";
try{
function waktu(){
document.querySelector("#info-device").innerText=(new Date().toLocaleTimeString());
}
setInterval(waktu,500);
}catch(e){
alert("Error at file Index.html : Error => "+e);
}
try{
$(function(){
var socket=io();
$('form').submit(function(e){
e.preventDefault();
socket.emit("pesan",$('#carix').val());
$('#carix').val();
document.querySelector(".loading").className="d-block loading spinner-grow card-text";
document.querySelector("#hasil-pencarian").className="d-none card-text woa-hasil-batas ";
return false;
});
socket.on("juser",function(msg){
document.getElementById("info-visitor").innerText=msg;
});
socket.on("hpesan",function(out){
var a=JSON.parse(out),b=a.split("<>"),c=b,d=document.getElementById("hasil-pencarian"),e=[],f="",jum=0;
for(var ix=0;ix<c.length;ix++){
if(typeof c[ix]==="string"){
e.push(c[ix].split(","));
}else{
e.push(c[ix]);
}
}
for(var ix=0;ix<e.length;ix++){
for(var xi=0;xi<e[ix].length;xi++){
if(typeof e[0][xi]!=="undefined"){
jum++;
f+="<span class='woa-huruf'>"+(jum)+" => Judul :  "+e[2][xi]+"</span><br><br><span class='woa-huruf'>Dikirim oleh "+e[1][xi]+"</span><br><a class='woa-huruf' href='javascript:window.open(\" "+location.origin+"/woa-download/"+e[0][xi]+"\");'>Unduh MP3</a><br><br>";
}
}
}
$(".status").text("1 dari "+jum);
d.innerHTML="",d.innerHTML=f,jum=0;
document.querySelector(".loading").className="d-none loading spinner-grow card-text";
document.querySelector("#hasil-pencarian").className="d-block card-text woa-hasil-batas ";
e=[];
});

});
}catch(e){
alert("Error socket :  "+e);
}