function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return decodeURI(decodeURI(r[2])); return null;
};

var dw_service=GetQueryString("dw");

$("#vanilla").load("./"+dw_service+"/vanilla.html");
$("#craftbukkit").load("./"+dw_service+"/craftbukkit.html");
$("#spigot").load("./"+dw_service+"/spigot.html");
$("#paper").load("./"+dw_service+"/paper.html");