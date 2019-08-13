var axios=require("axios");
var qs=require("querystring");
var enk=require("./Woaenc");
exports.cari=function(xparam){
"use strict";
try{
if(typeof xparam==="object"){
var ag=axios.get("https://www.googleapis.com/youtube/v3/search?"+qs.stringify(xparam)).then(function(s){
var results=s.data,id=[],judul=[],kirim=[];
results.items.map(function(res){
if(typeof res.id.videoId!=="undefined"){
id.push(enk.wanEnc(enk.wanInj(res.id.videoId)));
judul.push(res.snippet.channelTitle);
kirim.push(res.snippet.title);
}
});
return id+"<>"+judul+"<>"+kirim;
}).catch(function(e){
console.error("Axios promise get Error : "+e);
});
return ag;
}else{
console.error("param1 must string, param2 must object, param3 must function");
}
}catch(e){
console.error("Error at file "+__filename+" Errors messages :   "+e);
}

};
