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
@Table(name="yeucau")
@EntityListeners(AuditingEntityListener.class)
public class YeuCau {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idyc;
    private String hoten;
    private String sdt;
    private String diachi;
    private Date ngaylam;
    private Date ngayketthuc;
    private String congviec;
    private String trangthai;
    private int iddv;
    private String giolamviec;
    private String gioketthuc;
    private float lat;
    private float lng;
    private int thoigian;

    public YeuCau(){

    }

    public YeuCau(int idyc, String hoten, String sdt, String diachi, Date ngaylam, Date ngayketthuc, String congviec, String trangthai,
            int iddv, String giolamviec, String gioketthuc, float lat, float lng, int thoigian) {
        this.idyc = idyc;
        this.hoten = hoten;
        this.sdt = sdt;
        this.diachi = diachi;
        this.ngaylam = ngaylam;
        this.ngayketthuc = ngayketthuc;
        this.congviec = congviec;
        this.trangthai = trangthai;
        this.iddv = iddv;
        this.giolamviec = giolamviec;
        this.gioketthuc = gioketthuc;
        this.lat = lat;
        this.lng = lng;
        this.thoigian = thoigian;
    }

    public int getIdyc() {
        return idyc;
    }

    public void setIdyc(int idyc) {
        this.idyc = idyc;
    }

    public String getHoten() {
        return hoten;
    }

    public void setHoten(String hoten) {
        this.hoten = hoten;
    }

    public String getSdt() {
        return sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
    }

    public String getDiachi() {
        return diachi;
    }

    public void setDiachi(String diachi) {
        this.diachi = diachi;
    }

    public Date getNgaylam() {
        return ngaylam;
    }

    public void setNgaylam(Date ngaylam) {
        this.ngaylam = ngaylam;
    }

    public String getCongviec() {
        return congviec;
    }

    public void setCongviec(String congviec) {
        this.congviec = congviec;
    }

    public String getTrangthai() {
        return trangthai;
    }

    public void setTrangthai(String trangthai) {
        this.trangthai = trangthai;
    }

    public int getIddv() {
        return iddv;
    }

    public void setIddv(int iddv) {
        this.iddv = iddv;
    }

    public Date getNgayketthuc() {
        return ngayketthuc;
    }

    public void setNgayketthuc(Date ngayketthuc) {
        this.ngayketthuc = ngayketthuc;
    }

    public String getGiolamviec() {
        return giolamviec;
    }

    public void setGiolamviec(String giolamviec) {
        this.giolamviec = giolamviec;
    }

    public String getGioketthuc() {
        return gioketthuc;
    }

    public void setGioketthuc(String gioketthuc) {
        this.gioketthuc = gioketthuc;
    }

    public float getLat() {
        return lat;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }

    public float getLng() {
        return lng;
    }

    public void setLng(float lng) {
        this.lng = lng;
    }

    public int getThoigian() {
        return thoigian;
    }

    public void setThoigian(int thoigian) {
        this.thoigian = thoigian;
    }
    
}
