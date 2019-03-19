#Linux用户系统
使用ls -al查看目录中内容的详细信息，其中第一栏显示的是项目的类型和权限，一共10位，第一位是类型，d是目录，-是文件，l是链接文件。接下来每三位一组分别代表拥有着权限、同用户组权限、其他用户权限
##修改文件属性和权限
三个命令：
* chgrp：修改文件所属用户组 chgrp groupName file
* chown：修改文件拥有者 chown owner file
* chmod：修改文件权限 chmod rwx file
