"use strict";
try{
exports.wanEnc=function(heX){
var a=woaEnc(heX);
return a;
};
exports.wanDec=function(heX){
return woaDec(heX);
};
exports.wanInj=function(hex){
return woaInj(hex);
};
/*var jx=woaDec("3034+1+15+18-4119365115335333371739283719623464");
console.log(jx);*/
function woaInj(xax){
if(typeof xax==="string"){
var yax=xax.split(",");
yax.splice(5,0,"wan");
return yax.join("").toString();
}else{
console.error("woaInj Error : Tipe harus string");
return "Error";
}
}

function woaEnc(xa){
var b=Buffer.from(xa,'ascii');
var c=b.toString("base64");
var wan=c;
var awoa="abcDEFghiJKLmnoPQRstuVWXyzABCdefGHIjklMNOpqrSTUvwxYZ=",
bwoa=[],cwoa=[],dwoa=[],ewoa=0,fwoa,hasil=[];
if(wan.indexOf(0)!=-1||wan.indexOf(1)!=-1||wan.indexOf(2)!=-1||wan.indexOf(3)!=-1||wan.indexOf(4)!=-1||
	wan.indexOf(5)!=-1||wan.indexOf(6)!=-1||wan.indexOf(7)!=-1||wan.indexOf(8)!=-1||wan.indexOf(9)!=-1||
	wan.indexOf("=")!=-1){
 for(var i=0;i<wan.length;i++){
	 if(awoa.indexOf(wan[i])!=-1){
		 bwoa.push(awoa.indexOf(wan[i])+12);
	 }else{
	 	ewoa++;
	 	 cwoa.push(wan[i]);
	 }
	}
	
	 for(var i=0;i<wan.length;i++){
	 if(awoa.indexOf(wan[i])==-1){
	 	 cwoa.push("+"+i);
	 }
	}
	cwoa.unshift(ewoa);
	dwoa.push(String(cwoa+"-"+bwoa));
	fwoa=dwoa[0].split(",").join("");
	hasil.push(fwoa.toString());
	}else{
	 var rec=Buffer.from(wan,"base64").toString("ascii");
	 awoa="4536271890"
		for(var i=0;i<rec.length;i++){
			hasil.push(awoa.indexOf(rec[i]));
		}
	}
	return hasil.join("").toString();
}
function woaDec(wan){
var chasil="";
if(wan.indexOf("+")!=-1||wan.indexOf("-")!=-1||wan.indexOf(0)!=-1||wan.indexOf(1)!=-1||wan.indexOf(2)!=-1||
	wan.indexOf(3)!=-1||wan.indexOf(4)!=-1||wan.indexOf(5)!=-1||wan.indexOf(6)!=-1||wan.indexOf(7)!=-1||wan.indexOf(8)!=-1||
	wan.indexOf(9)!=-1){
var recodeX="abcDEFghiJKLmnoPQRstuVWXyzABCdefGHIjklMNOpqrSTUvwxYZ=";
var awoa=[],bwoa=[],cwoa=wan.substr(0,wan.indexOf("-")),dwoa=cwoa.split("+"),
ewoa=wan.substr(wan.indexOf("-")+1,wan.length),fwoa="",gwoa=[],hwoa,hasil=[];
if(typeof wan==="string"){
	for(var i=0;i<dwoa.length;i++){
		awoa.push(dwoa[i]);
	}
	for(var i=0;i<ewoa.length;i++){
		if(fwoa.length===2){
			bwoa.push(fwoa);
			fwoa="";
		}
		fwoa+=ewoa[i];
	}bwoa.push(ewoa[ewoa.length-2]+ewoa[ewoa.length-1]);
	for(var i=0;i<bwoa.length;i++){
	 gwoa.push(recodeX[bwoa[i]-12]);
	}
	hwoa=awoa[0];
	for(var i=0;i<hwoa.length;i++){
		 if(i===0){
		 	
		 }else{
		 	  gwoa.splice(awoa[i],0,hwoa[i]);
		 	}
	}
	var dhasil=gwoa.join("").toString();
	var keHuruf=Buffer.from(dhasil,"base64").toString("ascii");
	if(keHuruf.indexOf("wan")!=-1){
	var akh=keHuruf.split("wan").join("").toString();
		chasil+=akh;
	}else{
		chasil+="Error";
	}
	//Batas
}else{
	console.error("WoaDec Error :  Tipe harus string");
}
}else{
//block mac
//nul
}
return chasil;
}
}catch(e){
console.log("Woaenc Error : "+e);
}

/*Algoritma program ini 
Program ini hanya hasil dari request video-id youtube merubah huruf menjadi nilai index dan yang angka hanya tetap dan tidak berubah

fungsi woaEnc
Pertama dirubah dulu menjadi base64
hasil dari base64 yang hurufnya saja dirubah menjadi nomor index huruf dan yang angka tetap menjadi konstanta
 */
