<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$pesan =[];


$id_sewa = $_GET['id_sewa'];
$query = mysqli_query($koneksi,"delete from sewa where id_sewa='$id_sewa'");
if ($query) {
	http_response_code(201);
	$pesan['status'] = 'sukses';
}else{
	http_response_code(422);
	$pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);

 ?>