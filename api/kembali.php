<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$pesan =[];

$id_mobil = $_GET['id_mobil'];
$stok=1;
$pinjam ="Dikembalikan";
$query = mysqli_query($koneksi,"update mobil set stok='$stok' where id_mobil='$id_mobil'");
$sql= mysqli_query($koneksi, "update sewa set pinjam='$pinjam' where id_mobil='$id_mobil'" );
if ($query && $sql) {
	http_response_code(201);
	$pesan['status'] = 'sukses';
}else{
	http_response_code(422);
	$pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);

 ?>