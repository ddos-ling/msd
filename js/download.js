function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(decodeURI(r[2])); return null;
};

var dw_service = GetQueryString("dw");

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

function display() {
    $("#vanilla").load("./" + dw_service + "/vanilla.html");
    $("#craftbukkit").load("./" + dw_service + "/craftbukkit.html");
    $("#spigot").load("./" + dw_service + "/spigot.html");
    $("#dw-name").load("./" + dw_service + "/name.html");
}