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
  PRIMARY KEY (`iddv`),
  KEY `fk_idloaidv` (`idloaidv`),
  CONSTRAINT `fk_idloaidv` FOREIGN KEY (`idloaidv`) REFERENCES `loaidv` (`idloaidv`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bangphidv`
--

LOCK TABLES `bangphidv` WRITE;
/*!40000 ALTER TABLE `bangphidv` DISABLE KEYS */;
INSERT INTO `bangphidv` VALUES (54,50,'Giúp việc nhà ăn ở lại','Linh hoạt sắp xếp lịch làm việc cố định theo thời gian của Quý khách.',4000000,'Tháng'),(55,50,'Giúp việc nhà ăn theo giờ','Linh hoạt sắp xếp lịch làm việc cố định theo thời gian của Quý khách.',200000,'Giờ'),(56,51,'Chăm sóc người già tại nhà','Người giúp việc đến tận nhà của khách hàng để chăm sóc',250000,'Ngày'),(57,51,'Chăm sóc người già tại bệnh viện','Người giúp việc đến tận bệnh viện để chăm sóc',300000,'Ngày'),(58,52,'Chăm sóc trẻ em','Người giúp việc được trang bị kiến thức để có thể chăm sóc trẻ',5000000,'Tháng'),(59,53,'Giúp việc ngày Tết theo giờ','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',80000,'Giờ'),(60,53,'Giúp việc ngày Tết theo ngày','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',350000,'Ngày'),(61,54,'Chăm sóc người bệnh tại nhà','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',250000,'Ngày'),(62,54,'Chăm sóc người bệnh tại bệnh viện','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',300000,'Ngày'),(131,50,'Giup viec van phong','giup viec van phong',100000,'Giờ'),(132,50,'giup viec tet','giup viec tet',100000,'Giờ');
/*!40000 ALTER TABLE `bangphidv` ENABLE KEYS */;
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
INSERT INTO `hibernate_sequence` VALUES (141),(141),(141),(141),(141),(141),(141),(141),(141),(141);
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
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hopdongdkgv`
--

LOCK TABLES `hopdongdkgv` WRITE;
/*!40000 ALTER TABLE `hopdongdkgv` DISABLE KEYS */;
INSERT INTO `hopdongdkgv` VALUES (100,43,96,'Tốt','2020-11-30','2021-11-30',90,'2.5 năm'),(101,43,97,'Tốt','2020-12-05','2021-12-05',95,'1 năm'),(105,43,100,'Tốt','2020-11-28','2021-11-28',90,'1 năm'),(106,43,101,'tốt','2020-11-30','2021-11-30',90,'2 năm'),(107,44,102,'tốt','2020-12-01','2022-01-01',95,'3 năm'),(118,43,98,'tốt','2020-12-07','2021-12-07',90,'có 1 năm'),(119,46,99,'tốt','2020-12-30','2021-12-30',95,'1 năm'),(120,43,116,'Tốt','2020-12-20','2021-12-20',90,'1 năm'),(128,43,126,'tốt','2020-12-30','2021-12-30',90,'có 1 năm'),(129,43,127,'tốt','2020-12-30','2021-12-30',90,'2 năm');
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
  PRIMARY KEY (`idhdthue`),
  KEY `fk_hdthue_makh` (`idkh`),
  KEY `fk_hdthue_ngv` (`idnguoigv`),
  KEY `fk_hdthue_manv` (`idnv`),
  CONSTRAINT `fk_hdthue_manv` FOREIGN KEY (`idnv`) REFERENCES `nhanvien` (`idnv`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_hdthue_ngv` FOREIGN KEY (`idnguoigv`) REFERENCES `nguoigiupviec` (`idnguoigv`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hopdongthuedv`
--

LOCK TABLES `hopdongthuedv` WRITE;
/*!40000 ALTER TABLE `hopdongthuedv` DISABLE KEYS */;
INSERT INTO `hopdongthuedv` VALUES (102,93,100,44,'2020-11-28','Đã đặt'),(103,94,101,45,'2020-11-28','Đã đặt'),(108,95,96,43,'2020-11-28','Đã đặt'),(110,109,102,43,'2020-11-29','Đã đặt'),(121,112,116,45,'2020-12-06','Đã đặt');
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
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (93,'Võ Văn Anh','0947382738',NULL,'Quận 9, TPHCM',0),(94,'Lê Văn Linh','0984738278',NULL,'Thủ Đức, TPHCM',1),(95,'Nguyễn Mi','0947283728',NULL,'Quận 8, TPHCM',1),(111,'Minh Anh','0938283287',NULL,'22 đường số 6 Linh Chiểu, Thủ Đức, TPHCM',1),(123,'Hà Anh','0938293829',NULL,'Linh Chiểu, Thủ Đức, TPHCM',1),(124,'Trần Anh Thư','0987654326',NULL,'23 Lê Văn Việt, quận 9, TPHCM',1),(130,'Hà Anh','0938293829',NULL,'Linh Chiểu, Thủ Đức, TPHCM',1);
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
INSERT INTO `lichhen` VALUES (102,43,93,'2020-11-30','10:30:00','1 võ văn ngân, thủ đức',1),(103,45,94,'2020-11-30','10:30:00','1 võ văn ngân, thủ đức',1),(108,45,95,'2020-12-03','14:30:00','1 võ văn ngân',1),(110,44,109,'2020-12-10','15:30:00','1 võ văn ngân',1),(121,45,112,'2020-12-14','10:30:00','123 võ văn ngân',1),(122,44,116,'2020-12-29','15:00:00','1 võ văn ngân',0),(134,44,133,'2020-12-09','10:00:00','tphcm',0),(135,46,125,'2020-12-31','10:30:00','123 võ văn ngân',0),(138,45,134,'2020-12-30','10:00:00','1 vo van ngan',0),(139,43,136,'2020-12-30','09:00:00','1 vo van ngan',0),(140,45,137,'2020-12-28','15:00:00','1 vo van ngan',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaidv`
--

LOCK TABLES `loaidv` WRITE;
/*!40000 ALTER TABLE `loaidv` DISABLE KEYS */;
INSERT INTO `loaidv` VALUES (50,'Giúp việc nhà','Mục tiêu hàng đầu của trung tâm là giúp đỡ những người thân, bà con ở quê có công ăn việc làm ổn định, để kinh tế gia đình bớt khó khăn.','Cung cấp người giúp việc đã qua kiểm tra tư cách và kỹ năng, người giúp việc có tư cách đạo đức tốt, thật thà, chăm chỉ, biết việc, có ý thức tốt','Đưa người giúp việc đến tận nhà khách hàng nếu chủ nhà không qua trung tâm đón người giúp việc được.','/image/giupviecnha.png'),(51,'Giúp việc chăm sóc người già','Khi sử dụng dịch vụ chăm sóc người già hàng đầu Việt Nam, quý khách hàng sẽ cảm thấy hài lòng bởi người giúp việc có tâm huyết trong công việc, có nhiều kinh nghiệm trong nghề và sự trung thực, nhiệt tình của người giúp việc.','Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.','Nói chuyện, chăm sóc, tâm sự chia sẻ với người già. Đi chợ, lựa chọn thực phẩm dành cho người cao tuổi, nấu những món ăn người cao tuổi thích.','/image/chamsocnguoigia.jpg'),(52,'Giúp việc trông trẻ','Trẻ em rất nhạy cảm, chúng có thể biết được ai yêu quý mình và ai không qua cảm nhận. Chính vì vậy chỉ những người yêu trẻ mới có thể đáp ứng được tiêu chuẩn của chúng tôi. Vì vậy bạn hoàn toàn yên tâm khi sử dụng dịch vụ giúp việc trông trẻ của chúng tôi..','Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.','Có những kiến thức cơ bản về trông trẻ như: tắm bé khi mới sinh, cho bé ăn uống theo giờ giấc, không ăn uống linh tinh, không đi rong, người giúp việc hay trò chuyện cùng bé, chơi cùng bé và dạy bé những điều hay.','/image/chamsoctre.jpg'),(53,'Giúp việc ngày Tết','Làm lụng vất vả cả năm, ngày Tết bạn chỉ mong được nghỉ ngơi thoải mái vậy mà việc nhà không cấp phép ngày nghỉ cho bạn.Vậy làm sao để bạn được thảnh thơi và không bị việc Tết “dồn” vào chân tường? Hãy sử dụng dịch vụ giúp việc Tết chắc chắn rằng những bà nội trợ có thể bớt đi một nửa gánh nặng trong những ngày đầu năm.','Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.','Lau dọn nhà cửa, sắp sếp lại đồ đạc. Nấu món ăn ngày tết theo thực đơn chủ nhà. Giúp việc đi chợ mua thực phẩm, nấu cỗ truyền thống ngày tết.','/image/giupviecngaytet.png'),(54,'Giúp việc chăm người bệnh','Dịch vụ giúp việc chăm người bệnh là dịch vụ dành cho những bệnh nhân đang cần được quan tâm, chăm sóc kĩ càng từ bàn tay của các cô giúp việc chuyên nghiệp. Đồng thời giảm bớt nỗi lo cho người nhà khi cuộc sống và công việc bận rộn khiến họ khó có thời gian để chăm sóc người thân của mình chu đáo.','Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.','Mua, nấu thức ăn, cho bệnh nhân ăn uống: bón cơm, cháo, uống sữa… Làm công việc vệ sinh cho bệnh nhân và khu vực xung quanh. Giám sát lịch uống thuốc, cho người bệnh uống thuốc theo đúng y lệnh của bác sĩ. Đọc sách, truyện, tài liệu, nói chuyện, chia sẻ, tâm sự, đi dạo ... theo yêu cầu của bệnh nhân.','/image/chamnguoibenh.jpg');
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
  PRIMARY KEY (`idnguoigv`),
  KEY `fk_nguoigv_idldv` (`idloaidv`),
  CONSTRAINT `fk_nguoigv_idldv` FOREIGN KEY (`idloaidv`) REFERENCES `loaidv` (`idloaidv`) ON UPDATE CASCADE,
  CONSTRAINT `ck_nguoigv_sdt` CHECK ((length(`sdt`) = 10))
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoigiupviec`
--

LOCK TABLES `nguoigiupviec` WRITE;
/*!40000 ALTER TABLE `nguoigiupviec` DISABLE KEYS */;
INSERT INTO `nguoigiupviec` VALUES (96,'Đỗ Mỹ Anh','Nữ','1990-09-23','0938473823','948372812','TPHCM','',0,1,0,50),(97,'Lê Thị Phương','Nữ','1992-05-24','0938273827','347382932','TPHCM','',0,1,0,51),(98,'Phan Quỳnh Nga','Nữ','1994-03-07','0938482932','483728192','TPHCM','',0,1,0,52),(99,'Nguyễn Thu Thảo','Nữ','1988-09-17','0938372378','238493849','Quận 3, TPHCM','',0,1,0,53),(100,'Trần Thị Xuân','Nữ','1990-09-23','0948837827','372827182','TPHCM','',0,1,0,50),(101,'Nguyễn Liên','Nữ','1992-05-24','0393728273','372837283','TPHCM','',0,1,0,51),(102,'Nguyễn Huỳnh Anh','Nữ','1994-03-07','0392847382','173827382','TPHCM','',0,1,0,52),(103,'Lê Thị Mai','','1988-09-17','0494839482','','Quận 3, TPHCM','',0,0,1,53),(115,'Lê Như Thắm','','1990-06-14','0938472834','','Quận 9, TPHCM','',0,0,1,53),(116,'Trần Huỳnh Thư','Nữ','1989-04-12','0948382738','234567890','Quận 10, TPCHM',NULL,0,1,0,53),(126,'Trần Vy','Nữ','1991-09-23','0948392839','039282938','23 đường số 6, Linh Trung, Thủ Đức, TPHCM','',0,1,0,54),(127,'Nguyễn Hoàng Yến','Nữ','1989-06-30','0938283929','123456789','24 Lê Văn Chí, Linh Trung, Thủ Đức','',0,1,0,54);
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
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES (43,'Nguyễn Anh','Nam','1990-12-03','0938283928','938291839',10500000,''),(44,'Nguyễn Huy','Nam','1986-02-24','0938463728','831291839',12000000,''),(45,'Lý Diệu Hà','Nữ','1992-06-17','0946362734','162849302',12000000,''),(46,'Vũ Lam An','Nữ','1988-08-14','0383928391','163728912',14000000,''),(117,'Trần Trọng Kiên','Nam','1980-07-10','0938271829','093828172',11000000,NULL);
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
  PRIMARY KEY (`idhdthue`,`iddv`),
  KEY `fk_phieuthu_madv` (`iddv`),
  CONSTRAINT `fk_phieuthu_madv` FOREIGN KEY (`iddv`) REFERENCES `bangphidv` (`iddv`) ON UPDATE CASCADE,
  CONSTRAINT `fk_phieuthu_mahd` FOREIGN KEY (`idhdthue`) REFERENCES `hopdongthuedv` (`idhdthue`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieuthudv`
--

LOCK TABLES `phieuthudv` WRITE;
/*!40000 ALTER TABLE `phieuthudv` DISABLE KEYS */;
INSERT INTO `phieuthudv` VALUES (102,54,4000000,'2020-12-01','2020-12-02',NULL,'Quận 9, TPHCM'),(103,56,250000,'2020-11-30','2020-12-02',NULL,'Thủ Đức, TPHCM'),(108,54,4000000,'2020-12-05','2020-12-12',NULL,'Quận 8, TPHCM'),(110,58,4000000,'2020-11-30','2020-12-04',NULL,'22 đường số 6 Linh Chiểu, Thủ Đức, TPHCM'),(121,60,350000,'2020-12-16','2020-12-30',NULL,'Linh Chiểu, Thủ Đức, TPHCM');
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
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (104,'0938283928','Abcd1!',43,'Admin','hoạt động');
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
  PRIMARY KEY (`idyc`),
  UNIQUE KEY `sdt` (`sdt`),
  KEY `fk_bangphi_madv` (`iddv`),
  CONSTRAINT `fk_bangphi_madv` FOREIGN KEY (`iddv`) REFERENCES `bangphidv` (`iddv`) ON UPDATE CASCADE,
  CONSTRAINT `ck_lh_sdt` CHECK ((length(`sdt`) = 10))
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yeucau`
--

LOCK TABLES `yeucau` WRITE;
/*!40000 ALTER TABLE `yeucau` DISABLE KEYS */;
INSERT INTO `yeucau` VALUES (93,'Võ Văn Anh','0947382738','Quận 9, TPHCM','2020-11-30','dọn dẹp nhà cửa','Đã duyệt',54),(94,'Lê Văn Linh','0984738278','Thủ Đức, TPHCM','2020-12-29','chuẩn bị đồ tết','Đã duyệt',60),(95,'Nguyễn Mi','0947283728','Quận 8, TPHCM','2020-11-29','chăm trẻ','Đã duyệt',58),(109,'Minh Anh','0938283287','22 đường số 6 Linh Chiểu, Thủ Đức, TPHCM','2020-12-30','nấu món ăn','Đã duyệt',60),(112,'Hà Anh','0938293829','Linh Chiểu, Thủ Đức, TPHCM','2020-12-04','nấu ăn tết','Đã duyệt',59),(116,'Trần Anh Thư','0987654326','23 Lê Văn Việt, quận 9, TPHCM','2020-12-26','chăm sóc trẻ','Đã duyệt',58),(125,'Anh','0938372839','quận 9, TPHCM','2020-12-30','nấu ăn','Đã duyệt',61),(133,'Nguyen Van A','0948382839','tphcm','2020-12-09','giup viec','Đã duyệt',54),(134,'Hồng','0948382938','tphcm','2020-12-10','giup viec','Đã duyệt',54),(136,'Đỗ Thị Mai','0948392813','tphcm','2020-12-31','nau ăn','Đã duyệt',59),(137,'Lê Đăng Huy','0938282738','quận 9','2020-12-30','nau an','Đã duyệt',59),(138,'Trần An','0967484738','tphcm','2020-12-31','nau an','Chưa duyệt',59);
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

-- Dump completed on 2020-12-18 14:35:04
