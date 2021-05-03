package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.DanhGia;
import springboot.Repository.DanhGiaRepository;

@Service
public class DanhGiaDAO {
    
    @Autowired
    DanhGiaRepository danhGiaRepository;

    //Save 
    public DanhGia save(DanhGia danhGia){
        return danhGiaRepository.save(danhGia);
    }

    //Get all
    public List<DanhGia> findAll(){
        return danhGiaRepository.findAll();
    }

    //Get all by idngv
    public List<DanhGia> findAllByIdngv(Integer idnguoigv){
        return danhGiaRepository.findByIdngv(idnguoigv);
    }

    //Get by Id
    public DanhGia findOne(Integer iddg){
        return danhGiaRepository.findById(iddg).orElse(null);
    }

    //Delete
    public void delete(DanhGia danhGia){
        danhGiaRepository.delete(danhGia);
    }
}
