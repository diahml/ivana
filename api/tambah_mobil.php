<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$id_mobil=$_POST['id_mobil'];
$warna =$_POST['warna'];
$merk = $_POST['merk'];
$kapasitas = $_POST['kapasitas'];
$stok = $_POST['stok'];
$harga = $_POST['harga'];

// $foto = trim($data['fotomobil']);
$foto_tmp=$_FILES['foto']['tmp_name'];
$nama_foto =$_FILES['foto']['name'];

$upload='foto/'.$nama_foto;
$images='http://localhost:8080/api/'.$upload;
move_uploaded_file($foto_tmp,$upload);

if ($id_mobil != '' and $warna != '' and $merk != '' and $kapasitas != '' and $stok != '' and $harga != '') {
	$query = mysqli_query($koneksi,"insert into mobil(id_mobil, warna, merk, kapasitas, stok, foto, harga) values('$id_mobil','$warna','$merk','$kapasitas','$stok', '$images','$harga')");

}else{
	$query = mysqli_query($koneksi,"delete from mobil where id_mobil='$id_mobil'");
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