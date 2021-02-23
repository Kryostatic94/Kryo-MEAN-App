-- MySQL dump 10.13  Distrib 5.7.29, for Win64 (x86_64)
--
-- Host: localhost    Database: autonoleggio
-- ------------------------------------------------------
-- Server version	5.7.29-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auto`
--

DROP TABLE IF EXISTS `auto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auto` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `marca` varchar(50) NOT NULL,
  `modello` varchar(50) NOT NULL,
  `colore` varchar(50) DEFAULT NULL,
  `targa` varchar(50) NOT NULL,
  `data_acquisto` date DEFAULT NULL,
  `id_categoria` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `targa` (`targa`),
  UNIQUE KEY `targa_2` (`targa`),
  UNIQUE KEY `targa_3` (`targa`),
  UNIQUE KEY `targa_4` (`targa`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `auto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auto`
--

LOCK TABLES `auto` WRITE;
/*!40000 ALTER TABLE `auto` DISABLE KEYS */;
INSERT INTO `auto` VALUES (1,'Fiat','Punto','Bianco','EX110XD','2020-10-01',1),(2,'Fiat','Doblò','Bianco','EG222EX','2020-10-12',2),(3,'Fiat','500X','Bianco','ES120XD','2020-10-13',3),(4,'Fiat','Ares 500','Bianco','ED123XS','2020-10-13',4),(5,'Opel','Adam','Bianco','ED117XS','2020-10-02',1),(6,'Opel','Zafira','Grigio','EA127XZ','2020-10-02',2),(7,'Opel','Mokka','Nera','EZ147AZ','2020-10-03',3),(8,'Opel','Speedster','Rossa','EX118SZ','2020-10-03',4),(9,'Ford','Ka','Bianco','ET172SS','2020-10-03',1),(10,'Ford','S-Max','Bianco','ES162AS','2020-10-03',2),(11,'Ford','Kuga','Bianco','ED182AS','2020-10-03',2),(12,'Ford','GT','Nero','EZ188DS','2020-10-03',4),(13,'Ferrari','Portofino M',NULL,'EZ198DS','2020-10-03',4),(14,'Ferrari','Portofino M',NULL,'EZ199DS','2020-10-03',4),(15,'Ferrari','California',NULL,'EZ200DS','2020-10-03',4),(16,'Ferrari','California',NULL,'EZ201DS','2020-10-03',4),(17,'Fiat','Panda 30','Verde','EX330SS','2020-10-14',5),(18,'Fiat','Panda 45','Verde','EX340SS','2020-10-14',5),(19,'Fiat','Panda 750','Verde','EX350SS','2020-10-14',5);
/*!40000 ALTER TABLE `auto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `descrizione` varchar(50) NOT NULL,
  `prezzo_giornaliero` float(6,2) unsigned NOT NULL,
  `prezzo_settimanale` float(6,2) unsigned NOT NULL,
  `prezzo_mensile` float(8,2) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `descrizione` (`descrizione`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'citycar',10.50,61.05,300.50),(2,'monovolume',11.50,72.05,350.50),(3,'suv',12.50,83.05,450.50),(4,'supercar',13.50,94.05,550.50),(5,'Legendary',20.50,40.50,500.25);
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nominativo` varchar(50) NOT NULL,
  `patente` varchar(20) NOT NULL,
  `carta_di_credito` char(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Andrea Costa','AX1112','1111111111111111'),(2,'Gionsik Mel','AX2223','2222222222222222'),(3,'Rino Rano','SA2223','333333333333333');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noleggio`
--

DROP TABLE IF EXISTS `noleggio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `noleggio` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_cliente` int(10) unsigned NOT NULL,
  `id_auto` int(10) unsigned NOT NULL,
  `data_inizio` date NOT NULL,
  `data_fine` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_cliente` (`id_cliente`),
  KEY `id_auto` (`id_auto`),
  CONSTRAINT `noleggio_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`),
  CONSTRAINT `noleggio_ibfk_2` FOREIGN KEY (`id_auto`) REFERENCES `auto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noleggio`
--

LOCK TABLES `noleggio` WRITE;
/*!40000 ALTER TABLE `noleggio` DISABLE KEYS */;
INSERT INTO `noleggio` VALUES (1,1,15,'2020-03-21','2020-03-22'),(2,1,16,'2020-03-22','2020-03-23'),(3,2,2,'2020-03-21','2020-03-22'),(4,3,3,'2020-03-21','2020-03-22'),(5,3,5,'2020-03-25','2020-04-25');
/*!40000 ALTER TABLE `noleggio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-16 17:20:07
