package springboot.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import springboot.Model.PhieuThuDV;
import springboot.Model.ThongKe;

public interface PhieuThuDVRepository extends JpaRepository<PhieuThuDV, Integer>{
    
    @Query(value = "SELECT tendv, COUNT(phieuthudv.iddv) AS soluong  FROM phieuthudv,bangphidv WHERE phieuthudv.iddv = bangphidv.iddv GROUP BY (phieuthudv.iddv);", nativeQuery = true)
    List<ThongKe> countDV();

    
}
