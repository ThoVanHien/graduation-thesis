package springboot.Controller;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import springboot.DAO.NguoiGVDAO;
import springboot.Model.NguoiGV;

@RestController
@RequestMapping("/gvnhanh")
public class NguoiGVController {

    @Autowired
    NguoiGVDAO nguoiGVDAO;

    // Lưu người giúp việc
    @PostMapping("/nguoigv")
    public NguoiGV createNguoiGV(@Validated @RequestBody NguoiGV ngv) {
        return nguoiGVDAO.save(ngv);
    }

    // Lấy ds người giúp việc
    @GetMapping("/nguoigv")
    public List<NguoiGV> getAllNguoiGV(){
        return nguoiGVDAO.findAlltrue();
    }

    // Lấy ds tuyển dụng người giúp việc
    @GetMapping("/nguoigv/tuyendung")
    public List<NguoiGV> getAllTuyenDung(){
        return nguoiGVDAO.findAlltuyendung();
    }

    // Lấy 1 người giúp việc qua Id
    @GetMapping("/nguoigv/{id}")
    public ResponseEntity<NguoiGV> getNguoiGvById(@PathVariable(value="id") Integer idngv){
        NguoiGV nguoiGV = nguoiGVDAO.findOne(idngv);

        if(nguoiGV == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(nguoiGV);
    }

    //Tìm người giúp việc theo ngày
    @GetMapping("/nguoigv/timngv/{id}/{start}/{end}")
    public List<NguoiGV> getNguoiGvByHDThue(@PathVariable(value="id") Integer idloaidv, @PathVariable(value = "start") String start, @PathVariable(value = "end") String end){
        return nguoiGVDAO.findHdThue(idloaidv, start, end);

        // if(nguoiGV == null){
        //     return ResponseEntity.notFound().build();
        // }

        // return ResponseEntity.ok().body(nguoiGV);
    }

    //Update người giúp việc
    @PutMapping("/nguoigv/{id}")
    public ResponseEntity<NguoiGV> updateNguoiGV(@PathVariable(value="id") Integer idngv, @Validated @RequestBody NguoiGV ngvDetail)throws Exception{
        NguoiGV nguoiGV = nguoiGVDAO.findOne(idngv);

        if(nguoiGV == null){
            return ResponseEntity.notFound().build();
        }

        nguoiGV.setHoten(ngvDetail.getHoten());
        nguoiGV.setNgaysinh(ngvDetail.getNgaysinh());
        nguoiGV.setGioitinh(ngvDetail.getGioitinh());
        nguoiGV.setSdt(ngvDetail.getSdt());
        nguoiGV.setCmnd(ngvDetail.getCmnd());
        nguoiGV.setQuequan(ngvDetail.getQuequan());
        nguoiGV.setHinhanh(ngvDetail.getHinhanh());
        nguoiGV.setDel(ngvDetail.getDel());
        nguoiGV.setHopdong(ngvDetail.getHopdong());
        nguoiGV.setUngtuyen(ngvDetail.getUngtuyen());
        nguoiGV.setIdloaidv(ngvDetail.getIdloaidv());
        nguoiGV.setDiem(ngvDetail.getDiem());
        nguoiGV.setLuong(ngvDetail.getLuong());
        nguoiGV.setKinhnghiem(ngvDetail.getKinhnghiem());
        nguoiGV.setKynang(ngvDetail.getKynang());
        nguoiGV.setSuckhoe(ngvDetail.getSuckhoe());
        nguoiGV.setLat(ngvDetail.getLat());
        nguoiGV.setLng(ngvDetail.getLng());

        NguoiGV updateNguoiGV = nguoiGVDAO.save(nguoiGV);
        return ResponseEntity.ok().body(updateNguoiGV);
    }

    //Update người giúp việc
    @PutMapping("/nguoigv/image/{id}")
    public ResponseEntity<NguoiGV> updateNguoiGVImage(@PathVariable(value="id") Integer idngv, @Validated NguoiGV ngvDetail, BindingResult result, RedirectAttributes redirect, @RequestParam("hinhanh") MultipartFile multipartFile)throws Exception{
        NguoiGV nguoiGV = nguoiGVDAO.findOne(idngv);

        if(nguoiGV == null){
            return ResponseEntity.notFound().build();
        }

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
		Path uploadPath = Paths.get("D:\\BT\\Reactjs\\gv_admin\\public\\image"); //thu muc up cung cap thu muc src
		if (!Files.exists(uploadPath)) {
			Files.createDirectories(uploadPath);
		}
		try (InputStream inputStream = multipartFile.getInputStream()) {
			Path filePath = uploadPath.resolve(fileName);
			Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException ioe) {        
			throw new IOException("Could not save image file: " + fileName, ioe);
		}  

        nguoiGV.setHoten(ngvDetail.getHoten());
        nguoiGV.setNgaysinh(ngvDetail.getNgaysinh());
        nguoiGV.setGioitinh(ngvDetail.getGioitinh());
        nguoiGV.setSdt(ngvDetail.getSdt());
        nguoiGV.setCmnd(ngvDetail.getCmnd());
        nguoiGV.setQuequan(ngvDetail.getQuequan());
        nguoiGV.setHinhanh("/image/"+fileName);
        nguoiGV.setDel(ngvDetail.getDel());
        nguoiGV.setHopdong(ngvDetail.getHopdong());
        nguoiGV.setUngtuyen(ngvDetail.getUngtuyen());
        nguoiGV.setIdloaidv(ngvDetail.getIdloaidv());
        nguoiGV.setDiem(ngvDetail.getDiem());
        nguoiGV.setLuong(ngvDetail.getLuong());
        nguoiGV.setKinhnghiem(ngvDetail.getKinhnghiem());
        nguoiGV.setKynang(ngvDetail.getKynang());
        nguoiGV.setSuckhoe(ngvDetail.getSuckhoe());
        nguoiGV.setLat(ngvDetail.getLat());
        nguoiGV.setLng(ngvDetail.getLng());

        NguoiGV updateNguoiGV = nguoiGVDAO.save(nguoiGV);
        return ResponseEntity.ok().body(updateNguoiGV);
    }

    //Xóa người giúp việc
    @DeleteMapping("/nguoigv/{id}")
    public ResponseEntity<NguoiGV> deleteNguoiGV(@PathVariable(value="id") Integer idngv){
        NguoiGV nguoiGV = nguoiGVDAO.findOne(idngv);

        if(nguoiGV == null){
            return ResponseEntity.notFound().build();
        }

        nguoiGVDAO.delete(nguoiGV);
        return ResponseEntity.ok().build();
    }

     // Xóa 1 người giúp việc qua Id
     @PutMapping("/nguoigv/xoa/{id}")
     public ResponseEntity<NguoiGV> deleteNguoiGvById(@PathVariable(value="id") Integer idngv){
         NguoiGV nguoiGV = nguoiGVDAO.findOne(idngv);
 
         if(nguoiGV == null){
             return ResponseEntity.notFound().build();
         }
         nguoiGVDAO.deleteNguoigv(idngv);
         return ResponseEntity.ok().build();
     }

    //Tính tổng người giúp việc
    @GetMapping("/nguoigv/count")
    public int countTotalNgv(){
        try{
            return nguoiGVDAO.countTotalNGV();
        }
        catch(Exception ex){
            return 0;
        }
    }

    //Tìm người giúp việc theo tên
    @GetMapping("/nguoigv/find/{ten}")
    public List<NguoiGV> findNguoiGVByName(@PathVariable(value="ten") String ten){
        return nguoiGVDAO.findByName(ten);
    }

    //Tìm ứng viên theo tên
    @GetMapping("/nguoigv/finduv/{ten}")
    public List<NguoiGV> findUVByName(@PathVariable(value="ten") String ten){
        return nguoiGVDAO.findUTByName(ten);
    }

    //Tính id người giúp việc tiếp theo
    @GetMapping("/nguoigv/next")
    public Integer findNextId(){
        return nguoiGVDAO.maxId()+1;
    }

    // Cập nhật điểm của người giúp việc qua Id
    @PutMapping("/nguoigv/updiem/{id}/{diem}")
    public ResponseEntity<NguoiGV> updateDiem(@PathVariable(value="id") Integer idngv, @PathVariable(value="diem") Float diem){
        NguoiGV nguoiGV = nguoiGVDAO.findOne(idngv);

        if(nguoiGV == null){
            return ResponseEntity.notFound().build();
        }
        nguoiGVDAO.setDiem(diem, idngv);
        return ResponseEntity.ok().build();
    }
}


