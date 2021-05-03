package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.NhanVien;
import springboot.Repository.NhanVienRepository;

@Service
public class NhanVienDAO {
	
	@Autowired
	NhanVienRepository nhanVienRepository;
	
	//Save 
	public NhanVien save(NhanVien nv) {
		return nhanVienRepository.save(nv);
	}
	
	//Search
	public List<NhanVien> findAll(){
		return nhanVienRepository.findAll();
	}
	
	//Get MaNV
	public NhanVien findOne(Integer manv) {
		return nhanVienRepository.findById(manv).orElse(null);
	}

	//Get nhân viên chưa có tài khoản
	public List<NhanVien> findTKNhanVien(){
		return nhanVienRepository.findTKNVien();
	}

	//Get nhan vien chua co lich hen
	public List<NhanVien> findByTimeNhanVien(String gio, String ngay){
		return nhanVienRepository.findbyTime(gio, ngay);
	}
	
	//Delete
	public void delete(NhanVien nv) {
		nhanVienRepository.delete(nv);
	}

	//Find nhan vien by name
	public List<NhanVien> findByName(String ten){
		return nhanVienRepository.findByName(ten);
	}

	//Find nhan vien by phone
	public NhanVien findByPhone(String sdt){
		return nhanVienRepository.findByPhone(sdt);
	}
}
