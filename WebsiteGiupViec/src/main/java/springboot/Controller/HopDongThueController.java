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

import springboot.DAO.HopDongThueDAO;
import springboot.Model.HopDongThue;
import springboot.Model.ListHD;

@RestController
@RequestMapping("/gvnhanh")
public class HopDongThueController {
    
    @Autowired
    HopDongThueDAO hopDongThueDAO;

    //Lưu hợp đồng thuê
    @PostMapping("/hdthue")
    public HopDongThue createHDThue(@Validated @RequestBody HopDongThue hdthue){
        return hopDongThueDAO.save(hdthue);
    }

    //Lấy ds hợp đồng thuê
    @GetMapping("/hdthue")
    public List<HopDongThue> getAllHDthue(){
        return hopDongThueDAO.findAll();
    }

    @GetMapping("/hdthue/all")
    public List<ListHD> getAllListHDthue(){
        return hopDongThueDAO.findAllList();
    }

    //Lấy hợp đồng thuê qua id
    @GetMapping("/hdthue/{id}")
    public ResponseEntity<HopDongThue> getHDThueById(@PathVariable(value="id") Integer idhdthue){
        HopDongThue hopDongThue = hopDongThueDAO.findOne(idhdthue);

        if(hopDongThue == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(hopDongThue);
    }

    //Cập nhật hợp đồng thuê
    @PutMapping("/hdthue/{id}")
    public ResponseEntity<HopDongThue> updateHDThueById(@PathVariable(value="id") Integer idhdthue, @Validated @RequestBody HopDongThue hdthueDetail){
        HopDongThue hopDongThue = hopDongThueDAO.findOne(idhdthue);

        if(hopDongThue == null){
            return ResponseEntity.notFound().build();
        }

        hopDongThue.setIdkh(hdthueDetail.getIdkh());
        hopDongThue.setIdnguoigv(hdthueDetail.getIdnguoigv());
        hopDongThue.setIdnv(hdthueDetail.getIdnv());
        hopDongThue.setNgaythue(hdthueDetail.getNgaythue());
        hopDongThue.setTrangthai(hdthueDetail.getTrangthai());
        hopDongThue.setThanhtoan(hdthueDetail.isThanhtoan());

        HopDongThue updateHDThue = hopDongThueDAO.save(hopDongThue);
        return ResponseEntity.ok().body(updateHDThue);
    }

    //Xóa hợp đồng thuê
    @DeleteMapping("/hdthue/{id}")
    public ResponseEntity<HopDongThue> deleteHDThue(@PathVariable(value="id") Integer idhdthue){
        HopDongThue hopDongThue = hopDongThueDAO.findOne(idhdthue);

        if(hopDongThue == null){
            return ResponseEntity.notFound().build();
        }
        hopDongThueDAO.delete(hopDongThue);
        return ResponseEntity.ok().build();
    }

    //Tính số lần đặt dịch vụ theo ngày
    @GetMapping("/hdthue/count/{ngaythue}")
    public int countHDThue(@PathVariable(value="ngaythue") String ngaythue){
        try{
            return hopDongThueDAO.countDV(ngaythue);
        }
        catch(Exception e){
            return 0;
        }
    }

    //Tính tổng số hợp đồng thuê
    @GetMapping("/hdthue/count")
    public int countTongHDThue(){
        try{
            return hopDongThueDAO.countTongLuotDV();
        }
        catch(Exception e){
            return 0;
        }
    }
    
    //Tìm hợp đồng thuê theo tên người giúp việc/khách hàng
    @GetMapping("/hdthue/find/{ten}")
    public List<ListHD> findHDThueByName(@PathVariable(value= "ten") String ten){
        return hopDongThueDAO.findByName(ten);
    }
}
