function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(decodeURI(r[2])); return null;
};

function display() {
    $("#vanilla").load("./" + dw_service + "/vanilla.html");
    $("#craftbukkit").load("./" + dw_service + "/craftbukkit.html");
    $("#spigot").load("./" + dw_service + "/spigot.html");
    $("#dw-name").load("./" + dw_service + "/name.html");
}
function add_id() {
    var objs = document.getElementsByName("server_file");
    for (var i = 0; i < objs.length; i++) {
        console.log("ID创建 " + objs[i].innerText);
        objs[i].id = objs[i].innerText;
    }
    console.log("ID创建完毕");
    return true;
}

var dw_service = GetQueryString("dw");
var dw_file = GetQueryString("file");


if (dw_service == null || dw_service == "") {
    dw_service = "lanzou";
} else if (dw_service != "lanzou" && dw_service != "123pan" && dw_service != "aliyun") {
    mdui.dialog({
        title: 'Error',
        content: '找不到对应的下载服务器',
        buttons: [
            {
                text: '确认',
            }
        ],
        onClosed: function (inst) {
            dw_service = "lanzou";
            display();
            mdui.snackbar({
                message: '已使用默认的蓝奏云下载源',
                position: 'right-top',
                buttonText: '更换',
                onButtonClick: function () {
                    location.href = "/?dw=noset";
                }
            });
        }
    });
}

display();

window.onload = function () {
    if (add_id()) {
        console.log("检测是否有直接下载的文件");
        if (dw_file != null && dw_file != "" && dw_service != "" && dw_service != null) {
            console.log("下载文件 " + dw_file);
            mdui.snackbar({
                message: '即将下载 ' + dw_file + ' 文件',
                position: 'right-top'
            });
            window.location.href = document.getElementById(dw_file).href;
        }else{
            console.log("没有下载跳转");
        }
    }
}