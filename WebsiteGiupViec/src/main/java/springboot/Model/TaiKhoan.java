package springboot.Model;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "taikhoan")
@EntityListeners(AuditingEntityListener.class)
public class TaiKhoan {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idtk;
    private String sdt;
    private String pass;
    private int idnv;
    private String quyen;
    private String trangthai;

    public static int login = 0;

    public TaiKhoan(){

    }

    public TaiKhoan(int idtk, String sdt, String pass, int idnv, String quyen, String trangthai) {
        this.idtk = idtk;
        this.sdt = sdt;
        this.pass = pass;
        this.idnv = idnv;
        this.quyen = quyen;
        this.trangthai = trangthai;
    }

    public int getIdtk() {
        return idtk;
    }

    public void setIdtk(int idtk) {
        this.idtk = idtk;
    }

    public String getSdt() {
        return sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public int getIdnv() {
        return idnv;
    }

    public void setIdnv(int idnv) {
        this.idnv = idnv;
    }

    public String getQuyen() {
        return quyen;
    }

    public void setQuyen(String quyen) {
        this.quyen = quyen;
    }

    public String getTrangthai() {
        return trangthai;
    }

    public void setTrangthai(String trangthai) {
        this.trangthai = trangthai;
    }

    public static void setLogin(int log){
        login = log;
    }
}
