echo "====================================================================================================="
echo "我的世界 1.15.2 原版服务器启动"
echo "Minecraft 1.15.2 original server starts"
echo "-----------------------------------------------------------------------------------------------------"
kill MinecraftServer
screen -S MinecraftServer
java -Xmx4096M -jar /home/server/1.15.2/1.15.2server.jar
echo "-----------------------------------------------------------------------------------------------------"
echo "stop"
echo "====================================================================================================="