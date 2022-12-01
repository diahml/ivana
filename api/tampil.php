<?php 
require 'koneksi.php';
$data = [];
$query = mysqli_query($koneksi,"select username, email, nama, telp, alamat, password from user where level='admin'");
while ($row = mysqli_fetch_object($query)) {
	$data[] = $row;
}
//tampilkan data dalam bentuk json
echo json_encode($data);
echo mysqli_error($koneksi);

?>