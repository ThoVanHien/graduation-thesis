package springboot.Model;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "danhgia")
@EntityListeners(AuditingEntityListener.class)
public class DanhGia {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int iddg;
    private int idnguoigv;
    private String thoigian;
    private String noidung;

    public DanhGia(){

    }

    public DanhGia(int iddg, int idnguoigv, String thoigian, String noidung) {
        this.iddg = iddg;
        this.idnguoigv = idnguoigv;
        this.thoigian = thoigian;
        this.noidung = noidung;
    }

    public int getIddg() {
        return iddg;
    }

    public void setIddg(int iddg) {
        this.iddg = iddg;
    }

    public int getIdnguoigv() {
        return idnguoigv;
    }

    public void setIdnguoigv(int idnguoigv) {
        this.idnguoigv = idnguoigv;
    }

    public String getThoigian() {
        return thoigian;
    }

    public void setThoigian(String thoigian) {
        this.thoigian = thoigian;
    }

    public String getNoidung() {
        return noidung;
    }

    public void setNoidung(String noidung) {
        this.noidung = noidung;
    }
    
}
