var fs=require("fs");

function responL(res,status,tipe,pesan){
res.writeHead(status,tipe);
res.end(pesan);
}
function responS(res,tipe,pesan){
res.writeHead(200,tipe);
res.end(pesan);
}
function responG(res,tipe,pesan){
res.writeHead(403,tipe);
res.end(pesan);
}

function bcF(req,res,fileName){
var o=fs.createReadStream(fileName);
var htm="";
o.on("data",(chunk)=>{
htm+=chunk;
});
o.on("end",()=>{
if(req.url.indexOf(".html")!=-1||fileName.indexOf(".html")!=-1){
responS(res,{"Content-Type":"text/html"},htm);
}else if(req.url.indexOf(".css")!=-1||fileName.indexOf(".css")!=-1){
responS(res,{"Content-Type":"text/css"},htm);
}else if(req.url.indexOf(".js")!=-1||fileName.indexOf(".js")!=-1){
responS(res,{"Content-Type":"text/javascript"},htm);
}else if(req.url.indexOf(".json")!=-1||fileName.indexOf(".json")!=-1){
responS(res,{"Content-Type":"application/json"},htm);
}
});
}

exports.arsipC=function(res,status,tipe,pesan){
responL(res,status,tipe,pesan);
};

exports.bacaFS=function(req,res,fileName){
bcF(req,res,fileName);
};

exports.responHTML=function(req,res,pesan){
responS(res,{"Content-Type":"text/html"},pesan);
};
