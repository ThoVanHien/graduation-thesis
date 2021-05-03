package springboot.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.KhachHang;

public interface KhachHangRepository extends JpaRepository<KhachHang, Integer>{
    @Transactional
    @Modifying
    @Query(value = "UPDATE khachhang SET trangthai=1 WHERE idkh=:idkh", nativeQuery = true)
    void setTTTrue(@Param("idkh") int idkh);

    @Transactional
    @Modifying
    @Query(value = "UPDATE khachhang SET trangthai=0 WHERE idkh=:idkh", nativeQuery = true)
    void setTTFalse(@Param("idkh") int idkh);

    @Query(value ="SELECT * FROM khachhang WHERE sdt=:sdt AND trangthai=0;", nativeQuery = true)
    List<KhachHang> findKHDV(@Param("sdt") String sdt);

    @Query(value ="SELECT COUNT(idkh) AS soluong FROM khachhang", nativeQuery = true)
    int countKH();

    @Query(value = "SELECT * FROM khachhang WHERE hoten LIKE %:ten%", nativeQuery = true)
    List<KhachHang> findByName(@Param("ten") String ten);
}
