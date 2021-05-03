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

import springboot.DAO.BangPhiDVDAO;
import springboot.Model.BangPhiDV;

@RestController
@RequestMapping("/gvnhanh")
public class BangPhiDVController {
    
    @Autowired
    BangPhiDVDAO bangPhiDVDAO;

    //Tạo mới bản gphi1 dịch vụ
    @PostMapping("/bangphidv")
    public BangPhiDV createBangphidv(@Validated @RequestBody BangPhiDV bpdv){
        return bangPhiDVDAO.save(bpdv);
    }

    //Lấy bảng phí
    @GetMapping("/bangphidv")
    public List<BangPhiDV> getAllBangPhiDV(){
        return bangPhiDVDAO.findAll();
    }

     //Lấy bảng phí theo Id loại dv
     @GetMapping("/bangphidv/loaidv/{id}")
     public ResponseEntity<List<BangPhiDV>> getBangPhiByIdLoaiDV(@PathVariable(value = "id") Integer idloaidv){
        List<BangPhiDV> bangPhiDV = bangPhiDVDAO.findByIdLoaidv(idloaidv);

        if(bangPhiDV==null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(bangPhiDV);
    }

    //Lấy bảng phí theo id
    @GetMapping("/bangphidv/{id}")
    public ResponseEntity<BangPhiDV> getBangPhiDVbtID(@PathVariable(value = "id") Integer iddv){
        BangPhiDV bangPhiDV = bangPhiDVDAO.findOne(iddv);

        if(bangPhiDV==null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(bangPhiDV);
    }

    //Cập nhật bảng phí
    @PutMapping("/bangphidv/{id}")
    public ResponseEntity<BangPhiDV> updateBangPHiDV(@PathVariable(value ="id") Integer iddv, @Validated @RequestBody BangPhiDV bpdvDatail){
        BangPhiDV bangPhiDV = bangPhiDVDAO.findOne(iddv);

        if(bangPhiDV==null){
            return ResponseEntity.notFound().build();
        }

        bangPhiDV.setIdloaidv(bpdvDatail.getIdloaidv());
        bangPhiDV.setTendv(bpdvDatail.getTendv());
        bangPhiDV.setMota(bpdvDatail.getMota());
        bangPhiDV.setGia(bpdvDatail.getGia());
        bangPhiDV.setDonvitinh(bpdvDatail.getDonvitinh());
        bangPhiDV.setPhidv(bpdvDatail.getPhidv());
        bangPhiDV.setChantren(bpdvDatail.getChantren());

        BangPhiDV updateBangPhiDV = bangPhiDVDAO.save(bangPhiDV);
        return ResponseEntity.ok().body(updateBangPhiDV);
    }

    //Xóa bảng phí
    @DeleteMapping("/bangphidv/{id}")
    public ResponseEntity<BangPhiDV> deleteBangPhiDV(@PathVariable(value = "id") Integer iddv){
        BangPhiDV bangPhiDV = bangPhiDVDAO.findOne(iddv);

        if(bangPhiDV==null){
            return ResponseEntity.notFound().build();
        }

        bangPhiDVDAO.delete(bangPhiDV);
        return ResponseEntity.ok().build();
    }

    //Tìm bảng phí theo tên
    @GetMapping("/bangphidv/find/{ten}")
    public List<BangPhiDV> findBPByName(@PathVariable(value = "ten") String ten){
        return bangPhiDVDAO.findByName(ten);
    }
}
