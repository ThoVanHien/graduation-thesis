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
  PRIMARY KEY (`iddv`),
  KEY `fk_idloaidv` (`idloaidv`),
  CONSTRAINT `fk_idloaidv` FOREIGN KEY (`idloaidv`) REFERENCES `loaidv` (`idloaidv`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bangphidv`
--

LOCK TABLES `bangphidv` WRITE;
/*!40000 ALTER TABLE `bangphidv` DISABLE KEYS */;
INSERT INTO `bangphidv` VALUES (1,1,'Giúp việc nhà ăn ở lại','Linh hoạt sắp xếp lịch làm việc cố định theo thời gian của Quý khách.',220000,'Ngày'),(2,1,'Giúp việc nhà sáng đi chiều về','Linh hoạt sắp xếp lịch làm việc cố định theo thời gian của Quý khách.',200000,'Ngày'),(3,1,'Giúp việc nhà theo giờ','Linh hoạt sắp xếp theo thời gian của khách hàng',50000,'Giờ'),(4,2,'Chăm sóc người già tại nhà','Người giúp việc đến tận nhà của khách hàng để chăm sóc',250000,'Ngày'),(5,2,'Chăm sóc người già tại bệnh viện','Người giúp việc đến tận bệnh viện để chăm sóc',300000,'Ngày'),(6,3,'Chăm sóc trẻ em','Người giúp việc được trang bị kiến thức để có thể chăm sóc trẻ',250000,'Ngày'),(7,4,'Giúp việc ngày Tết theo ngày','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',350000,'Ngày'),(8,4,'Giúp việc ngày Tết theo giờ','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',80000,'Giờ'),(9,5,'Chăm sóc người bệnh tại nhà','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',250000,'Ngày'),(10,5,'Chăm sóc người bệnh tại bệnh viện','Tùy chỉnh vào thời gian và công việc của khách hàng thuê',300000,'Ngày');
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
) ENGINE=InnoDB AUTO_INCREMENT=222 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `danhgia`
--

LOCK TABLES `danhgia` WRITE;
/*!40000 ALTER TABLE `danhgia` DISABLE KEYS */;
INSERT INTO `danhgia` VALUES (209,98,'2021-01-12','Làm việc chu đáo'),(212,96,'2021-01-12','Làm tốt công việc'),(216,96,'2021-01-12','Hoàn thành công việc tốt'),(220,97,'2021-01-12','Đi trễ giờ làm'),(221,99,'2021-01-12','Nhanh nhẹn, cẩn thận');
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
INSERT INTO `hibernate_sequence` VALUES (225),(225),(225),(225),(225),(225),(225),(225),(225),(225);
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
) ENGINE=InnoDB AUTO_INCREMENT=198 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hopdongdkgv`
--

LOCK TABLES `hopdongdkgv` WRITE;
/*!40000 ALTER TABLE `hopdongdkgv` DISABLE KEYS */;
INSERT INTO `hopdongdkgv` VALUES (96,46,96,'Tốt','2020-11-30','2021-11-30',90,'3 năm'),(97,43,97,'Tốt','2020-12-05','2021-12-05',95,'2 năm'),(98,45,98,'tốt','2020-12-07','2021-12-07',90,'có 1 năm'),(99,45,99,'tốt','2020-12-30','2021-12-30',95,'1 năm'),(100,43,100,'Tốt','2020-11-28','2021-11-28',90,'1 năm'),(101,43,101,'tốt','2020-11-30','2021-11-30',90,'2 năm'),(102,44,102,'tốt','2020-12-01','2022-01-01',95,'3 năm'),(103,43,103,'rw','2021-01-26','2021-01-29',23,'wer'),(115,43,115,'tốt','2021-01-06','2022-01-06',85,'1 năm '),(116,43,116,'Tốt','2020-12-20','2021-12-20',90,'1 năm'),(126,43,126,'tốt','2020-12-30','2021-12-30',90,'có 1 năm'),(127,43,127,'tốt','2020-12-30','2021-12-30',90,'2 năm'),(149,45,149,'tốt','2020-12-22','2021-12-12',90,'1 năm'),(185,44,185,'tốt','2020-12-30','2021-12-30',90,'2 năm'),(195,43,195,'tốt','2021-01-12','2022-01-12',90,'2 năm'),(196,175,196,'tốt','2021-01-04','2022-01-04',85,'2 năm');
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
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hopdongthuedv`
--

LOCK TABLES `hopdongthuedv` WRITE;
/*!40000 ALTER TABLE `hopdongthuedv` DISABLE KEYS */;
INSERT INTO `hopdongthuedv` VALUES (152,152,100,172,'2020-12-24','Đã đặt'),(153,153,100,43,'2020-12-24','Đã đặt'),(154,154,101,44,'2020-12-24','Đã đặt'),(155,155,116,44,'2020-12-24','Đã đặt'),(157,157,126,117,'2020-12-24','Đã đặt'),(168,168,96,43,'2020-12-27','Đã đặt'),(169,169,126,43,'2020-12-29','Đã đặt'),(170,170,127,43,'2020-12-27','Đã đặt'),(192,192,185,177,'2021-01-03','Đã đặt'),(223,223,149,43,'2021-01-12','Đã đặt');
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
) ENGINE=InnoDB AUTO_INCREMENT=225 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (161,'Nguyễn Anh Thư','0938728372',NULL,'12 Lê Văn Việt, quận 9',1),(162,'Lê Hà','0392748372',NULL,'22 Linh Chiểu, Thủ Đức, TPHCM',1),(163,'Đỗ Mỹ Vy','0947382748',NULL,'34 Lê Văn Chí, Thủ Đức, TPHCM',1),(164,'Trần Kim Chi','0384938293',NULL,'22 Hoàng Diệu 2, Thủ Đức, TPHCM',1),(165,'Phan Thị Xuân','0947372638',NULL,'78 Võ Văn Ngân, Thủ Đức, TPHCM',1),(173,'Hà Phương','0937271826',NULL,'23 Lê Văn Việt, quận 9, TPHCM',1),(174,'Chu Mi','0948372812',NULL,'23 Hoàng Diệu 2, Thủ Đức, TPHCM',1),(190,'Nguyễn Phú','0947284729',NULL,'23 Võ Văn Ngân, Thủ Đức, TPHCM',1),(194,'Trần Ánh Hồng','0938728184',NULL,'22 Võ Văn Ngân, Thủ Đức, TPHCM',1),(224,'Bùi Thị Huyền','0937282748',NULL,'12 Kha Vạn Cân, Thủ Đức, TPHCM',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
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
  PRIMARY KEY (`idnguoigv`),
  KEY `fk_nguoigv_idldv` (`idloaidv`),
  CONSTRAINT `fk_nguoigv_idldv` FOREIGN KEY (`idloaidv`) REFERENCES `loaidv` (`idloaidv`) ON UPDATE CASCADE,
  CONSTRAINT `ck_nguoigv_sdt` CHECK ((length(`sdt`) = 10))
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoigiupviec`
--

LOCK TABLES `nguoigiupviec` WRITE;
/*!40000 ALTER TABLE `nguoigiupviec` DISABLE KEYS */;
INSERT INTO `nguoigiupviec` VALUES (96,'Đỗ Mỹ Anh','Nữ','1990-09-23','0938473823','948372812','TP HCM','blob:http://localhost:3100/aef0551f-77df-47bc-92bf-f9ea88f81004',0,1,0,1,9.5),(97,'Lê Thị Phương','Nữ','1992-05-24','0938273827','347382932','TPHCM','',0,1,0,2,9.5),(98,'Phan Quỳnh Nga','Nữ','1994-03-07','0938482932','483728192','TPHCM','',0,1,0,3,10),(99,'Nguyễn Thu Thảo','Nữ','1988-09-17','0938372378','238493849','Quận 3, TPHCM','',0,1,0,4,10),(100,'Trần Thị Xuân','Nữ','1990-09-23','0948837827','372827182','TPHCM','',0,1,0,1,10),(101,'Nguyễn Liên','Nữ','1992-05-24','0393728273','372837283','TPHCM','',0,1,0,2,10),(102,'Nguyễn Huỳnh Anh','Nữ','1994-03-07','0392847382','173827382','TPHCM','',0,1,0,3,10),(103,'Lê Thị Mai','Nữ','1988-09-17','0494839482','123123123','Quận 3, TPHCM','blob:http://localhost:3100/1c86b289-93e1-413b-b48f-7e84d8c9cebf',0,1,0,4,10),(115,'Lê Như Thắm','Nữ','1990-06-14','0938472834','463728917','Quận 9, TPHCM','',0,1,0,4,10),(116,'Trần Huỳnh Thư','Nữ','1989-04-12','0948382738','234567890','Quận 10, TPCHM',NULL,0,1,0,4,10),(126,'Trần Vy','Nữ','1991-09-23','0948392839','039282938','23 đường số 6, Linh Trung, Thủ Đức, TPHCM','',0,1,0,5,9),(127,'Nguyễn Hoàng Yến','Nữ','1989-06-30','0938283929','123456789','24 Lê Văn Chí, Linh Trung, Thủ Đức','',0,1,0,5,10),(149,'Trần Thị Tú','Nữ','1989-09-11','0938284938','349589493','tphcm','',0,1,0,4,10),(185,'Phan Thị Nhàn','Nữ','1986-03-02','0937284738','473829183','Thủ Đức, TPHCM','blob:http://localhost:3100/2a8b1206-b00f-482b-859c-857e01c205f1',0,1,0,1,10),(195,'Lê Thị Vy','Nữ','1988-03-24','0937483728','637282927','Quận 9, TPHCM','',0,1,0,5,10),(196,'Trần Bảo An','Nữ','1988-08-19','0937483928','123123123','Quận 2, TPHCM','',0,1,0,3,10);
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
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES (43,'Nguyễn Anh','Nam','1990-12-03','0900000000','938291838',10500000,'blob:http://localhost:3100/414cf4ed-afac-487e-a1f7-ee823b5489f8'),(44,'Nguyễn Huy','Nam','1986-02-24','0938463728','831291839',12000000,'blob:http://localhost:3100/c483b8b3-b4c7-454b-b0b8-596a5fdf37ea'),(45,'Lý Diệu Hà','Nữ','1992-06-17','0946362734','162849302',12000000,''),(46,'Vũ Lam An','Nữ','1988-08-14','0383928391','163728912',14000000,'blob:http://localhost:3100/db24490b-e025-4d0d-a367-a222186ba734'),(117,'Trần Trọng Kiên','Nam','1980-07-10','0938271829','093828172',11000000,NULL),(171,'Nguyễn Thành Chung','Nam','1991-10-02','0948372163','321768593',12000000,''),(172,'Lê Anh Thư','Nữ','1990-05-12','0394839281','123456789',1200000,''),(175,'Lê Ánh Xuân','Nữ','1988-02-04','0937281748','123857389',12000000,'blob:http://localhost:3100/5d6421c8-da83-4f02-afd6-25cd1a91c916'),(177,'Bùi Vĩnh Chu','Nam','1989-09-04','0937282738','827384732',13000000,'blob:http://localhost:3100/1bd18bed-c623-4dd9-95dd-df5e2f5360d0'),(184,'Lê Thị Thùy','Nữ','1988-04-20','0937284738','372847128',12000000,'blob:http://localhost:3100/0e58484c-f20a-42f4-9e4e-33b85b47a8cf'),(188,'Lê Hoàn Quang','Nam','1994-12-31','0948372837','183928173',15000000,'blob:http://localhost:3100/21bb36cd-c36f-437e-aef2-91a99772e651'),(189,'Lê Thị Tâm','Nữ','1992-04-12','0937281738','172827372',14000000,'blob:http://localhost:3100/8a7cd10f-6e7b-4e6b-a8ca-b7255ee67716');
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
  `phantramluong` int DEFAULT NULL,
  `tienthu` float DEFAULT NULL,
  PRIMARY KEY (`idhdthue`,`iddv`),
  KEY `fk_phieuthu_madv` (`iddv`),
  CONSTRAINT `fk_phieuthu_madv` FOREIGN KEY (`iddv`) REFERENCES `bangphidv` (`iddv`) ON UPDATE CASCADE,
  CONSTRAINT `fk_phieuthu_mahd` FOREIGN KEY (`idhdthue`) REFERENCES `hopdongthuedv` (`idhdthue`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieuthudv`
--

LOCK TABLES `phieuthudv` WRITE;
/*!40000 ALTER TABLE `phieuthudv` DISABLE KEYS */;
INSERT INTO `phieuthudv` VALUES (152,1,220000,'2021-01-04','2021-01-09',NULL,'12 Lê Văn Việt, quận 9',1320000,NULL,90,132000),(153,3,50000,'2020-12-31','2020-12-31','10:00','22 Linh Chiểu, Thủ Đức, TPHCM',75000,'11:30:00',90,7500),(154,4,250000,'2021-01-04','2021-01-11','','34 Lê Văn Chí, Thủ Đức, TPHCM',2000000,'00:00:00',95,100000),(155,8,80000,'2020-12-31','2020-12-31','09:00','22 Hoàng Diệu 2, Thủ Đức, TPHCM',80000,'10:00:00',95,4000),(157,9,250000,'2020-12-30','2021-01-09','','78 Võ Văn Ngân, Thủ Đức, TPHCM',2750000,'00:00:00',90,275000),(168,3,50000,'2021-01-06','2021-01-06','09:00','23 Lê Văn Việt, quận 9, TPHCM',100000,'11:00:00',90,10000),(169,9,250000,'2021-01-20','2021-01-23','','23 Võ Văn Ngân, Thủ Đức, TPHCM',1000000,'00:00:00',90,100000),(170,9,250000,'2020-12-29','2021-01-09','','23 Hoàng Diệu 2, Thủ Đức, TPHCM',3000000,'00:00:00',90,300000),(192,2,200000,'2021-01-12','2021-01-19','','22 Võ Văn Ngân, Thủ Đức, TPHCM',1600000,'00:00:00',90,160000),(223,7,350000,'2021-01-30','2021-02-01','','12 Kha Vạn Cân, Thủ Đức, TPHCM',1050000,'00:00:00',95,52500);
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
) ENGINE=InnoDB AUTO_INCREMENT=192 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (104,'0900000000','1234',43,'Admin','hoạt động'),(166,'0938463728','abcd1!@@A',44,'Nhân viên','hoạt động'),(167,'0946362734','Abcd1!',45,'Admin','hoạt động'),(191,'0383928391','Abcd1!',46,'Nhân viên','hoạt động');
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
  KEY `fk_bangphi_madv` (`iddv`),
  CONSTRAINT `fk_bangphi_madv` FOREIGN KEY (`iddv`) REFERENCES `bangphidv` (`iddv`) ON UPDATE CASCADE,
  CONSTRAINT `ck_lh_sdt` CHECK ((length(`sdt`) = 10))
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yeucau`
--

LOCK TABLES `yeucau` WRITE;
/*!40000 ALTER TABLE `yeucau` DISABLE KEYS */;
INSERT INTO `yeucau` VALUES (152,'Nguyễn Anh Thư','0938728372','12 Lê Văn Việt, quận 9','2020-12-30','dọn dẹp nhà','Đã duyệt',1),(153,'Lê Hà','0392748372','22 Linh Chiểu, Thủ Đức, TPHCM','2021-01-08','dọn dẹp nhà cửa','Đã duyệt',3),(154,'Đỗ Mỹ Vy','0947382748','34 Lê Văn Chí, Thủ Đức, TPHCM','2021-01-01','chăm sóc trẻ','Đã duyệt',6),(155,'Trần Kim Chi','0384938293','22 Hoàng Diệu 2, Thủ Đức, TPHCM','2020-12-27','nấu ăn tết','Đã duyệt',7),(157,'Phan Thị Xuân','0947372638','78 Võ Văn Ngân, Thủ Đức, TPHCM','2021-01-08','chăm sóc người bệnh','Đã duyệt',9),(168,'Hà Phương','0937271826','23 Lê Văn Việt, quận 9, TPHCM','2021-01-06','mua đồ tết','Đã duyệt',7),(169,'Nguyễn Phú','0947284729','23 Võ Văn Ngân, Thủ Đức, TPHCM','2020-12-31','chăm người nhà ','Đã duyệt',10),(170,'Chu Mi','0948372812','23 Hoàng Diệu 2, Thủ Đức, TPHCM','2021-01-09','dọn dẹp nhà cửa','Đã duyệt',8),(192,'Trần Ánh Hồng','0938728184','22 Võ Văn Ngân, Thủ Đức, TPHCM','2021-01-06','làm việc nhà','Đã duyệt',2),(193,'Nguyễn Thị Huyền','0947372833','12 Hoàng Diệu 2, Thủ Đức, TPHCM','2021-01-30','trang trí nhà cửa','Chưa duyệt',8),(197,'Trần Thị Hoa','0937837281','22 Hoàng Diệu 2, Thủ Đức, TPHCM','2021-01-13','dọn dẹp nhà cửa','Chưa duyệt',1),(199,'Hoàng Anh Chung','0937284171','22 Võ Văn Ngân, Thủ Đức','2021-01-13','trò chuyện với trẻ','Chưa duyệt',6),(223,'Bùi Thị Huyền','0937282748','12 Kha Vạn Cân, Thủ Đức, TPHCM','2021-01-30','nấu ăn','Đã duyệt',7);
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

-- Dump completed on 2021-01-12 22:56:14
