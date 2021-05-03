package springboot.Model;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name="bangphidv")
@EntityListeners(AuditingEntityListener.class)
public class BangPhiDV {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int iddv;
    private int idloaidv;
    private String tendv;
    private String mota;
    private float gia;
    private String donvitinh;
    private float phidv;
    private float chantren;

    public BangPhiDV(){

    }

    public BangPhiDV(int iddv, int idloaidv, String tendv, String mota, float gia, String donvitinh, float phidv, float chantren) {
        this.iddv = iddv;
        this.idloaidv = idloaidv;
        this.tendv = tendv;
        this.mota = mota;
        this.gia = gia;
        this.donvitinh = donvitinh;
        this.phidv = phidv;
        this.chantren = chantren;
    }

    public int getIddv() {
        return iddv;
    }

    public void setIddv(int iddv) {
        this.iddv = iddv;
    }

    public int getIdloaidv() {
        return idloaidv;
    }

    public void setIdloaidv(int idloaidv) {
        this.idloaidv = idloaidv;
    }

    public String getTendv() {
        return tendv;
    }

    public void setTendv(String tendv) {
        this.tendv = tendv;
    }

    public String getMota() {
        return mota;
    }

    public void setMota(String mota) {
        this.mota = mota;
    }

    public float getGia() {
        return gia;
    }

    public void setGia(float gia) {
        this.gia = gia;
    }

    public String getDonvitinh() {
        return donvitinh;
    }

    public void setDonvitinh(String donvitinh) {
        this.donvitinh = donvitinh;
    }

    public float getPhidv() {
        return phidv;
    }

    public void setPhidv(float phidv) {
        this.phidv = phidv;
    }

    public float getChantren() {
        return chantren;
    }

    public void setChantren(float chantren) {
        this.chantren = chantren;
    }
}
