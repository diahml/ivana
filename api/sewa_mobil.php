<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$id_mobil = trim($data['id_mobil']);
$merk = trim($data['merk']);
$nama = trim($data['nama']);
$lama = trim($data['lama']);
$biaya = trim($data['biaya']);
$pembayaran ='Belum Lunas';
$status ='Belum Dibayar';
$pinjam ='Butuh Diambil';
$stok=0;

if ($id_mobil != '' and $merk != '' and $nama != '' and $lama != '' and $biaya != '' ) {
	$query = mysqli_query($koneksi,"insert into sewa(id_mobil, nama, merk, lama_sewa, biaya,status, pinjam) values('$id_mobil','$nama','$merk','$lama','$biaya','$status','$pinjam')");
	$query = mysqli_query($koneksi,"update mobil set stok='$stok' where id_mobil='$id_mobil'");


}else{
	$query = mysqli_query($koneksi,"delete from sewa where id_mobil='$id_mobil'");
}


// if ($query) {
// 	http_response_code(201);
// 	$pesan['status'] = 'sukses';
// }else{
// 	http_response_code(422);
// 	$pesan['status'] = 'gagal';
// }

echo json_encode($pesan);
echo mysqli_error($koneksi);

?>