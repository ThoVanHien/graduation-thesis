package springboot.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.HopDongThue;
import springboot.Model.ListHD;

public interface HopDongThueRepository extends JpaRepository<HopDongThue, Integer>{
    @Query(value="SELECT COUNT(ngaythue) AS solandat FROM hopdongthuedv WHERE ngaythue=:ngaythue GROUP BY ngaythue", nativeQuery = true)
    int countLuotDV(@Param("ngaythue") String ngaythue);

    @Query(value="SELECT count(idhdthue) AS soluong FROM hopdongthuedv", nativeQuery = true)
    int countTongLuotDV();

    @Query(value = "SELECT hopdongthuedv.idhdthue, bangphidv.tendv, yeucau.hoten as tenKH, nguoigiupviec.hoten as tenNGV, phieuthudv.ngaybatdau, phieuthudv.ngayketthuc\r\n"
    +"FROM phieuthudv, hopdongthuedv, bangphidv, nguoigiupviec, yeucau\r\n" 
    +"WHERE phieuthudv.idhdthue = hopdongthuedv.idhdthue\r\n"
            +"AND phieuthudv.iddv = bangphidv.iddv\r\n"
            +"AND hopdongthuedv.idnguoigv = nguoigiupviec.idnguoigv\r\n"
            +"AND hopdongthuedv.idkh = yeucau.idyc\r\n"
            +"AND (yeucau.hoten LIKE %:ten% OR nguoigiupviec.hoten LIKE %:ten%)", nativeQuery = true)
    List<ListHD> findByName(@Param("ten") String ten);

    @Query(value = "SELECT hopdongthuedv.idhdthue, bangphidv.tendv, yeucau.hoten as tenKH, nguoigiupviec.hoten as tenNGV, phieuthudv.ngaybatdau, phieuthudv.ngayketthuc, hopdongthuedv.thanhtoan\r\n"
    +"FROM phieuthudv, hopdongthuedv, bangphidv, nguoigiupviec, yeucau\r\n" 
    +"WHERE phieuthudv.idhdthue = hopdongthuedv.idhdthue\r\n"
            +"AND phieuthudv.iddv = bangphidv.iddv\r\n"
            +"AND hopdongthuedv.idnguoigv = nguoigiupviec.idnguoigv\r\n"
            +"AND hopdongthuedv.idkh = yeucau.idyc;", nativeQuery = true)
    List<ListHD> findListHDThue();
}
