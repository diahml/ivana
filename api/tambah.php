<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$username = trim($data['username']);
$email = trim($data['email']);
$nama = trim($data['nama']);
$telp = trim($data['telp']);
$alamat = trim($data['alamat']);
$pass = trim($data['password']);
$password = md5($pass);
$level = 'admin';

if ($username != '' and $password != '' and $email != '' and $nama != '' and $telp != '' and $alamat != '') {
	$query = mysqli_query($koneksi,"insert into user(username, password, email, nama, telp, alamat, level) values('$username','$password','$email','$nama','$telp', '$alamat','$level')");

}else{
	$query = mysqli_query($koneksi,"delete from user where username='$username'");
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