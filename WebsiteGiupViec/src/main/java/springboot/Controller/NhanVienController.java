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

import org.springframework.util.StringUtils;
import springboot.DAO.NhanVienDAO;
import springboot.Model.NhanVien;

@RestController
@RequestMapping("/gvnhanh")
public class NhanVienController {

	private static String UPLOADED_FOLDER = "C://Temp//";

	@Autowired
	NhanVienDAO nhanVienDAO;

	@PostMapping("/api")
	public NhanVien post(@Validated NhanVien nv, BindingResult result, RedirectAttributes redirect, @RequestParam("hinhanh") MultipartFile multipartFile) throws IOException {
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
		nv.setHinhanh("/image/"+fileName);
		//nv.setHoten(nvDetail.getHoten());
		//nv.setGioitinh("Nam");
		// nv.setNgaysinh("2020-01-01");
		//nv.setSdt("0937281745");
		//nv.setCmnd("938291834");
		//nv.setLuong(55000.0);
		//nv.setHinhanh("6");
		return nhanVienDAO.save(nv);
	}

	// Save nhan vien
	@PostMapping("/nhanvien")
	public NhanVien createNhanvien(@Validated @RequestBody NhanVien nv) {
		return nhanVienDAO.save(nv);
	}

	// Get nhan vien
	@GetMapping("/nhanvien")
	public List<NhanVien> getAllNhanvien() {
		return nhanVienDAO.findAll();
	}

	// Get nhan vien by id
	@GetMapping("/nhanvien/{id}")
	public ResponseEntity<NhanVien> getNhanvienId(@PathVariable(value = "id") Integer manv) {
		NhanVien nVien = nhanVienDAO.findOne(manv);

		if (nVien == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(nVien);
	}

	// Get nhan vien chua co tai khoan
	@GetMapping("/nhanvien/tk")
	public List<NhanVien> getAllNhanvienTk() {
		return nhanVienDAO.findTKNhanVien();
	}

	// Get nhan vien chua co lich hen
	@GetMapping("/nhanvien/{gio}/{ngay}")
	public List<NhanVien> getAllNhanvienLH(@PathVariable(value = "gio") String gio,
			@PathVariable(value = "ngay") String ngay) {
		return nhanVienDAO.findByTimeNhanVien(gio, ngay);
	}

	//Update nhan vien
	@PutMapping(value="/nhanvien/{id}")
	public ResponseEntity<NhanVien> updateNhanVien(@PathVariable(value="id") Integer manv, @Validated @RequestBody NhanVien nvDetail) throws IOException{
		
		
		NhanVien nVien =  nhanVienDAO.findOne(manv);
		
		if(nVien==null) {
			return ResponseEntity.notFound().build();
		}		
	     
		nVien.setHoten(nvDetail.getHoten());
		nVien.setGioitinh(nvDetail.getGioitinh());
		nVien.setNgaysinh(nvDetail.getNgaysinh());
		nVien.setSdt(nvDetail.getSdt());
		nVien.setCmnd(nvDetail.getCmnd());
		nVien.setLuong(nvDetail.getLuong());
		nVien.setHinhanh(nvDetail.getHinhanh());
		
		NhanVien updatenv = nhanVienDAO.save(nVien);
	
		return ResponseEntity.ok().body(updatenv);
	}

	//Update nhan vien
	@PutMapping("/api/{id}")
	public ResponseEntity<NhanVien> put(@PathVariable(value = "id") Integer manv, @Validated NhanVien nvDetail, BindingResult result, RedirectAttributes redirect, @RequestParam("hinhanh") MultipartFile multipartFile) throws IOException {
		NhanVien nVien =  nhanVienDAO.findOne(manv);
		
		if(nVien==null) {
			return ResponseEntity.notFound().build();
		}

		
		String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
		System.out.println(fileName);
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
			
			nVien.setHoten(nvDetail.getHoten());
			nVien.setGioitinh(nvDetail.getGioitinh());
			nVien.setNgaysinh(nvDetail.getNgaysinh());
			nVien.setSdt(nvDetail.getSdt());
			nVien.setCmnd(nvDetail.getCmnd());
			nVien.setLuong(nvDetail.getLuong());
			nVien.setHinhanh("/image/"+fileName);
			
			NhanVien updatenv = nhanVienDAO.save(nVien);

			return ResponseEntity.ok().body(updatenv);
		}
		
	//Get list nhan vien by name
	@GetMapping("/nhanvien/find/{ten}")
	public List<NhanVien> findByName(@PathVariable(value="ten") String ten){
		return nhanVienDAO.findByName(ten);
	}

	//Get nhan vien qua sdt
	@GetMapping("nhanvien/phone/{sdt}")
	public ResponseEntity<NhanVien> getNhanVienByPhone(@PathVariable(value="sdt") String sdt){
		NhanVien nv = nhanVienDAO.findByPhone(sdt);
		if(nv==null){
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(nv);
	}

	//Delete nhan vien
	@DeleteMapping("/nhanvien/{id}")
	public ResponseEntity<NhanVien> deleteNhanvien(@PathVariable(value = "id") Integer manv) {
		NhanVien nVien = nhanVienDAO.findOne(manv);

		if (nVien == null) {
			return ResponseEntity.notFound().build();
		}
		nhanVienDAO.delete(nVien);
		return ResponseEntity.ok().build();
	}
}

