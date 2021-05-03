package springboot.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.BangPhiDV;

public interface BangPhiDVRepository extends JpaRepository<BangPhiDV, Integer>{
    @Query(value ="SELECT * FROM bangphidv WHERE bangphidv.idloaidv=:idloaidv", nativeQuery = true)
    List<BangPhiDV> findByIdLoaiDV(@Param("idloaidv") int idloaidv);
    
    @Query(value = "SELECT * FROM bangphidv WHERE tendv LIKE %:ten%", nativeQuery = true)
    List<BangPhiDV> findByName(@Param("ten") String ten);
}
