#linux系统目录
##/bin
放置执行文件，系统中很多常用命令放在这里
##/boot
启动相关
##/dev
设备
##/etc
系统主要的配置文件，如人员的账号密码，各种服务的启动文件等
##/lib
系统启动用的函数库，以及/bin和/sbin下面的命令会调用的库函数
##/mnt
临时挂载东西的
##/src
一些网络服务启动后，这些服务所需要使用的数据目录，例如www服务器需要的网页数据
##/sbin（super bin？）
一些只有root用户才能用来设置系统的命令
##/opt
存放第三方辅助软件
##/var
##/usr
UNIX Software Resource的缩写，是放软件的，类似于windows下的c:\Windows + c:\Program Files\。FHS要求此目录下必须含有 bin、lib、local、sbin、share五个目录。
