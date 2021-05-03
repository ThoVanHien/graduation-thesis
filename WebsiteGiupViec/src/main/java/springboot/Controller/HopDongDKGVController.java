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

import springboot.DAO.HopDongDKGVDAO;
import springboot.Model.HopDongDKGV;

@RestController
@RequestMapping("/gvnhanh")
public class HopDongDKGVController {
    
    @Autowired
    HopDongDKGVDAO hopDongDKGVDAO;

    //Lưu hợp đồng đăng ký
    @PostMapping("/hopdongdk")
    public HopDongDKGV createHopDongDKGV(@Validated @RequestBody HopDongDKGV hddk){
        return hopDongDKGVDAO.save(hddk);
    }

    //Lấy ds hợp đồng đăng ký
    @GetMapping("/hopdongdk")
    public List<HopDongDKGV> getAllHopDongDK(){
        return hopDongDKGVDAO.findAll();
    }

    //Lấy hợp đồng theo Id
    @GetMapping("hopdongdk/{id}")
    public ResponseEntity<HopDongDKGV> getHopDongDKById(@PathVariable(value="id") Integer idhddk){
        HopDongDKGV hopDongDKGV = hopDongDKGVDAO.findOne(idhddk);

        if(hopDongDKGV==null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(hopDongDKGV);
    }

    //Lấy phan tram luong theo Id
    // @GetMapping("hopdongdk/ptluong/{id}")
    // public int getPhanTramLuongById(@PathVariable(value="id") Integer idnguoigv){
    //     int phantramluong = hopDongDKGVDAO.findPhamTramLuong(idnguoigv);

    //     // if(phantramluong==0){
    //     //     return ResponseEntity.notFound().build();
    //     // }

    //     return phantramluong;
    // }

    //Cập nhật hợp đồng đăng ký
    @PutMapping("/hopdongdk/{id}")
    public ResponseEntity<HopDongDKGV> updateHopDongDK(@PathVariable(value="id") Integer idhddk, @Validated @RequestBody HopDongDKGV hddkDetail){
        HopDongDKGV hopDongDKGV = hopDongDKGVDAO.findOne(idhddk);

        if(hopDongDKGV==null){
            return ResponseEntity.notFound().build();
        }

        hopDongDKGV.setidnguoigv(hddkDetail.getidnguoigv());
        hopDongDKGV.setIdnv(hddkDetail.getIdnv());
        hopDongDKGV.setSuckhoe(hddkDetail.getSuckhoe());
        hopDongDKGV.setKinhnghiem(hddkDetail.getKinhnghiem());
        hopDongDKGV.setNgayky(hddkDetail.getNgayky());
        hopDongDKGV.setNgayhethan(hddkDetail.getNgayhethan());
        hopDongDKGV.setPhantramluong(hddkDetail.getPhantramluong());

        HopDongDKGV updateHopDongDKGV = hopDongDKGVDAO.save(hopDongDKGV);
        return ResponseEntity.ok().body(updateHopDongDKGV);
    }

    //Xóa hợp đồng
    @DeleteMapping("/hopdongdk/{id}")
    public ResponseEntity<HopDongDKGV> deleteHopDongDK(@PathVariable(value="id") Integer idhddk){
        HopDongDKGV hopDongDKGV = hopDongDKGVDAO.findOne(idhddk);

        if(hopDongDKGV==null){
            return ResponseEntity.notFound().build();
        }
        hopDongDKGVDAO.delete(hopDongDKGV);
        return ResponseEntity.ok().build();
    }
}
