"use strict";
try{
var mysql=require("mysql");

exports.hubungkan=function(namaDB){
var x=new konek(namaDB);
return x;
};
var konek=function(namaDB){
try{
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:namaDB,
});
con.connect((err)=>{
if (err) throw err;
console.log("Terhubung ke database");
});

this.insertData=function(cm,arr){
if(typeof cm==="string"&&typeof arr==="object"){
con.query(cm,arr,(err)=>{
if(err) throw err;


if(err){
console.log("insertData Error "+err);
}
});
}else{
console.error("insertData : param1 harus string, param2 harus object");
}
};

this.deleteData=function(cm,arr){
if(typeof cm==="string"&&typeof arr==="object"){
con.query(cm,arr,(err)=>{
if(err) throw err;


if(err){
console.log("deleteData Error "+err);
}
});
}else{
console.error("deleteData : param1 harus string, param2 harus object");
}
};

this.queryData=function(cm,arr,pesan){
if(typeof cm==="string"&&typeof arr==="object"){
con.query(cm,arr,(err)=>{
if(err) throw err;


if(err){
console.log("queryData Error "+err);
}
});
}else{
console.error("queryData : param1 harus string, param2 harus object");
}
return con;
};


//akhir
}catch(ex){
console.error("konek error "+e);
}
};

}catch(e){
console.error("msql Error : "+e);
}
