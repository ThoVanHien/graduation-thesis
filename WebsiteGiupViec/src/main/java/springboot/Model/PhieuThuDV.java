package springboot.Model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "phieuthudv")
@EntityListeners(AuditingEntityListener.class)
public class PhieuThuDV {

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private int idhdthue;
    private int iddv;
    private float dongia;
    private Date ngaybatdau;
    private Date ngayketthuc;
    private String giolamviec;
    private String gioketthuc;
    private String diachilam;
    private float tongtien;
    private float tienthu;
    private int thoigian;

    public PhieuThuDV(){

    }

    public PhieuThuDV(int idhdthue, int iddv, float dongia, Date ngaybatdau, Date ngayketthuc, String giolamviec, String gioketthuc, 
            String diachilam, float tongtien, float tienthu, int thoigian) {
        this.idhdthue = idhdthue;
        this.iddv = iddv;
        this.dongia = dongia;
        this.ngaybatdau = ngaybatdau;
        this.ngayketthuc = ngayketthuc;
        this.giolamviec = giolamviec;
        this.gioketthuc = gioketthuc;
        this.diachilam = diachilam;
        this.tongtien = tongtien;
        this.tienthu = tienthu;
        this.thoigian = thoigian;
    }

    public int getIdhdthue() {
        return idhdthue;
    }

    public void setIdhdthue(int idhdthue) {
        this.idhdthue = idhdthue;
    }

    public int getIddv() {
        return iddv;
    }

    public void setIddv(int iddv) {
        this.iddv = iddv;
    }

    public float getDongia() {
        return dongia;
    }

    public void setDongia(float dongia) {
        this.dongia = dongia;
    }

    public Date getNgaybatdau() {
        return ngaybatdau;
    }

    public void setNgaybatdau(Date ngaybatdau) {
        this.ngaybatdau = ngaybatdau;
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

    public String getDiachilam() {
        return diachilam;
    }

    public void setDiachilam(String diachilam) {
        this.diachilam = diachilam;
    }

    public String getGioketthuc() {
        return gioketthuc;
    }

    public void setGioketthuc(String gioketthuc) {
        this.gioketthuc = gioketthuc;
    }

    public float getTongtien() {
        return tongtien;
    }

    public void setTongtien(float tongtien) {
        this.tongtien = tongtien;
    }

    public float getTienthu() {
        return tienthu;
    }

    public void setTienthu(float tienthu) {
        this.tienthu = tienthu;
    }

    public int getThoigian() {
        return thoigian;
    }

    public void setThoigian(int thoigian) {
        this.thoigian = thoigian;
    }
}
