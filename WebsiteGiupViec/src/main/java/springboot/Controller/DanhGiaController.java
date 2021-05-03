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

import springboot.DAO.DanhGiaDAO;
import springboot.Model.DanhGia;

@RestController
@RequestMapping("/gvnhanh")
public class DanhGiaController {
    
    @Autowired
    DanhGiaDAO danhGiaDAO;

    //Lưu đánh giá
    @PostMapping("/danhgia")
    public DanhGia createDanhGia(@Validated @RequestBody DanhGia dg){
        return danhGiaDAO.save(dg);
    }

    //Lấy ds đánh giá
    @GetMapping("/danhgia")
    public List<DanhGia> getAllDanhGia(){
        return danhGiaDAO.findAll();
    }

    //Lấy đánh giá qua id
    @GetMapping("/danhgia/{id}")
    public ResponseEntity<DanhGia> getDanhGiaById(@PathVariable(value = "id") Integer iddg){
        DanhGia dg = danhGiaDAO.findOne(iddg);

        if(dg == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(dg);
    }

    //Cập nhật đánh giá
    @PutMapping("/danhgia/{id}")
    public ResponseEntity<DanhGia> updateDanhGia(@PathVariable(value = "id") Integer iddg, @Validated @RequestBody DanhGia dgDetail){
        DanhGia dg = danhGiaDAO.findOne(iddg);

        if(dg == null){
            return ResponseEntity.notFound().build();
        }
        
        dg.setIdnguoigv(dgDetail.getIdnguoigv());
        dg.setThoigian(dgDetail.getThoigian());
        dg.setNoidung(dgDetail.getNoidung());

        DanhGia updateDanhGia = danhGiaDAO.save(dg);
        return ResponseEntity.ok().body(updateDanhGia);
    }

    //Xóa đánh giá
    @DeleteMapping("danhgia/{id}")
    public ResponseEntity<DanhGia> deleteDanhGia(@PathVariable(value = "id") Integer iddg){
        DanhGia dg = danhGiaDAO.findOne(iddg);

        if(dg == null){
            return ResponseEntity.notFound().build();
        }

        danhGiaDAO.delete(dg);
        return ResponseEntity.ok().build();
    }

    //Lấy ds đánh giá theo id người giúp việc
    @GetMapping("danhgia/getid/{id}")
    public List<DanhGia> getAllByIdngv(@PathVariable(value = "id") Integer idnguoigv){
        return danhGiaDAO.findAllByIdngv(idnguoigv);
    }
}
