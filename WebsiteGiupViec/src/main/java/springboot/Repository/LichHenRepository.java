package springboot.Repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.LichHen;

public interface LichHenRepository extends JpaRepository<LichHen, Integer>{
    @Transactional
    @Modifying
	@Query(value ="UPDATE lichhen SET hopdong=1 WHERE idlichhen=:idlichhen", nativeQuery = true)
    void updateHopdong(@Param("idlichhen") int idlichhen);
}
