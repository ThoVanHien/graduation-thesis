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

import springboot.DAO.LoaiDichVuDAO;
import springboot.Model.LoaiDichVu;

@RestController
@RequestMapping("/gvnhanh")
public class LoaiDichVuController {
    
    @Autowired
    LoaiDichVuDAO loaiDichVuDAO;

    //Save loại dịch vụ
    @PostMapping("/loaidv")
    public LoaiDichVu createLoaiDichVu(@Validated @RequestBody LoaiDichVu loaidv){
        return loaiDichVuDAO.save(loaidv);
    }

    //Lấy loại dịch vụ
    @GetMapping("/loaidv")
    public List<LoaiDichVu> getAllLoaiDV(){
        return loaiDichVuDAO.findAll();
    }

    //Lấy loại dịch vụ bằng id
    @GetMapping("/loaidv/{id}")
    public ResponseEntity<LoaiDichVu> getLoaiDichVubyId(@PathVariable(value="id") Integer idloaidv){
        LoaiDichVu loaiDichVu = loaiDichVuDAO.findOne(idloaidv);

        if(loaiDichVu==null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(loaiDichVu);
    }

    //Lấy loại dịch vụ bằng iddv của bảng phí
    @GetMapping("/loaidv/bpdv/{id}")
    public ResponseEntity<LoaiDichVu> getLoaiDichVubyIdDv(@PathVariable(value="id") Integer iddv){
        LoaiDichVu loaiDichVu = loaiDichVuDAO.findByIdDv(iddv);

        if(loaiDichVu==null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(loaiDichVu);
    }

    //Update loại dịch vụ
    @PutMapping("/loaidv/{id}")
    public ResponseEntity<LoaiDichVu> updateLoaiDV(@PathVariable(value = "id") Integer idloaidv, @Validated @RequestBody LoaiDichVu loaidvDetail){
        LoaiDichVu loaiDichVu = loaiDichVuDAO.findOne(idloaidv);

        if(loaiDichVu==null){
            return ResponseEntity.notFound().build();
        }

        loaiDichVu.setTenloai(loaidvDetail.getTenloai());
        loaiDichVu.setGioithieu(loaidvDetail.getGioithieu());
        loaiDichVu.setCamket(loaidvDetail.getCamket());
        loaiDichVu.setKynang(loaidvDetail.getKynang());
        loaiDichVu.setAnh(loaidvDetail.getAnh());
        loaiDichVu.setChantren(loaidvDetail.getChantren());

        LoaiDichVu updateloaidv = loaiDichVuDAO.save(loaiDichVu);
        return ResponseEntity.ok().body(updateloaidv);
    }

    //Xóa loại dịch vụ
    @DeleteMapping("/loaidv/{id}")
    public ResponseEntity<LoaiDichVu> deleteLoaiDV(@PathVariable(value="id") Integer idloaidv){
        LoaiDichVu loaiDichVu = loaiDichVuDAO.findOne(idloaidv);

        if(loaiDichVu==null){
            return ResponseEntity.notFound().build();
        }

        loaiDichVuDAO.delete(loaiDichVu);
        return ResponseEntity.ok().build();
    }

    //Tìm loại dịch vụ theo tên
    @GetMapping("/loaidv/find/{ten}")
    public List<LoaiDichVu> findLoaiDVByName(@PathVariable(value = "ten") String ten){
        return loaiDichVuDAO.findByName(ten);
    }
}
