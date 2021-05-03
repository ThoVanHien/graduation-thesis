package springboot.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.NhanVien;

public interface NhanVienRepository extends JpaRepository<NhanVien, Integer>{
	
//	@Query(value ="SELECT * FROM nhanvien WHERE manv=:manv", nativeQuery = true)
//	NhanVien findId(@Param("manv") int manv);

    @Query(value ="SELECT * FROM nhanvien WHERE idnv NOT IN (SELECT idnv FROM taikhoan)", nativeQuery = true)
    List<NhanVien> findTKNVien();

    @Query(value ="select * from nhanvien\r\n" + 
			"where idnv not in (select idnv from lichhen \r\n" + 
			"where ngay=:ngay and gio=:gio)", nativeQuery = true)
    List<NhanVien> findbyTime(@Param("gio") String gio, @Param("ngay") String ngay);
    
    @Query(value="SELECT * FROM nhanvien WHERE hoten LIKE %:ten%", nativeQuery = true)
    List<NhanVien> findByName(@Param("ten") String ten);

    @Query(value="SELECT * FROM nhanvien WHERE sdt=:sdt", nativeQuery = true)
    NhanVien findByPhone(@Param("sdt") String sdt);
}
