CREATE DATABASE  IF NOT EXISTS `webgv` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webgv`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: webgv
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bangphidv`
--

DROP TABLE IF EXISTS `bangphidv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bangphidv` (
  `iddv` int NOT NULL AUTO_INCREMENT,
  `idloaidv` int NOT NULL,
  `tendv` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mota` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `gia` float DEFAULT NULL,
  `donvitinh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phidv` float DEFAULT NULL,
  `chantren` float DEFAULT NULL,
  PRIMARY KEY (`iddv`),
  KEY `fk_idloaidv` (`idloaidv`),
  CONSTRAINT `fk_idloaidv` FOREIGN KEY (`idloaidv`) REFERENCES `loaidv` (`idloaidv`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=236 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bangphidv`
--

LOCK TABLES `bangphidv` WRITE;
/*!40000 ALTER TABLE `bangphidv` DISABLE KEYS */;
INSERT INTO `bangphidv` VALUES (1,1,'Giúp việc nhà ăn ở lại','Linh hoạt sắp xếp lịch làm việc cố định theo thời gian của Quý khách.',7000000,'Tháng',100000,12000000),(2,1,'Giúp việc nhà sáng đi chiều về','Linh hoạt sắp xếp lịch làm việc cố định theo thời gian của Quý khách.',6000000,'Tháng',100000,12000000),(3,1,'Giúp việc nhà theo ngày','Linh hoạt sắp xếp theo thời gian của khách hàng',200000,'Ngày',15000,10000000),(4,2,'Chăm sóc người già tại nhà','Người giúp việc đến tận nhà của khách hàng để chăm sóc',8000000,'Tháng',100000,15000000),(5,2,'Chăm sóc người già tại bệnh viện','Người giúp việc đến tận bệnh viện để chăm sóc',9000000,'Tháng',100000,15000000),(6,3,'Chăm sóc trẻ em ăn ở lại','Người giúp việc được trang bị kiến thức để có thể chăm sóc trẻ',8000000,'Tháng',100000,10000000),(7,4,'Giúp việc ngày Tết theo ngày','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',250000,'Ngày',10000,10000000),(8,3,'Chăm sóc trẻ em sáng đi chiều về','Người giúp việc được trang bị kiến thức để có thể chăm sóc trẻ',7500000,'Tháng',100000,12000000),(9,5,'Chăm sóc người bệnh tại nhà','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',250000,'Ngày',10000,10000000),(10,5,'Chăm sóc người bệnh tại bệnh viện','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',300000,'Ngày',10000,10000000);
/*!40000 ALTER TABLE `bangphidv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `danhgia`
--

DROP TABLE IF EXISTS `danhgia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `danhgia` (
  `iddg` int NOT NULL AUTO_INCREMENT,
  `idnguoigv` int DEFAULT NULL,
  `thoigian` date DEFAULT NULL,
  `noidung` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`iddg`)
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `danhgia`
--

LOCK TABLES `danhgia` WRITE;
/*!40000 ALTER TABLE `danhgia` DISABLE KEYS */;
/*!40000 ALTER TABLE `danhgia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (304),(304),(304),(304),(304),(304),(304),(304),(304),(304);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hopdongdkgv`
--

DROP TABLE IF EXISTS `hopdongdkgv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hopdongdkgv` (
  `idhddk` int NOT NULL AUTO_INCREMENT,
  `idnv` int DEFAULT NULL,
  `idnguoigv` int DEFAULT NULL,
  `suckhoe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngayky` date NOT NULL,
  `ngayhethan` date DEFAULT NULL,
  `phantramluong` int DEFAULT NULL,
  `kinhnghiem` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`idhddk`),
  KEY `fk_hddk_manv` (`idnv`),
  KEY `fk_hddk_mangv` (`idnguoigv`),
  CONSTRAINT `fk_hddk_mangv` FOREIGN KEY (`idnguoigv`) REFERENCES `nguoigiupviec` (`idnguoigv`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_hddk_manv` FOREIGN KEY (`idnv`) REFERENCES `nhanvien` (`idnv`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hopdongdkgv`
--

LOCK TABLES `hopdongdkgv` WRITE;
/*!40000 ALTER TABLE `hopdongdkgv` DISABLE KEYS */;
/*!40000 ALTER TABLE `hopdongdkgv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hopdongthuedv`
--

DROP TABLE IF EXISTS `hopdongthuedv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hopdongthuedv` (
  `idhdthue` int NOT NULL AUTO_INCREMENT,
  `idkh` int DEFAULT NULL,
  `idnguoigv` int DEFAULT NULL,
  `idnv` int DEFAULT NULL,
  `ngaythue` date NOT NULL,
  `trangthai` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `thanhtoan` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idhdthue`),
  KEY `fk_hdthue_makh` (`idkh`),
  KEY `fk_hdthue_ngv` (`idnguoigv`),
  KEY `fk_hdthue_manv` (`idnv`),
  CONSTRAINT `fk_hdthue_manv` FOREIGN KEY (`idnv`) REFERENCES `nhanvien` (`idnv`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_hdthue_ngv` FOREIGN KEY (`idnguoigv`) REFERENCES `nguoigiupviec` (`idnguoigv`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=303 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hopdongthuedv`
--

LOCK TABLES `hopdongthuedv` WRITE;
/*!40000 ALTER TABLE `hopdongthuedv` DISABLE KEYS */;
INSERT INTO `hopdongthuedv` VALUES (288,288,279,43,'2021-01-18','Đã đặt',1),(290,290,273,43,'2021-01-18','Đã đặt',0),(292,292,274,43,'2021-01-18','Đã đặt',0),(294,294,282,43,'2021-01-18','Đã đặt',0),(296,296,285,43,'2021-01-18','Đã đặt',0),(302,302,270,43,'2021-01-18','Đã đặt',0);
/*!40000 ALTER TABLE `hopdongthuedv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `idkh` int NOT NULL AUTO_INCREMENT,
  `hoten` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sdt` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `diachi` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trangthai` int DEFAULT NULL,
  PRIMARY KEY (`idkh`),
  CONSTRAINT `ck_sdt` CHECK ((length(`sdt`) = 10))
) ENGINE=InnoDB AUTO_INCREMENT=304 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (297,'Huỳnh Phương Nam','0946372222',NULL,'34 đường số 8, Linh Trung, Thủ Đức, Hồ Chí Minh',1),(298,'Nguyễn Trọng Hiền','0923333333',NULL,'292 Đinh Bộ Lĩnh, phường 26, Quận Bình Thạnh, Tp. Hồ Chí Minh',1),(299,'Nguyễn Lệ Anh','0988888999',NULL,'Số 3 Hòa Bình, Phường 3, Quận 11, Thành phố Hồ Chí Minh',1),(300,'Mai Thanh Xuân','0911222233',NULL,'120 Xa lộ Hà Nội, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh',1),(301,'Đỗ Hoàng Nhã','0944556678',NULL,'2 Nguyễn Bỉnh Khiêm, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',1),(303,'Đỗ Minh Hùng','0988111111',NULL,'23 Tô Vĩnh Diện, Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh',1);
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lichhen`
--

DROP TABLE IF EXISTS `lichhen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lichhen` (
  `idlichhen` int NOT NULL AUTO_INCREMENT,
  `idnv` int DEFAULT NULL,
  `idkh` int DEFAULT NULL,
  `ngay` date NOT NULL,
  `gio` time NOT NULL,
  `diachihen` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `hopdong` int DEFAULT NULL,
  PRIMARY KEY (`idlichhen`),
  KEY `fk_lh_manv` (`idnv`),
  CONSTRAINT `fk_lh_manv` FOREIGN KEY (`idnv`) REFERENCES `nhanvien` (`idnv`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lichhen`
--

LOCK TABLES `lichhen` WRITE;
/*!40000 ALTER TABLE `lichhen` DISABLE KEYS */;
/*!40000 ALTER TABLE `lichhen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaidv`
--

DROP TABLE IF EXISTS `loaidv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaidv` (
  `idloaidv` int NOT NULL AUTO_INCREMENT,
  `tenloai` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gioithieu` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `camket` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `kynang` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `anh` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`idloaidv`)
) ENGINE=InnoDB AUTO_INCREMENT=235 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaidv`
--

LOCK TABLES `loaidv` WRITE;
/*!40000 ALTER TABLE `loaidv` DISABLE KEYS */;
INSERT INTO `loaidv` VALUES (1,'Giúp việc nhà','Mục tiêu hàng đầu của trung tâm là giúp đỡ những người thân, bà con ở quê có công ăn việc làm ổn định, để kinh tế gia đình bớt khó khăn.','Cung cấp người giúp việc đã qua kiểm tra tư cách và kỹ năng, người giúp việc có tư cách đạo đức tốt, thật thà, chăm chỉ, biết việc, có ý thức tốt','Đưa người giúp việc đến tận nhà khách hàng nếu chủ nhà không qua trung tâm đón người giúp việc được.','/image/giupviecnha.png'),(2,'Giúp việc chăm sóc người già','Khi sử dụng dịch vụ chăm sóc người già hàng đầu Việt Nam, quý khách hàng sẽ cảm thấy hài lòng bởi người giúp việc có tâm huyết trong công việc, có nhiều kinh nghiệm trong nghề và sự trung thực, nhiệt tình của người giúp việc.','Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.','Nói chuyện, chăm sóc, tâm sự chia sẻ với người già. Đi chợ, lựa chọn thực phẩm dành cho người cao tuổi, nấu những món ăn người cao tuổi thích.','/image/chamsocnguoigia.jpg'),(3,'Giúp việc trông trẻ','Trẻ em rất nhạy cảm, chúng có thể biết được ai yêu quý mình và ai không qua cảm nhận. Chính vì vậy chỉ những người yêu trẻ mới có thể đáp ứng được tiêu chuẩn của chúng tôi. Vì vậy bạn hoàn toàn yên tâm khi sử dụng dịch vụ giúp việc trông trẻ của chúng tôi..','Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.','Có những kiến thức cơ bản về trông trẻ như: tắm bé khi mới sinh, cho bé ăn uống theo giờ giấc, không ăn uống linh tinh, không đi rong, người giúp việc hay trò chuyện cùng bé, chơi cùng bé và dạy bé những điều hay.','/image/chamsoctre.jpg'),(4,'Giúp việc ngày Tết','Làm lụng vất vả cả năm, ngày Tết bạn chỉ mong được nghỉ ngơi thoải mái vậy mà việc nhà không cấp phép ngày nghỉ cho bạn.Vậy làm sao để bạn được thảnh thơi và không bị việc Tết “dồn” vào chân tường? Hãy sử dụng dịch vụ giúp việc Tết chắc chắn rằng những bà nội trợ có thể bớt đi một nửa gánh nặng trong những ngày đầu năm.','Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.','Lau dọn nhà cửa, sắp sếp lại đồ đạc. Nấu món ăn ngày tết theo thực đơn chủ nhà. Giúp việc đi chợ mua thực phẩm, nấu cỗ truyền thống ngày tết.','/image/giupviecngaytet.png'),(5,'Giúp việc chăm người bệnh','Dịch vụ giúp việc chăm người bệnh là dịch vụ dành cho những bệnh nhân đang cần được quan tâm, chăm sóc kĩ càng từ bàn tay của các cô giúp việc chuyên nghiệp. Đồng thời giảm bớt nỗi lo cho người nhà khi cuộc sống và công việc bận rộn khiến họ khó có thời gian để chăm sóc người thân của mình chu đáo.','Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.','Mua, nấu thức ăn, cho bệnh nhân ăn uống: bón cơm, cháo, uống sữa… Làm công việc vệ sinh cho bệnh nhân và khu vực xung quanh. Giám sát lịch uống thuốc, cho người bệnh uống thuốc theo đúng y lệnh của bác sĩ. Đọc sách, truyện, tài liệu, nói chuyện, chia sẻ, tâm sự, đi dạo ... theo yêu cầu của bệnh nhân.','/image/chamnguoibenh.jpg');
/*!40000 ALTER TABLE `loaidv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoigiupviec`
--

DROP TABLE IF EXISTS `nguoigiupviec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoigiupviec` (
  `idnguoigv` int NOT NULL AUTO_INCREMENT,
  `hoten` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gioitinh` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaysinh` date NOT NULL,
  `sdt` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `cmnd` varchar(9) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quequan` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `hinhanh` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `del` int DEFAULT NULL,
  `hopdong` int DEFAULT NULL,
  `ungtuyen` int DEFAULT NULL,
  `idloaidv` int DEFAULT NULL,
  `diem` float DEFAULT NULL,
  `luong` float DEFAULT NULL,
  `kinhnghiem` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `kynang` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `suckhoe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  PRIMARY KEY (`idnguoigv`),
  KEY `fk_nguoigv_idldv` (`idloaidv`),
  CONSTRAINT `fk_nguoigv_idldv` FOREIGN KEY (`idloaidv`) REFERENCES `loaidv` (`idloaidv`) ON UPDATE CASCADE,
  CONSTRAINT `ck_nguoigv_sdt` CHECK ((length(`sdt`) = 10))
) ENGINE=InnoDB AUTO_INCREMENT=287 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoigiupviec`
--

LOCK TABLES `nguoigiupviec` WRITE;
/*!40000 ALTER TABLE `nguoigiupviec` DISABLE KEYS */;
INSERT INTO `nguoigiupviec` VALUES (270,'Lê Thanh Hương','Nữ','1988-12-09','0911111111','111111111','23 Đặng Văn Bi, Binh Tho, Thủ Đức, Ho Chi Minh City','/image/infoCustomer.jpg',0,1,0,1,10,8000000,'1 năm','null','Tốt',10.848,106.76),(271,'Nguyễn Thùy Anh','Nữ','1989-12-09','0922222222','222222222','16 Đường Công Lý, Bình Thọ, Thủ Đức, Thành phố Hồ Chí Minh, Vietnam','/image/em2.jpg',0,1,0,1,10,7000000,'2 năm','null','Tốt',10.845,106.766),(272,'Chu Thị Xuân','Nữ','1990-04-12','0933333333','333333333','100 Vũ Tông Phan, An Phú, Quận 2, Thành phố Hồ Chí Minh, Vietnam','/image/em3.jpg',0,1,0,1,10,6500000,'2 năm','null','Tốt',10.7969,106.74),(273,'Phan Thùy Linh','Nữ','1987-02-09','0944444444','444444444','2/27A Đường Số 16, Phước Bình, Quận 9, Thành phố Hồ Chí Minh, Vietnam','/image/em4.jpg',0,1,0,1,10,7000000,'1 năm','null','Tốt',10.817,106.768),(274,'Lý Như Hoa','Nữ','1991-05-23','0955555555','555555555','121 Nguyễn Thị Nhung, Hiệp Bình Phước, Thủ Đức, Thành phố Hồ Chí Minh, Vietnam','/image/em2.jpg',0,1,0,2,10,7500000,'3 năm','null','Tốt',10.843,106.713),(275,'Trần Kim Phương','Nữ','1986-06-18','0966666666','666666666','1, Đường Đào Trinh Nhất, Khu Phố 1, Phường Linh Tây, Quận Thủ Đức, Vietnam','/image/em3.jpg',0,1,0,2,10,8000000,'5 năm','null','Tốt',10.863,106.76),(276,'Nguyễn Vy','Nữ','1992-02-01','0977777777','777777777','71-23 Hoàng Văn Thụ, Phường 15, Phú Nhuận, Thành phố Hồ Chí Minh, Vietnam','/image/em4.jpg',0,1,0,2,10,10000000,'2 năm','null','Tốt',10.799,106.678),(277,'Phan Thị Như','Nữ','1988-03-02','0988888888','888888888','Đường số 48, Phường 3, Quận 4, Thành phố Hồ Chí Minh, Vietnam','/image/em2.jpg',0,1,0,2,10,8000000,'2 năm','null','Tốt',10.757,106.7),(278,'Bùi Lê An','Nữ','1987-03-12','0999999999','999999999','280 An Dương Vương, Phường 4, Quận 5, Thành phố Hồ Chí Minh','/image/em3.jpg',0,1,0,3,10,8500000,'2 năm','null','Tốt',10.76,106.68),(279,'Nguyễn Thảo My','Nữ','1986-09-26','0912222222','122222222','236B Lê Văn Sỹ, Phường 1, Quận Tân Bình, Thành phố Hồ Chí Minh, Việt Nam','/image/em3.jpg',0,1,0,3,10,9000000,'3 năm','null','Tốt',10.796,106.666),(280,'Lê Xuân Nhung','Nữ','1988-12-09','0913333333','133333333','33 Lương Hữu Khánh, quận 1, TP. HCM','/image/em4.jpg',0,1,0,3,10,8000000,'2 năm','null','Tốt',10.7684,106.688),(281,'Mai Xuân Thúy','Nữ','1987-08-18','0914444444','144444444','Chợ 200, Xóm Chiếu, quận 4, TP. HCM','/image/em3.jpg',0,1,0,4,10,7500000,'3 năm','null','Tốt',10.7555,106.709),(282,'Vũ Mai Thư','Nữ','1986-08-09','0915555555','155555555','269/8 Nguyễn Thị Nhỏ, phường 16, quận 11, TP. HCM','/image/em4.jpg',0,1,0,4,10,8000000,'1 năm','null','Tốt',10.7546,106.651),(283,'Đào Thị Mỹ','Nữ','1990-11-09','0916666666','166666666','Phố Nguyễn Thượng Hiền, quận 3, TP. HCM','/image/em2.jpg',0,1,0,4,10,9000000,'4 năm','null','Tốt',10.7734,106.684),(284,'Nguyễn Lam','Nữ','1991-11-11','0917777777','177777777','Hoàng Minh Giám, quận Gò Vấp, TP. HCM','/image/em3.jpg',0,1,0,5,10,8000000,'2 năm','null','Tốt',10.8119,106.677),(285,'Võ Thị Phương','Nữ','1988-09-04','0918888888','188888888','61 Cao Thắng, quận 3, TP. HCM','/image/em4.jpg',0,1,0,5,10,8000000,'2 năm','null','Tốt',10.7705,106.681),(286,'Trần Thúy Liên','Nữ','1984-08-03','0919999999','199999999','395 Kinh Dương Vương - Phường An Lạc - Quận Bình Tân','/image/em4.jpg',0,1,0,5,10,8000000,'1 năm','null','Tốt',10.741,106.619);
/*!40000 ALTER TABLE `nguoigiupviec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `idnv` int NOT NULL AUTO_INCREMENT,
  `hoten` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gioitinh` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `sdt` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `cmnd` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `luong` double DEFAULT NULL,
  `hinhanh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`idnv`),
  UNIQUE KEY `sdt` (`sdt`),
  CONSTRAINT `ck_nv_cmnd` CHECK ((length(`cmnd`) = 9)),
  CONSTRAINT `ck_nv_sdt` CHECK ((length(`sdt`) = 10))
) ENGINE=InnoDB AUTO_INCREMENT=260 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES (43,'Nguyễn Anh','Nam','1990-12-03','0900000000','938291838',10500000,'/image/airconditionService.jpg'),(248,'Trần Anh Hào','Nam','1988-12-24','1234567890','123456789',10000000,'/image/airconditionService.jpg'),(250,'Trần Thị Huyền','Nữ','1988-08-09','0947385783','374837283',12000000,'/image/aboutUs1.jpg'),(251,'Võ Thùy Chi','Nữ','1986-09-23','0937284738','273847483',14000000,'/image/aboutUs1.jpg'),(252,'Nguyễn Chung Thành','Nam','1988-09-23','0938888888','111111111',12000000,'/image/infoCustomer.jpg'),(253,'Lê Mỹ Thu','Nữ','1988-09-12','0911111111','111111111',12000000,'/image/aboutUs1.jpg');
/*!40000 ALTER TABLE `nhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieuthudv`
--

DROP TABLE IF EXISTS `phieuthudv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieuthudv` (
  `idhdthue` int NOT NULL AUTO_INCREMENT,
  `iddv` int NOT NULL,
  `dongia` float DEFAULT NULL,
  `ngaybatdau` date DEFAULT NULL,
  `ngayketthuc` date DEFAULT NULL,
  `giolamviec` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `diachilam` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `tongtien` float DEFAULT NULL,
  `gioketthuc` time DEFAULT NULL,
  `tienthu` float DEFAULT NULL,
  `thoigian` int DEFAULT NULL,
  PRIMARY KEY (`idhdthue`,`iddv`),
  KEY `fk_phieuthu_madv` (`iddv`),
  CONSTRAINT `fk_phieuthu_madv` FOREIGN KEY (`iddv`) REFERENCES `bangphidv` (`iddv`) ON UPDATE CASCADE,
  CONSTRAINT `fk_phieuthu_mahd` FOREIGN KEY (`idhdthue`) REFERENCES `hopdongthuedv` (`idhdthue`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=303 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieuthudv`
--

LOCK TABLES `phieuthudv` WRITE;
/*!40000 ALTER TABLE `phieuthudv` DISABLE KEYS */;
INSERT INTO `phieuthudv` VALUES (288,6,9000000,'2021-03-14','2021-05-14','','34 đường số 8, Linh Trung, Thủ Đức, Hồ Chí Minh',18000000,'00:00:00',100000,2),(290,2,7000000,'2021-02-02','2021-03-02','','292 Đinh Bộ Lĩnh, phường 26, Quận Bình Thạnh, Tp. Hồ Chí Minh',7000000,'00:00:00',100000,1),(292,4,7500000,'2021-03-07','2021-04-07','','Số 3 Hòa Bình, Phường 3, Quận 11, Thành phố Hồ Chí Minh',7500000,'00:00:00',100000,1),(294,7,8000000,'2021-01-27','2021-01-30','','120 Xa lộ Hà Nội, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh',32000000,'00:00:00',10000,4),(296,9,8000000,'2021-01-22','2021-01-25','','2 Nguyễn Bỉnh Khiêm, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',32000000,'00:00:00',10000,4),(302,1,8000000,'2021-02-25','2021-04-25','','23 Tô Vĩnh Diện, Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh',16000000,'00:00:00',100000,2);
/*!40000 ALTER TABLE `phieuthudv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `idtk` int NOT NULL AUTO_INCREMENT,
  `sdt` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `idnv` int NOT NULL,
  `quyen` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trangthai` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`idtk`),
  UNIQUE KEY `sdt` (`sdt`),
  UNIQUE KEY `idnv` (`idnv`),
  CONSTRAINT `fk_tk_manv` FOREIGN KEY (`idnv`) REFERENCES `nhanvien` (`idnv`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tk_sdt` FOREIGN KEY (`sdt`) REFERENCES `nhanvien` (`sdt`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=240 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (104,'0900000000','1234',43,'Admin','hoạt động');
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yeucau`
--

DROP TABLE IF EXISTS `yeucau`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yeucau` (
  `idyc` int NOT NULL AUTO_INCREMENT,
  `hoten` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sdt` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `diachi` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaylam` date DEFAULT NULL,
  `congviec` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trangthai` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `iddv` int DEFAULT NULL,
  `ngayketthuc` date DEFAULT NULL,
  `giolamviec` time DEFAULT NULL,
  `gioketthuc` time DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  `thoigian` int DEFAULT NULL,
  PRIMARY KEY (`idyc`),
  KEY `fk_bangphi_madv` (`iddv`),
  CONSTRAINT `fk_bangphi_madv` FOREIGN KEY (`iddv`) REFERENCES `bangphidv` (`iddv`) ON UPDATE CASCADE,
  CONSTRAINT `ck_lh_sdt` CHECK ((length(`sdt`) = 10))
) ENGINE=InnoDB AUTO_INCREMENT=303 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yeucau`
--

LOCK TABLES `yeucau` WRITE;
/*!40000 ALTER TABLE `yeucau` DISABLE KEYS */;
INSERT INTO `yeucau` VALUES (288,'Huỳnh Phương Nam','0946372222','34 đường số 8, Linh Trung, Thủ Đức, Hồ Chí Minh','2021-03-14','chăm trẻ nhỏ','Đã duyệt',6,'2021-05-14','09:36:00','00:00:00',10.8555,106.77,2),(290,'Nguyễn Trọng Hiền','0923333333','292 Đinh Bộ Lĩnh, phường 26, Quận Bình Thạnh, Tp. Hồ Chí Minh','2021-02-02','nấu ăn','Đã duyệt',2,'2021-03-02','09:38:00','00:00:00',10.8163,106.711,1),(292,'Nguyễn Lệ Anh','0988888999','Số 3 Hòa Bình, Phường 3, Quận 11, Thành phố Hồ Chí Minh','2021-03-07','tâm sự, trò chuyện','Đã duyệt',4,'2021-04-07','09:40:00','00:00:00',10.766,106.639,1),(294,'Mai Thanh Xuân','0911222233','120 Xa lộ Hà Nội, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh','2021-01-27','trang trí tết','Đã duyệt',7,'2021-01-30','09:41:00','00:00:00',10.8526,106.78,4),(296,'Đỗ Hoàng Nhã','0944556678','2 Nguyễn Bỉnh Khiêm, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh','2021-01-22','nấu ăn, trò chuyện, chăm sóc','Đã duyệt',9,'2021-01-25','08:43:00','00:00:00',10.7849,106.708,4),(302,'Đỗ Minh Hùng','0988111111','23 Tô Vĩnh Diện, Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh','2021-02-25','dọn dẹp nhà','Đã duyệt',1,'2021-04-25','02:42:00','00:00:00',10.8539,106.768,2);
/*!40000 ALTER TABLE `yeucau` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-18  2:59:13
