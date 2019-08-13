echo "Mendapatkan info";
sleep 2
echo "Sedang konfigurasi";
sleep 1
echo "Menghapus fluent-ffmpeg di global";
sleep 1
#npm install -g fluent-ffmpeg --save
echo "Selamat, Package fluent-ffmpeg sudah di hapus";
sleep 2
echo "Mencopot socket.io";
npm uninstall socket.io --save
echo "Socket.io sudah dicopot";
sleep 1
echo "Mencopot axios";
npm uninstall axios --save
echo "Axios sudah dicopot";
sleep 1
echo "Mencopot lib mysql";
npm uninstall mysql --save
echo "Mysql sudah dicopot";
sleep 1
echo "Mencopot lib ytdl-core";
npm uninstall ytdl-core --save
echo "ydtl-core sudah dicopot";
sleep 1
sleep 2
echo "Semua package sudah dicopot";
sleep 1
exit
