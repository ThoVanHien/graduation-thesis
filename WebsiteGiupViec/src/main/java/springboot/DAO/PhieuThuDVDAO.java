package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.PhieuThuDV;
import springboot.Model.ThongKe;
import springboot.Repository.PhieuThuDVRepository;

@Service
public class PhieuThuDVDAO {

    @Autowired
    PhieuThuDVRepository phieuThuDVRepository;

    // Save
    public PhieuThuDV save(PhieuThuDV ptdv) {
        return phieuThuDVRepository.save(ptdv);
    }

    // Get all
    public List<PhieuThuDV> findAll() {
        return phieuThuDVRepository.findAll();
    }

    // Get by Id
    public PhieuThuDV findOne(Integer idhdthue) {
        return phieuThuDVRepository.findById(idhdthue).orElse(null);
    }

    // Get count dv
    public List<ThongKe> countDV() {
        return phieuThuDVRepository.countDV();
    }

    //Delete
    public void delete(PhieuThuDV phieuThuDV){
        phieuThuDVRepository.delete(phieuThuDV);
    }
}
