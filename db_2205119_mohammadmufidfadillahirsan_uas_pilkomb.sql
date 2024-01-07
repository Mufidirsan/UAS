-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 11:50 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2205119_mohammadmufidfadillahirsan_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Table structure for table `peminjamanbuku`
--

CREATE TABLE `peminjamanbuku` (
  `judul_buku` text NOT NULL,
  `jumlah` int(11) NOT NULL,
  `nama_peminjam` text NOT NULL,
  `alamat_peminjam` text NOT NULL,
  `noHp_peminjam` text NOT NULL,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_pengembalian` date NOT NULL,
  `lama_pinjam` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjamanbuku`
--

INSERT INTO `peminjamanbuku` (`judul_buku`, `jumlah`, `nama_peminjam`, `alamat_peminjam`, `noHp_peminjam`, `tanggal_pinjam`, `tanggal_pengembalian`, `lama_pinjam`, `id`) VALUES
('Filosifi teras, gadis kretek', 2, 'Irsan', 'Ciawi', '08969513214', '2024-01-01', '2024-01-08', '1 minggu', 9),
('bumi, berani tak disukai, laskar pelangi', 3, 'mufid', 'sukabumi', '08961245', '2024-01-01', '2024-01-09', '8 hari', 10),
('cinta brountosaurus', 1, 'fadil', 'sukajadi', '08969524159', '2024-01-01', '2024-01-04', '3 hari', 11),
('manusia setengan salmon', 1, 'guren', 'bandung', '09214108214', '2024-01-01', '2024-01-02', '1  hari', 12),
('koala kumal, marmut merah jambu', 2, 'yahya', 'bogor', '09219015172', '2024-01-01', '2024-01-06', '5 hari', 13);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `peminjamanbuku`
--
ALTER TABLE `peminjamanbuku`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `peminjamanbuku`
--
ALTER TABLE `peminjamanbuku`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
