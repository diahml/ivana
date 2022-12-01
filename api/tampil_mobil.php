<?php 
require 'koneksi.php';
$data = [];
$query = mysqli_query($koneksi,"select * from mobil where stok>=1");
while ($row = mysqli_fetch_object($query)) {
	$data[] = $row;
}
//tampilkan data dalam bentuk json
echo json_encode($data);
echo mysqli_error($koneksi);

?>