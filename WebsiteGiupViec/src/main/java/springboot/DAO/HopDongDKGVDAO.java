package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.HopDongDKGV;
import springboot.Repository.HopDongDKGVRepository;

@Service
public class HopDongDKGVDAO {
    
    @Autowired
    HopDongDKGVRepository hopDongDKGVRepository;

    //Save
    public HopDongDKGV save(HopDongDKGV hddkgv){
        return hopDongDKGVRepository.save(hddkgv);
    }

    //Get all
    public List<HopDongDKGV> findAll(){
        return hopDongDKGVRepository.findAll();
    }

    //Get by Id
    public HopDongDKGV findOne(Integer idhddk){
        return hopDongDKGVRepository.findById(idhddk).orElse(null);
    }

    //Get phan tram uong by Id
    public int findPhamTramLuong(Integer idnguoigv){
        return hopDongDKGVRepository.findPhanTramLuong(idnguoigv);
    }

    //Delete
    public void delete(HopDongDKGV hddkgv){
        hopDongDKGVRepository.delete(hddkgv);
    }
}
