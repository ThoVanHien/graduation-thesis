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

import springboot.DAO.YeuCauDAO;
import springboot.Model.YeuCau;

@RestController
@RequestMapping("/gvnhanh")
public class YeuCauController {
    
    @Autowired
    YeuCauDAO yeuCauDAO;

    //Lưu yêu cầu
    @PostMapping("/yeucau")
    public YeuCau createYeuCau(@Validated @RequestBody YeuCau yc){
        return yeuCauDAO.save(yc);
    }

    //Lấy ds yêu cầu
    @GetMapping("/yeucau")
    public List<YeuCau> getAllYeuCau(){
        return yeuCauDAO.findAllYeuCau();
    }

    //Lấy yêu cầu qua Id
    @GetMapping("/yeucau/{id}")
    public ResponseEntity<YeuCau> getYeuCauById(@PathVariable(value = "id") Integer idyc){
        YeuCau yc = yeuCauDAO.findOne(idyc);

        if(yc==null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(yc);
    }

     //Lấy yêu cầu qua Idlichhen
     @GetMapping("/yeucau/lichhen/{id}")
     public ResponseEntity<YeuCau> getYeuCauByIdLichHen(@PathVariable(value = "id") Integer idlichhen){
         YeuCau yc = yeuCauDAO.findByIdlichhen(idlichhen);
 
         if(yc==null){
             return ResponseEntity.notFound().build();
         }
 
         return ResponseEntity.ok().body(yc);
     }
    
    //Lấy ds yêu cầu chưa duyệt
    @GetMapping("/yeucau/chuaduyet")
    public List<YeuCau> getAllYeuCauChuaDuyet(){
        return yeuCauDAO.findYeuCauChuaDuyet();
    }

    //Cập nhật yêu cầu
    @PutMapping("/yeucau/{id}")
    public ResponseEntity<YeuCau> updateYeuCau(@PathVariable(value = "id") Integer idyc, @Validated @RequestBody YeuCau ycDetail){
        YeuCau yc = yeuCauDAO.findOne(idyc);

        if(yc==null){
            return ResponseEntity.notFound().build();
        }

        yc.setHoten(ycDetail.getHoten());
        yc.setSdt(ycDetail.getSdt());
        yc.setDiachi(ycDetail.getDiachi());
        yc.setNgaylam(ycDetail.getNgaylam());
        yc.setNgayketthuc(ycDetail.getNgayketthuc());
        yc.setCongviec(ycDetail.getCongviec());
        yc.setIddv(ycDetail.getIddv());
        yc.setTrangthai(ycDetail.getTrangthai());
        yc.setGiolamviec(ycDetail.getGiolamviec());
        yc.setGioketthuc(ycDetail.getGioketthuc());
        yc.setLat(ycDetail.getLat());
        yc.setLng(ycDetail.getLng());
        yc.setThoigian(ycDetail.getThoigian());

        YeuCau updateYeuCau = yeuCauDAO.save(yc);
        return ResponseEntity.ok().body(updateYeuCau);
    }

    //Cập nhật trạng thái yêu cầu
    @PutMapping("/yeucau/trangthai/{id}")
    public ResponseEntity<YeuCau> updateTrangThaiYeuCau(@PathVariable(value = "id") Integer idyc){
        YeuCau yc = yeuCauDAO.findOne(idyc);

        if(yc==null){
            return ResponseEntity.notFound().build();
        }

        yeuCauDAO.changeTrangThai(idyc);
        return ResponseEntity.ok().build();
    }

    //Xóa yêu cầu
    @DeleteMapping("/yeucau/{id}")
    public ResponseEntity<YeuCau> deleteYeuCau(@PathVariable(value = "id") Integer idyc){
        YeuCau yc = yeuCauDAO.findOne(idyc);

        if(yc==null){
            return ResponseEntity.notFound().build();
        }
        yeuCauDAO.delete(yc);
        return ResponseEntity.ok().build();
    }

    //Tìm yêu cầu theo tên
    @GetMapping("/yeucau/find/{ten}")
    public List<YeuCau> findYeuCauByName(@PathVariable(value = "ten") String ten){
        return yeuCauDAO.findByName(ten);
    }
}
