var os=require("os");
var ip=os.networkInterfaces();

exports.infoX=function(){
var x=new so();
return x;
};

var so=cekIP=function(){
this.getIP=function(){
var hasil="";
if(ip.wlan0){
if(typeof ip.wlan0==="undefined"){
	console.log("Wifi anda tidak terhubung internet");
}else{
	console.log(ip.wlan0[0].address);
    hasil+=ip.wlan0[0].address;
}
}else if(ip.rmnet0){
if(typeof ip.rmnet0==="undefined"){
	console.log("Anda tidak terhubung internet");
	}else{
hasil += ip.rmnet0[0].address;
}
}else{
hasil=false;
//ip not found
}
return hasil;
};

this.getMAC=function(){
var hasil="";
if(ip.wlan0){
hasil+=ip.wlan0[0].mac;
}else if(ip.rmnet0){
hasil+=ip.rmnet0.address;
}else{
hasil=false;
//Mac not found
}
};
//Akhir

};
