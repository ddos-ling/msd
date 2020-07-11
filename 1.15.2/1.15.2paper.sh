echo "====================================================================================================="
echo "我的世界 1.15.2 Paper服务器一键安装程序"
echo "Minecraft 1.15.2 Paper server one click setup"
echo "下载源: Gitee"
echo "download source: gitee"
echo "作者: DDoS_LING"
echo "by DDoS_ LING"
echo "编写日期: 2020年7月12日"
echo "Date of preparation: July 12, 2020"
echo "更新日期: 2020年7月12日"
echo "Updated: July 12, 2020"
echo "提醒: 为保证脚本能够正常安装，请以root权限运行！"
echo "RemindIn: order to ensure that the script can be installed normally, please run with root privilege!"
echo "-----------------------------------------------------------------------------------------------------"
echo "安装开始"
echo "Installation begins"
echo ""
echo "提醒:过程中出现 [y/d/n] 请输入y"
echo "Reminder: Please enter y if [y/d/n] appears in the process"
echo "-----------------------------------------------------------------------------------------------------"
mkdir -p /home/server/1.15.2/
echo ""
echo "1. 安装 java-1.8.0"
echo "1. Install java-1.8.0"
echo ""
yum -y install java-1.8.0-openjdk*
echo ""
echo "2. 安装 Screen"
echo "2. Install Screen"
echo ""
yum install screen
echo ""
echo "3. 下载 Minecraft 1.15.2 Paper server"
echo "3. Download Minecraft 1.15.2 Paper server"
echo ""
wget -O /home/server/1.15.2/1.15.2paper.jar https://ddos_ling.gitee.io/minecraftserver-download/1.15.2/1.15.2paper.jar
echo ""
echo "4. 设置开服许可"
echo "4. Set up service permission"
echo ""
wget -O /home/server/1.15.2/eula.txt https://ddos_ling.gitee.io/minecraftserver-download/1.15.2/eula.html
echo ""
echo "5. 下载启动脚本"
echo "5. Download startup script"
echo ""
wget -O /home/server/1.15.2/startPaper.sh https://ddos_ling.gitee.io/minecraftserver-download/1.15.2/startPaper.sh
echo ""
echo "6. 下载 cache"
echo "6. Download cache"
echo ""
mkdir -p /home/server/1.15.2/cache/
wget -O /home/server/1.15.2/cache/mojang_1.15.2.jar https://ddos_ling.gitee.io/minecraftserver-download/1.15.2/cache/mojang_1.15.2.jar
wget -O /home/server/1.15.2/cache/patched_1.15.2.jar https://ddos_ling.gitee.io/minecraftserver-download/1.15.2/cache/patched_1.15.2.jar

echo ""
echo "-----------------------------------------------------------------------------------------------------"
echo "安装完成"
echo "Installation is complete"
echo "-----------------------------------------------------------------------------------------------------"
echo "安装信息:"
echo "安装位置: /home/server/1.15.2/"
echo "所属用户: server"
echo "开服命令: sh /home/server/1.15.2/startPaper.sh"
echo ""
echo "installation information:"
echo "installation location: /home/server/1.15.2/"
echo "user: server"
echo "command: sh /home/server/1.15.2/startPaper.sh"
echo ""
echo "安全警告: 为保证服务器安全，请为server用户设置密码！命令：passwd server"
echo "Security warning: To ensure the security of the server, please set the password for the server user! Command: passwd server"
echo "====================================================================================================="
rm -rf /home/installMC.sh