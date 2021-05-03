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

import springboot.DAO.LichHenDAO;
import springboot.Model.LichHen;

@RestController
@RequestMapping("/gvnhanh")
public class LichHenController {
    
    @Autowired
    LichHenDAO lichHenDAO;

    //Lưu lịch hẹn
    @PostMapping("/lichhen")
    public LichHen createLichHen(@Validated @RequestBody LichHen lh){
        return lichHenDAO.save(lh);
    }

    //Lấy ds lịch hẹn
    @GetMapping("/lichhen")
    public List<LichHen> getAllLichHen(){
        return lichHenDAO.findAll();
    }

    //Lấy lịch hẹn qua Id
    @GetMapping("/lichhen/{id}")
    public ResponseEntity<LichHen> getLichHenById(@PathVariable(value = "id") Integer idlh){
        LichHen lichHen = lichHenDAO.findOne(idlh);

        if(lichHen == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(lichHen);
    }

    //Cập nhật lịch hẹn
    @PutMapping("/lichhen/{id}")
    public ResponseEntity<LichHen> updateLichHen(@PathVariable(value = "id") Integer idlh, @Validated @RequestBody LichHen lhDetail){
        LichHen lichHen = lichHenDAO.findOne(idlh);

        if(lichHen == null){
            return ResponseEntity.notFound().build();
        }

        lichHen.setIdkh(lhDetail.getIdkh());
        lichHen.setIdnv(lhDetail.getIdnv());
        lichHen.setNgay(lhDetail.getNgay());
        lichHen.setGio(lhDetail.getGio());
        lichHen.setDiachihen(lhDetail.getDiachihen());
        lichHen.setHopdong(lhDetail.getHopdong());

        LichHen updateLichHen = lichHenDAO.save(lichHen);
        return ResponseEntity.ok().body(updateLichHen);
    }

     //Cập nhật trạng thái kí hợp đồng
     @PutMapping("/lichhen/capnhat/{id}")
     public ResponseEntity<LichHen> updateHD(@PathVariable(value = "id") Integer idlh){
         LichHen lichHen = lichHenDAO.findOne(idlh);
 
         if(lichHen == null){
             return ResponseEntity.notFound().build();
         }
 
         lichHenDAO.updateHD(idlh);
         return ResponseEntity.ok().build();
     }

    //Xóa lịch hẹn
    @DeleteMapping("/lichhen/{id}")
    public ResponseEntity<LichHen> deleteLichHen(@PathVariable(value = "id") Integer idlh){
        LichHen lichHen = lichHenDAO.findOne(idlh);

        if(lichHen == null){
            return ResponseEntity.notFound().build();
        }

        lichHenDAO.delete(lichHen);
        return ResponseEntity.ok().build();
    }
}
