package springboot.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.DAO.PhieuThuDVDAO;
import springboot.Model.PhieuThuDV;
import springboot.Model.ThongKe;

@RestController
@RequestMapping("/gvnhanh")
public class PhieuThuDVController {

    @Autowired
    PhieuThuDVDAO phieuThuDVDAO;

    // Lưu phiếu thu
    @PostMapping("/phieuthudv")
    public PhieuThuDV creaPhieuThuDV(@Validated @RequestBody PhieuThuDV ptdv) {
        return phieuThuDVDAO.save(ptdv);
    }

    // Lấy ds phiếu thu
    @GetMapping("/phieuthudv")
    public List<PhieuThuDV> getAllPhieuThuDV() {
        return phieuThuDVDAO.findAll();
    }

    // Lấy ds phiếu thu
    @GetMapping("/phieuthudv/count")
    public List<ThongKe> getCountPhieuThuDV() {
        return phieuThuDVDAO.countDV();
    }

    //Lấy phiếu thu bằng Id
    @GetMapping("/phieuthudv/{id}")
    public ResponseEntity<PhieuThuDV> getPhieuThuDVById(@PathVariable(value = "id") Integer idhdthue){
        PhieuThuDV phieuThuDV = phieuThuDVDAO.findOne(idhdthue);

        if(phieuThuDV == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(phieuThuDV);
    }

    //Cập nhật phiếu thu
    @PutMapping("/phieuthudv/{id}")
    public ResponseEntity<PhieuThuDV> updatePhieuThuDV(@PathVariable(value = "id") Integer idhdthue, @Validated @RequestBody PhieuThuDV ptDetail){
        PhieuThuDV phieuThuDV = phieuThuDVDAO.findOne(idhdthue);

        if(phieuThuDV == null){
            return ResponseEntity.notFound().build();
        }

        phieuThuDV.setIddv(ptDetail.getIddv());
        phieuThuDV.setDongia(ptDetail.getDongia());
        phieuThuDV.setNgaybatdau(ptDetail.getNgaybatdau());
        phieuThuDV.setNgayketthuc(ptDetail.getNgayketthuc());
        phieuThuDV.setGiolamviec(ptDetail.getGiolamviec());
        phieuThuDV.setGioketthuc(ptDetail.getGioketthuc());
        phieuThuDV.setDiachilam(ptDetail.getDiachilam());
        phieuThuDV.setTongtien(ptDetail.getTongtien());
        phieuThuDV.setTienthu(ptDetail.getTienthu());
        phieuThuDV.setThoigian(ptDetail.getThoigian());

        PhieuThuDV updatePhieuThuDV = phieuThuDVDAO.save(phieuThuDV);
        return ResponseEntity.ok().body(updatePhieuThuDV);
    }

    //Xóa phiếu thu
    @DeleteMapping("/phieuthudv/{id}")
    public ResponseEntity<PhieuThuDV> deletePhieuThuDV(@PathVariable(value = "id") Integer idhdthue){
        PhieuThuDV phieuThuDV = phieuThuDVDAO.findOne(idhdthue);

        if(phieuThuDV == null){
            return ResponseEntity.notFound().build();
        }

        phieuThuDVDAO.delete(phieuThuDV);
        return ResponseEntity.ok().build();
    }
}
