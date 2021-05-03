package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.KhachHang;
import springboot.Repository.KhachHangRepository;

@Service
public class KhachHangDAO {
    
    @Autowired
    KhachHangRepository khachHangRepository;

    //Save
    public KhachHang save(KhachHang kh){
        return khachHangRepository.save(kh);
    }

    //Get all
    public List<KhachHang> findAll(){
        return khachHangRepository.findAll();
    }

    //Get by Id
    public KhachHang findOne(Integer idkh){
        return khachHangRepository.findById(idkh).orElse(null);
    }

     //Get by sdt
     public List<KhachHang> findKHDV(String sdt){
        return khachHangRepository.findKHDV(sdt);
    }

    //Update trang thai true
    public void updateTrue(Integer idkh){
        khachHangRepository.setTTTrue(idkh);
    }

     //Update trang thai false
     public void updateFalse(Integer idkh){
        khachHangRepository.setTTFalse(idkh);
    }

    //Delete 
    public void delete(KhachHang kh){
        khachHangRepository.delete(kh);
    }

    //Count total khachhang
    public int countTotal(){
        return khachHangRepository.countKH();
    }

    //Find ten khach hang
    public List<KhachHang> findByName(String ten){
        return khachHangRepository.findByName(ten);
    }
}
