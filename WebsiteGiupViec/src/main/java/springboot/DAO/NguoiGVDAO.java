package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.NguoiGV;
import springboot.Repository.NguoiGVRepository;

@Service
public class NguoiGVDAO {
    
    @Autowired
    NguoiGVRepository nguoiGVRepository;

    //Save
    public NguoiGV save(NguoiGV ngv){
        return nguoiGVRepository.save(ngv);
    }

    //Get all
    public List<NguoiGV> findAll(){
        return nguoiGVRepository.findAll();
    }

    //Get all true
    public List<NguoiGV> findAlltrue(){
        return nguoiGVRepository.findAlltrue();
    }

    //Get all tuyen dung
    public List<NguoiGV> findAlltuyendung(){
        return nguoiGVRepository.findAlltuyendung();
    }

    //Get by Id
    public NguoiGV findOne(Integer idngv){
        return nguoiGVRepository.findById(idngv).orElse(null);
    }

    //Get by hdthue
    public List<NguoiGV> findHdThue(Integer idloaidv, String start, String end){
        return nguoiGVRepository.findbyHopDong(idloaidv, start, end);
    }

    //Delete 
    public void delete(NguoiGV ngv){
        nguoiGVRepository.delete(ngv);
    }

    //Delete by Id
    public void deleteNguoigv(Integer idngv){
        nguoiGVRepository.deleteNguoigv(idngv);
    }

    //Count nguoi giup viec
    public int countTotalNGV(){
        return nguoiGVRepository.countNGV();
    }

    //Find nguoi giup viec by name
    public List<NguoiGV> findByName(String ten){
        return nguoiGVRepository.findByName(ten);
    }

    //Find ung tuyen by name
    public List<NguoiGV> findUTByName(String ten){
        return nguoiGVRepository.findUTByName(ten);
    }

    //Find max id
    public int maxId(){
        return nguoiGVRepository.maxId();
    }

    //Update diem
    public void setDiem(float diem, int idnguoigv){
        nguoiGVRepository.setDiem(diem, idnguoigv);
    }
}
