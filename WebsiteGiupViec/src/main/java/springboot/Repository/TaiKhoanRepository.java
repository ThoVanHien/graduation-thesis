package springboot.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.TaiKhoan;

public interface TaiKhoanRepository extends JpaRepository<TaiKhoan, Integer>{

    @Query(value = "SELECT * FROM taikhoan, nhanvien WHERE nhanvien.sdt = taikhoan.sdt AND nhanvien.hoten LIKE %:ten%", nativeQuery = true)
    List<TaiKhoan> findByName(@Param("ten") String ten);

    @Query(value="SELECT DISTINCT quyen FROM taikhoan WHERE sdt=:sdt AND pass=:pass", nativeQuery = true)
    String findLogin(@Param("sdt") String sdt, @Param("pass") String pass);
}
