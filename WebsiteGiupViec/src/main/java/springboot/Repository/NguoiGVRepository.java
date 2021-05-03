package springboot.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springboot.Model.NguoiGV;

public interface NguoiGVRepository extends JpaRepository<NguoiGV, Integer>{
    @Query(value ="SELECT * FROM nguoigiupviec WHERE nguoigiupviec.del=0 and nguoigiupviec.ungtuyen=0 order by hopdong ASC;", nativeQuery = true)
    List<NguoiGV> findAlltrue();

    @Query(value ="SELECT * FROM nguoigiupviec WHERE nguoigiupviec.ungtuyen=1", nativeQuery = true)
    List<NguoiGV> findAlltuyendung();

    @Transactional
    @Modifying
	@Query(value ="UPDATE nguoigiupviec SET del=1 WHERE idnguoigv=:idnguoigv", nativeQuery = true)
    void deleteNguoigv(@Param("idnguoigv") int idnguoigv);
    
    // @Query(value ="select * from nguoigiupviec\r\n" + 
	// 		"where nguoigiupviec.hopdong=1 and nguoigiupviec.del=0\r\n" + 
	// 		"and nguoigiupviec.idloaidv =:idloaidv\r\n" + 
	// 		"				and not exists (select * from hopdongthuedv, phieuthudv\r\n" + 
	// 		"				where nguoigiupviec.idnguoigv=hopdongthuedv.idnguoigv\r\n" + 
	// 		"	and hopdongthuedv.idhdthue=phieuthudv.idhdthue\r\n" + 
	// 		"    and ((phieuthudv.ngaybatdau<=:start and phieuthudv.ngayketthuc>=:start) \r\n" + 
	// 		"        or (phieuthudv.ngaybatdau<=:end and phieuthudv.ngayketthuc>=:end)));", nativeQuery = true)
	// List<NguoiGV> findbyHopDong(@Param("idloaidv") int idloaidv, @Param("start") String start, @Param("end") String end);

	@Query(value ="select * from nguoigiupviec where hopdong=1 and del=0 and idloaidv=:idloaidv and idnguoigv not in( select idnguoigv from phieuthudv, hopdongthuedv\r\n"+ 
				"where(hopdongthuedv.idhdthue=phieuthudv.idhdthue and\r\n"+
				"((ngaybatdau<=:start and ngayketthuc>=:start) or\r\n"+
				"(ngaybatdau<=:end and ngayketthuc>=:end) or\r\n"+ 
				"(ngaybatdau>=:start and ngayketthuc<=:end))));", nativeQuery = true)
	List<NguoiGV> findbyHopDong(@Param("idloaidv") int idloaidv, @Param("start") String start, @Param("end") String end);

	@Query(value="SELECT COUNT(idnguoigv) AS soluong FROM nguoigiupviec WHERE hopdong=1", nativeQuery = true)
	int countNGV();

	@Query(value="SELECT * FROM nguoigiupviec WHERE hopdong=1 and del=0 and hoten LIKE %:ten%", nativeQuery = true)
	List<NguoiGV> findByName(@Param("ten") String ten);

	@Query(value="SELECT * FROM nguoigiupviec WHERE ungtuyen=1 and hoten LIKE %:ten%", nativeQuery = true)
	List<NguoiGV> findUTByName(@Param("ten") String ten);

	@Query(value = "SELECT MAX(idnguoigv) FROM nguoigiupviec", nativeQuery = true)
	int maxId();

	@Transactional
    @Modifying
	@Query(value ="UPDATE nguoigiupviec SET diem =:diem WHERE idnguoigv =:idnguoigv", nativeQuery = true)
    void setDiem(@Param("diem") float diem, @Param("idnguoigv") int idnguoigv);
}
