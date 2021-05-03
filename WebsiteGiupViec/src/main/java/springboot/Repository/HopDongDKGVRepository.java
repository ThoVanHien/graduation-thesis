package springboot.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.HopDongDKGV;

public interface HopDongDKGVRepository extends JpaRepository<HopDongDKGV, Integer>{
    
    @Query(value = "SELECT phantramluong FROM hopdongdkgv WHERE idnguoigv =:idnguoigv", nativeQuery = true)
    int findPhanTramLuong(@Param("idnguoigv") int idnguoigv);
}
