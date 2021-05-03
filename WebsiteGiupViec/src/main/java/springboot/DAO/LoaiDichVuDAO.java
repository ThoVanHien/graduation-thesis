package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.LoaiDichVu;
import springboot.Repository.LoaiDichVuRepository;

@Service
public class LoaiDichVuDAO {

    @Autowired 
    LoaiDichVuRepository loaiDichVuRepository;

    //Save
    public LoaiDichVu save(LoaiDichVu loaidv){
        return loaiDichVuRepository.save(loaidv);
    }

    //Search
    public List<LoaiDichVu> findAll(){
        return loaiDichVuRepository.findAll();
    }

    //Get IdloaiDV
    public LoaiDichVu findOne(Integer idloaidv){
        return loaiDichVuRepository.findById(idloaidv).orElse(null);
    }

    //Get loaidv by iddv
    public LoaiDichVu findByIdDv(Integer iddv){
        return loaiDichVuRepository.findByIdDv(iddv);
    }

    //Delete 
    public void delete(LoaiDichVu loaidv){
        loaiDichVuRepository.delete(loaidv);
    }
    
    //Find by name
    public List<LoaiDichVu> findByName(String ten){
        return loaiDichVuRepository.findByName(ten);
    }
}
