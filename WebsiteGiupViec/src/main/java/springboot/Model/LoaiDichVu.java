package springboot.Model;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name="loaidv")
@EntityListeners(AuditingEntityListener.class)
public class LoaiDichVu {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idloaidv;
	private String tenloai;
	private String gioithieu;
	private String camket;
	private String kynang;
	private String anh;
	private float chantren;

	public LoaiDichVu(){
		
	}

	public LoaiDichVu(int idloaidv, String tenloai, String gioithieu, String camket, String kynang, String anh, float chantren) {
		this.idloaidv = idloaidv;
		this.tenloai = tenloai;
		this.gioithieu = gioithieu;
		this.camket = camket;
		this.kynang = kynang;
		this.anh = anh;
		this.chantren = chantren;
	}

	public int getIdloaidv() {
		return idloaidv;
	}

	public void setIdloaidv(int idloaidv) {
		this.idloaidv = idloaidv;
	}

	public String getTenloai() {
		return tenloai;
	}

	public void setTenloai(String tenloai) {
		this.tenloai = tenloai;
	}

	public String getGioithieu() {
		return gioithieu;
	}

	public void setGioithieu(String gioithieu) {
		this.gioithieu = gioithieu;
	}

	public String getCamket() {
		return camket;
	}

	public void setCamket(String camket) {
		this.camket = camket;
	}

	public String getKynang() {
		return kynang;
	}

	public void setKynang(String kynang) {
		this.kynang = kynang;
	}

	public String getAnh() {
		return anh;
	}

	public void setAnh(String anh) {
		this.anh = anh;
	}

	public float getChantren() {
		return chantren;
	}

	public void setChantren(float chantren) {
		this.chantren = chantren;
	}
}
