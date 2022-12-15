-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2022 at 05:44 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quanlysupportit`
--

-- --------------------------------------------------------

--
-- Table structure for table `ituser`
--

CREATE TABLE `ituser` (
  `Itsupport_ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ituser`
--

INSERT INTO `ituser` (`Itsupport_ID`, `name`, `email`) VALUES
(1, 'đặng thanh sơn', 'sondang19922fpt.edu.vn'),
(2, 'lê văn bảo', 'baole291@fpt.edu.vn'),
(3, 'lê văn minh', 'minhle1928@fpt.edu.vn'),
(7, 'Đặng thanh sơn', 'sondt48@fpt.edu.vn');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `idticket` varchar(200) NOT NULL,
  `msv` varchar(20) DEFAULT NULL,
  `email` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `service` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `Itsupport_ID` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `datecreate` datetime DEFAULT NULL,
  `dateiITrecivie` datetime DEFAULT NULL,
  `roomchat` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`idticket`, `msv`, `email`, `name`, `service`, `content`, `Itsupport_ID`, `status`, `datecreate`, `dateiITrecivie`, `roomchat`) VALUES
('9c853054efc12f59e60ebddc6a739c6e', 'iendt77', 'hiendt77@fpt.edu.vn', 'Dao Thi Hien (FE PTCD HPG)', 'Hỗ trợ LMS', 'tôi muốn bay cao', 7, 1, '2022-12-12 20:06:35', '2022-12-12 20:06:53', 1),
('c7c5b6a56b120f9c2472d7e3c069b6a0', 'iendt77', 'hiendt77@fpt.edu.vn', 'Dao Thi Hien (FE PTCD HPG)', 'Hỗ trợ máy móc', 'd,mm', 7, 1, '2022-12-12 21:13:53', '2022-12-12 21:14:04', 2),
('df92857200cfbcac33df2efc622828b0', 'iendt77', 'hiendt77@fpt.edu.vn', 'Dao Thi Hien (FE PTCD HPG)', 'Hỗ trợ LMS', 'chao di', 7, 1, '2022-12-12 21:21:11', '2022-12-12 21:21:18', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mess`
--

CREATE TABLE `tbl_mess` (
  `id_chat` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `content` text NOT NULL,
  `roomid` int(11) NOT NULL,
  `time_send` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_mess`
--

INSERT INTO `tbl_mess` (`id_chat`, `type`, `content`, `roomid`, `time_send`) VALUES
(2, 1, 'hayqua', 1, '2022-12-13 13:36:28'),
(3, 2, 'hayqua', 2, '2022-12-13 13:36:54'),
(4, 2, 'hayqua', 1, '2022-12-13 13:37:01'),
(5, 1, 'hay2qua', 1, '2022-12-13 13:37:11'),
(6, 1, 'hay2qua', 1, '2022-12-13 13:37:16'),
(7, 1, 'hay2qua', 7, '2022-12-13 13:37:22'),
(8, 1, 'hay2qua', 1, '2022-12-13 13:37:46'),
(9, 2, 'o', 1, '2022-12-13 17:50:20'),
(10, 1, 'n', 1, '2022-12-13 17:50:41'),
(11, 1, 'hello', 1, '2022-12-13 17:50:48'),
(12, 2, 'u', 1, '2022-12-13 17:50:51'),
(13, 2, 'chào', 1, '2022-12-13 17:52:55'),
(14, 1, 'g', 1, '2022-12-13 17:53:03'),
(15, 1, 'a', 1, '2022-12-13 17:53:06'),
(16, 2, 'dmm', 1, '2022-12-13 17:53:14'),
(17, 2, 'h', 1, '2022-12-13 17:58:09'),
(18, 1, 'chao thanh lien', 1, '2022-12-13 17:58:26'),
(19, 2, 'muốn ăn đấp không', 1, '2022-12-13 17:58:41'),
(20, 1, 's', 1, '2022-12-13 17:59:35'),
(21, 2, 'v', 1, '2022-12-13 17:59:39'),
(22, 2, 'h', 1, '2022-12-13 17:59:56'),
(23, 1, 'j', 1, '2022-12-13 18:00:01'),
(24, 2, 's', 1, '2022-12-15 17:34:33'),
(25, 2, '\nl', 1, '2022-12-15 17:34:59'),
(26, 1, 'o', 1, '2022-12-15 17:35:54'),
(27, 1, 'o', 1, '2022-12-15 17:36:09'),
(28, 2, 'dmm', 1, '2022-12-15 17:36:17'),
(29, 1, 'j', 1, '2022-12-15 22:03:44'),
(30, 2, 'ee cu', 1, '2022-12-15 22:03:50'),
(31, 1, 'dam nhau khong', 1, '2022-12-15 22:03:57'),
(32, 2, 'ok lun', 1, '2022-12-15 22:04:03'),
(33, 1, 'dmm', 1, '2022-12-15 22:04:07'),
(34, 2, 'chao cu', 1, '2022-12-15 22:04:11'),
(35, 1, 'chao m', 1, '2022-12-15 22:04:17'),
(36, 2, 'alnflkd', 1, '2022-12-15 22:04:23'),
(37, 2, 's', 1, '2022-12-15 22:04:25'),
(38, 2, 's', 1, '2022-12-15 22:04:26'),
(39, 2, 'v', 1, '2022-12-15 22:11:31'),
(40, 2, 'g', 1, '2022-12-15 22:55:45'),
(41, 2, 'g', 1, '2022-12-15 22:55:49'),
(42, 2, 'g', 1, '2022-12-15 22:56:03'),
(43, 2, 'helo c', 1, '2022-12-15 22:58:27'),
(44, 1, 'h', 1, '2022-12-15 23:01:54'),
(45, 1, 'h', 1, '2022-12-15 23:09:04'),
(46, 1, 'g', 1, '2022-12-15 23:09:56'),
(47, 1, 'h', 1, '2022-12-15 23:10:22'),
(48, 1, 'h', 1, '2022-12-15 23:10:25'),
(49, 1, 'h', 1, '2022-12-15 23:10:28'),
(50, 2, 'g', 1, '2022-12-15 23:10:42'),
(51, 2, 'dmm', 1, '2022-12-15 23:10:46'),
(52, 1, 'hell', 1, '2022-12-15 23:10:51');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_service`
--

CREATE TABLE `tbl_service` (
  `id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_service`
--

INSERT INTO `tbl_service` (`id`, `name`) VALUES
(1, 'Hỗ trợ mạng'),
(2, 'Hỗ trợ LMS'),
(3, 'Hỗ trợ CMS'),
(4, 'Hỗ trợ máy móc'),
(5, 'Khác');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ituser`
--
ALTER TABLE `ituser`
  ADD PRIMARY KEY (`Itsupport_ID`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`idticket`),
  ADD KEY `itsuport` (`Itsupport_ID`);

--
-- Indexes for table `tbl_mess`
--
ALTER TABLE `tbl_mess`
  ADD PRIMARY KEY (`id_chat`);

--
-- Indexes for table `tbl_service`
--
ALTER TABLE `tbl_service`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ituser`
--
ALTER TABLE `ituser`
  MODIFY `Itsupport_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_mess`
--
ALTER TABLE `tbl_mess`
  MODIFY `id_chat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `tbl_service`
--
ALTER TABLE `tbl_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `itsuport` FOREIGN KEY (`Itsupport_ID`) REFERENCES `ituser` (`Itsupport_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
