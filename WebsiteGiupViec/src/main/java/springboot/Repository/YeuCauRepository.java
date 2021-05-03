package springboot.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.YeuCau;

public interface YeuCauRepository extends JpaRepository<YeuCau, Integer>{
    @Query(value ="SELECT * FROM yeucau WHERE idyc IN (SELECT idkh FROM lichhen WHERE idlichhen=:idlichhen);", nativeQuery = true)
    YeuCau findYeuCauByLichHen(@Param("idlichhen") int idlichhen);

    @Query(value = "SELECT * FROM yeucau ORDER BY trangthai ASC", nativeQuery = true)
    List<YeuCau> findYeuCau();

    @Query(value = "SELECT * FROM yeucau WHERE trangthai='Chưa duyệt'", nativeQuery = true)
    List<YeuCau> findYeuCauChuaDuyet();

    @Transactional
    @Modifying
	@Query(value ="UPDATE yeucau SET trangthai = 'Đã duyệt' WHERE idyc =:idyc", nativeQuery = true)
    void changeYeuYau(@Param("idyc") int idyc);

    @Query(value = "SELECT * FROM yeucau WHERE hoten LIKE %:ten%", nativeQuery = true)
    List<YeuCau> findByName(@Param("ten") String ten);
}
