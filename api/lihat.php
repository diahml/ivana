<?php 
require 'koneksi.php';
$data = [];
$username = $_GET['username'];
$query = mysqli_query($koneksi,"select email,nama,telp,alamat from user where username ='$username'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);

 ?> 