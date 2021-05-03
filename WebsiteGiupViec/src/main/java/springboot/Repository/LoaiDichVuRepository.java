package springboot.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.LoaiDichVu;

public interface LoaiDichVuRepository extends JpaRepository<LoaiDichVu,Integer>{
    @Query(value ="select * from loaidv where idloaidv in (select idloaidv from bangphidv where bangphidv.iddv=:iddv);", nativeQuery = true)
    LoaiDichVu findByIdDv(@Param("iddv") int iddv);
    
    @Query(value = "SELECT * FROM loaidv WHERE tenloai LIKE %:ten%", nativeQuery = true)
    List<LoaiDichVu> findByName(@Param("ten") String ten);
}
