-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2022 at 02:57 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ivana`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `nama` text NOT NULL,
  `telp` text NOT NULL,
  `alamat` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `nama`, `telp`, `alamat`, `password`) VALUES
(13, 'admin@gmail.com', 'admin', '0823749300', 'Purbalingga', 'd41d8cd98f00b204e9800998ecf8427e'),
(16, 'jun@gmail.com', 'junhui', '0934857393', 'Guangzhou', 'd41d8cd98f00b204e9800998ecf8427e'),
(17, 'aida@gmail.com', 'aida', '0878324734', 'Purwokerto', 'd41d8cd98f00b204e9800998ecf8427e');

-- --------------------------------------------------------

--
-- Table structure for table `mobil`
--

CREATE TABLE `mobil` (
  `id_mobil` varchar(20) NOT NULL,
  `warna` varchar(250) NOT NULL,
  `merk` varchar(250) NOT NULL,
  `kapasitas` int(11) NOT NULL,
  `stok` int(11) NOT NULL,
  `foto` varchar(250) NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mobil`
--

INSERT INTO `mobil` (`id_mobil`, `warna`, `merk`, `kapasitas`, `stok`, `foto`, `harga`) VALUES
('A01', 'Silver Metalic', 'Avanza', 6, 1, 'http://localhost:8080/api/foto/4-avanza-silver-mica-metallic.png', 200000),
('D01', 'White', 'Daihatsu Terios', 8, 0, 'http://localhost:8080/api/foto/terios.jpg', 300000),
('M01', 'Grey Metalic', 'Mitsubushi Xpander', 7, 1, 'http://localhost:8080/api/foto/xpander.png', 300000),
('T01', 'White Pearl', 'Toyota Alphard', 8, 0, 'http://localhost:8080/api/foto/1. alphard colors white pearl.png', 500000);

-- --------------------------------------------------------

--
-- Table structure for table `sewa`
--

CREATE TABLE `sewa` (
  `id_sewa` int(20) NOT NULL,
  `id_mobil` varchar(20) NOT NULL,
  `nama` text NOT NULL,
  `merk` text NOT NULL,
  `lama_sewa` int(11) NOT NULL,
  `biaya` int(11) NOT NULL,
  `status` text NOT NULL,
  `pinjam` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sewa`
--

INSERT INTO `sewa` (`id_sewa`, `id_mobil`, `nama`, `merk`, `lama_sewa`, `biaya`, `status`, `pinjam`) VALUES
(11, 'D01', 'Anggita', 'Daihatsu Terios', 2, 600000, 'Lunas', 'Dikembalikan'),
(12, 'D01', 'Anggita', 'Daihatsu Terios', 1, 300000, 'Belum Dibayar', 'Butuh Diambil');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `nama` text NOT NULL,
  `telp` text NOT NULL,
  `alamat` text NOT NULL,
  `level` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `email`, `nama`, `telp`, `alamat`, `level`) VALUES
(1, 'tes', 'b93939873fd4923043b9dec975811f66', '', '', '', '', ''),
(2, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@gmail.com', 'admin', '082374528492', 'Jawa Tengah', 'admin'),
(3, 'user', 'ee11cbb19052e40b07aac0ca060c23ee', 'user@gmail.com', 'User', '0848324712', 'Purwokerto', 'user'),
(4, 'tina', 'ef2afe0ea76c76b6b4b1ee92864c4d5c', 'tina@gmail.com', 'tina', '0873249324009', 'Seoul', 'user'),
(9, 'jun', '6b5843ce9d2d0599c3e3ce6d59c1551f', 'jun@gmail.com', 'jun', '8234783249', 'china', 'user'),
(10, 'jun', '6b5843ce9d2d0599c3e3ce6d59c1551f', 'jun@gmail.com', 'jun', '087364829327', 'China', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`,`email`);

--
-- Indexes for table `mobil`
--
ALTER TABLE `mobil`
  ADD PRIMARY KEY (`id_mobil`);

--
-- Indexes for table `sewa`
--
ALTER TABLE `sewa`
  ADD PRIMARY KEY (`id_sewa`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `sewa`
--
ALTER TABLE `sewa`
  MODIFY `id_sewa` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
