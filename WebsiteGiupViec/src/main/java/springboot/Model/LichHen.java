package springboot.Model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "lichhen")
@EntityListeners(AuditingEntityListener.class)
public class LichHen {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idlichhen;
    private int idnv;
    private int idkh;
    private Date ngay;

    // @JsonFormat(pattern = "HH:mm")
    // @JsonDeserialize(using = SqlTimeDeserializer.class)
    // @Column(name = "gio")
    private String gio;
    private String diachihen;
    private int hopdong;

    public LichHen(){

    }

    public LichHen(int idlichhen, int idnv, int idkh, Date ngay, String gio, String diachihen, int hopdong) {
        this.idlichhen = idlichhen;
        this.idnv = idnv;
        this.idkh = idkh;
        this.ngay = ngay;
        this.gio = gio;
        this.diachihen = diachihen;
        this.hopdong = hopdong;
    }

    public int getIdlichhen() {
        return idlichhen;
    }

    public void setIdlichhen(int idlichhen) {
        this.idlichhen = idlichhen;
    }

    public int getIdnv() {
        return idnv;
    }

    public void setIdnv(int idnv) {
        this.idnv = idnv;
    }

    public int getIdkh() {
        return idkh;
    }

    public void setIdkh(int idkh) {
        this.idkh = idkh;
    }

    public Date getNgay() {
        return ngay;
    }

    public void setNgay(Date ngay) {
        this.ngay = ngay;
    }

    public String getGio() {
        return gio;
    }

    public void setGio(String gio) {
        this.gio = gio;
    }

    public String getDiachihen() {
        return diachihen;
    }

    public void setDiachihen(String diachihen) {
        this.diachihen = diachihen;
    }

    public int getHopdong() {
        return hopdong;
    }

    public void setHopdong(int hopdong) {
        this.hopdong = hopdong;
    }

}
