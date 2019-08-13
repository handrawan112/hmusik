var youtub=require("./youtube-x");
exports.cariYoutube=function(qk){
"use strict";
try{
if(typeof qk==="string"){
var params={
part:"snippet",
key:"AIzaSyCxSeRD3t61HYSBCeV4Z8z1L1TY_lpaLLQ",
maxResults:20,
q:qk,
};
var hasil=youtub.cari(params).then((res)=>{
if(typeof res==="string"){
var ba=res.split("<>"),b=[];
for(var i=0;i<ba.length;i++){
if(typeof ba[i]==="string"){
b.push(ba[i].split(","));
}else if(typeof ba[i]==="object"){
b.push(ba[i]);
}
}
}
return b;
});
return hasil;
}else{
console.error("Sorry parameters must string type please fix parameters data");
}
}catch(e){
console.error("Error at cari.js and function cariYoutube : Errors "+e);
}
};//Akhir


