package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.BangPhiDV;
import springboot.Repository.BangPhiDVRepository;

@Service
public class BangPhiDVDAO {
    
    @Autowired
    BangPhiDVRepository bangPhiDVRepository;

    //Save
    public BangPhiDV save(BangPhiDV bpdv){
        return bangPhiDVRepository.save(bpdv);
    }

    //Get all
    public List<BangPhiDV> findAll(){
        return bangPhiDVRepository.findAll();
    }

    //Get by Id
    public BangPhiDV findOne(Integer iddv){
        return bangPhiDVRepository.findById(iddv).orElse(null);
    }

     //Get by Idloaidv
     public List<BangPhiDV> findByIdLoaidv(Integer idloaidv){
        return bangPhiDVRepository.findByIdLoaiDV(idloaidv);
    }

    //Delete
    public void delete(BangPhiDV bpdv){
        bangPhiDVRepository.delete(bpdv);
    }

    //Find by name
    public List<BangPhiDV> findByName(String ten){
        return bangPhiDVRepository.findByName(ten);
    }
}
