package springboot.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.DanhGia;

public interface DanhGiaRepository extends JpaRepository<DanhGia, Integer>{

    @Query(value = "SELECT * FROM danhgia WHERE idnguoigv=:idnguoigv", nativeQuery = true)
    List<DanhGia> findByIdngv(@Param(value = "idnguoigv") int idnguoigv);
}
