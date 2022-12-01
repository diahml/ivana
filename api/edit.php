<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$username=$data['username'];
$nama = $data['nama'];
$email = $data['email'];
$telp = $data['telp'];
$alamat = $data['alamat'];
$pass = $data['password'];
$password = md5($pass);
 
$query = mysqli_query($koneksi,"update user set email='$email', nama='$nama', telp='$telp', alamat='$alamat' where username='$username'");
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