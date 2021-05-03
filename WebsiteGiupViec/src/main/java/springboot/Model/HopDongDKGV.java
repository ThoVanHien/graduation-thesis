package springboot.Model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "hopdongdkgv")
@EntityListeners(AuditingEntityListener.class)
public class HopDongDKGV {

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private int idhddk;
    private int idnv;
    private int idnguoigv;
    private String suckhoe;
    private Date ngayky;
    private Date ngayhethan;
    private int phantramluong;
    private String kinhnghiem;

    public HopDongDKGV(){

    }

    public HopDongDKGV(int idhddk, int idnv, int idnguoigv, String suckhoe, Date ngayky, Date ngayhethan, int phantramluong,
            String kinhnghiem) {
        this.idhddk = idhddk;
        this.idnv = idnv;
        this.idnguoigv = idnguoigv;
        this.suckhoe = suckhoe;
        this.ngayky = ngayky;
        this.ngayhethan = ngayhethan;
        this.phantramluong = phantramluong;
        this.kinhnghiem = kinhnghiem;
    }

    public int getIdhddk() {
        return idhddk;
    }

    public void setIdhddk(int idhddk) {
        this.idhddk = idhddk;
    }

    public int getIdnv() {
        return idnv;
    }

    public void setIdnv(int idnv) {
        this.idnv = idnv;
    }

    public int getidnguoigv() {
        return idnguoigv;
    }

    public void setidnguoigv(int idnguoigv) {
        this.idnguoigv = idnguoigv;
    }

    public String getSuckhoe() {
        return suckhoe;
    }

    public void setSuckhoe(String suckhoe) {
        this.suckhoe = suckhoe;
    }

    public Date getNgayky() {
        return ngayky;
    }

    public void setNgayky(Date ngayky) {
        this.ngayky = ngayky;
    }

    public Date getNgayhethan() {
        return ngayhethan;
    }

    public void setNgayhethan(Date ngayhethan) {
        this.ngayhethan = ngayhethan;
    }

    public int getPhantramluong() {
        return phantramluong;
    }

    public void setPhantramluong(int phantramluong) {
        this.phantramluong = phantramluong;
    }

    public String getKinhnghiem() {
        return kinhnghiem;
    }

    public void setKinhnghiem(String kinhnghiem) {
        this.kinhnghiem = kinhnghiem;
    }
    
}
