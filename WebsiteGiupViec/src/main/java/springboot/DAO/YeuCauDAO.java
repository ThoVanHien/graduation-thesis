package springboot.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.Model.YeuCau;
import springboot.Repository.YeuCauRepository;

@Service
public class YeuCauDAO {
    
    @Autowired
    YeuCauRepository yeuCauRepository;

    //Save
    public YeuCau save(YeuCau yc){
        return yeuCauRepository.save(yc);
    }

    //Get all
    public List<YeuCau> findAll(){
        return yeuCauRepository.findAll();
    }

    //Get all
    public List<YeuCau> findAllYeuCau(){
        return yeuCauRepository.findYeuCau();
    }

    //Get by Id
    public YeuCau findOne(Integer idyc){
        return yeuCauRepository.findById(idyc).orElse(null);
    }

    //Get by Idlichhen
    public YeuCau findByIdlichhen(Integer idlichhen){
        return yeuCauRepository.findYeuCauByLichHen(idlichhen);
    }

    //Get yeu cau chua duyet
    public List<YeuCau> findYeuCauChuaDuyet(){
        return yeuCauRepository.findYeuCauChuaDuyet();
    }

    //Thay doi trang thai yeu cau
    public void changeTrangThai(int idyc){
        yeuCauRepository.changeYeuYau(idyc);
    }

    //Delete
    public void delete(YeuCau yc){
        yeuCauRepository.delete(yc);
    }

    //Tim theo ten
    public List<YeuCau> findByName(String ten){
        return yeuCauRepository.findByName(ten);
    }
}
