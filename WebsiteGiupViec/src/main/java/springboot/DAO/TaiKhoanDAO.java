package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.TaiKhoan;
import springboot.Repository.TaiKhoanRepository;

@Service
public class TaiKhoanDAO {
    
    @Autowired
    TaiKhoanRepository taiKhoanRepository;

    //Save 
    public TaiKhoan save(TaiKhoan tk){
        return taiKhoanRepository.save(tk);
    }

    //Get all
    public List<TaiKhoan> findAll(){
        return taiKhoanRepository.findAll();
    }

    //Get by Id
    public TaiKhoan findOne(Integer idtk){
        return taiKhoanRepository.findById(idtk).orElse(null);
    }

    //Delete
    public void delete(TaiKhoan tk){
        taiKhoanRepository.delete(tk);
    }

    //Get by name
    public List<TaiKhoan> findByName(String ten){
        return taiKhoanRepository.findByName(ten);
    }

    //Check login
    public String findLogin(String sdt, String pass){
        return taiKhoanRepository.findLogin(sdt, pass);
    }
}
