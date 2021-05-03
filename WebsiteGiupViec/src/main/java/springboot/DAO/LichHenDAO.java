package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.LichHen;
import springboot.Repository.LichHenRepository;

@Service
public class LichHenDAO {
    
    @Autowired
    LichHenRepository lichHenRepository;

    //Save
    public LichHen save(LichHen lh){
        return lichHenRepository.save(lh);
    }

    //Get all
    public List<LichHen> findAll(){
        return lichHenRepository.findAll();
    }

    //Get by Id
    public LichHen findOne(Integer idlh){
        return lichHenRepository.findById(idlh).orElse(null);
    }

    //Update hop dong
    public void updateHD(Integer idlichhen){
        lichHenRepository.updateHopdong(idlichhen);
    }

    //Delete
    public void delete(LichHen lh){
        lichHenRepository.delete(lh);
    }
}
