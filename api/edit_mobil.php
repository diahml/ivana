<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$id_mobil=$data['id_mobil'];
$warna=$data['warna'];
$merk = $data['merk'];
$kapasitas = $data['kapasitas'];
$stok = $data['stok'];
$harga = $data['harga'];

// $foto_tmp=$_FILES['foto']['tmp_name'];
// $nama_foto =$_FILES['foto']['name'];
// $upload='foto/'.$nama_foto;
// $images='http://localhost:8080/api/'.$upload;
// move_uploaded_file($foto_tmp,$upload);
 
$query = mysqli_query($koneksi,"update mobil set warna='$warna', merk='$merk', kapasitas='$kapasitas', stok='$stok', harga='$harga' where id_mobil='$id_mobil'");
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