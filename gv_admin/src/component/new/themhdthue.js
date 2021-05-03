import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Link,
  withRouter
} from "react-router-dom"; 
import CurrencyInput from 'react-currency-input-field';

class themhdthue extends Component{

	emptyHdthue = {
		idkh: '',
		idnguoigv: '',
		idnv: '',
		ngaythue: '',
		trangthai: '',
		thanhtoan:''
	};
	emptyPhieuthu = {
		idhdthue:'',
		iddv: '',
		dongia:'',
		ngaybatdau:'',
		ngayketthuc:'',
		giolamviec:'',
		gioketthuc:'',
		diachilam:'',
		tongtien: '',
		tienthu: ''
	};
	emptyKhachhang = {
		hoten: '',
		sdt: '',
		diachi: '',
		trangthai: ''
	};

	constructor(props) {
		super(props);
		this.state = {
			hdthue: this.emptyHdthue,
			phieuthu: this.emptyPhieuthu,
			khachhang: this.emptyKhachhang,
		 	DVs:[],
		 	nhanViens:[],
		 	nguoiGVs:[],
		 	khs:[],
		 	dongia:[],
		 	tienthu: '',
		 	gio: false,
		 	check: '',
		 	click: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onCheck = this.onCheck.bind(this);
		this.tinhKhoangCach = this.tinhKhoangCach.bind(this);
		this.calcDist = this.calcDist.bind(this);
		this.currencyFormat = this.currencyFormat.bind(this);
		this.sortByLuongAsc = this.sortByLuongAsc.bind(this);
		this.sortByKhoangCachAsc = this.sortByKhoangCachAsc.bind(this);
		this.sortByKinhNghiemAsc = this.sortByKinhNghiemAsc.bind(this);
	}

	async componentDidMount() {
		const [idLichhen, idThemhd] = this.props.match.params.id.split('_');

		const dv = await (await fetch(`/gvnhanh/bangphidv`)).json();
		this.setState({
				DVs: dv
			})

		const nv = await (await fetch(`/gvnhanh/nhanvien`)).json();
		this.setState({
				nhanViens: nv
			})

		const ngv = await (await fetch(`/gvnhanh/nguoigv`)).json();
		this.setState({
				nguoiGVs: ngv
			})

		//const ls = await (await fetch(`/gvnhanh/hopdongdk/ptluong/${ngv[0]['idnguoigv']}`)).json();

		const kh = await (await fetch(`/gvnhanh/yeucau/${idLichhen}`)).json();
		this.setState({
				khs: kh,
				khachhang:{
					hoten: kh.hoten,
					sdt: kh.sdt,
					diachi: kh.diachi,
					trangthai: 1
				}
			})

		if (idThemhd !== 'new') {
			const hd = await (await fetch(`/gvnhanh/hdthue/${idLichhen}`)).json();
			this.setState({
				hdthue: hd,
				check:hd["thanhtoan"]
			})

			const pt = await (await fetch(`/gvnhanh/phieuthudv/${idLichhen}`)).json();
			this.setState({
				phieuthu: pt,
			})

			const dg = await (await fetch(`/gvnhanh/bangphidv/${pt.iddv}`)).json();
			this.setState({
				dongia: dg
			})

			//console.log("hd", this.state)
		}
		else{
			const dg = await (await fetch(`/gvnhanh/bangphidv/${kh.iddv}`)).json();
			

			const ngv = await (await fetch(`/gvnhanh/nguoigv/timngv/${dg.idloaidv}/${kh["ngaylam"]}/${kh["ngayketthuc"]}`)).json();
			this.setState({
				nguoiGVs: ngv
			})

			if(ngv.length===0){
				confirmAlert({
		          title: 'Thông báo',
		          message: 'Hiện không có người giúp việc nào phù hợp. Vui lòng quay lại sau!',
		          buttons: [
		            {
		              label: 'OK',
		              onClick: ()=> this.props.history.push('/hdlaodong')
		            }
		          ],
		           childrenElement: () => null,
		            closeOnClickOutside: true,
		            closeOnEscape: true,
		            willUnmount: () => null,
		            onClickOutside: () => null,
		            onKeypressEscape: () => null
		        });
			}

			this.setState({
				dongia: dg,
				phieuthu:{
					idhdthue: idLichhen,
					iddv: kh.iddv,
					diachilam: kh.diachi,
					ngaybatdau:kh.ngaylam,
					ngayketthuc:kh.ngayketthuc,
					giolamviec:'',
					gioketthuc:'',
					diachi: kh.diachi,
					dongia: ngv[0].luong,
					tongtien: ngv[0].luong*kh.thoigian,
					thoigian: kh.thoigian,
					tienthu: dg.phidv,
				},
				hdthue:{
					idhdthue:idLichhen,
					idkh: '',
					idnguoigv: ngv[0].idnguoigv,
					idnv: '',
					ngaythue: '',
					trangthai: ''
				}
			})

			this.tinhKhoangCach();
		}

		// if (idThemhd === 'new'){
		// 	const dg = await (await fetch(`/gvnhanh/bangphidv/${dv[0].iddv}`)).json();
		// 	this.setState({
		// 		dongia: dg
		// 	})
		// }
	}

	tinhKhoangCach(){
		let {khs, nguoiGVs} = this.state;
		// nguoiGVs.map((index, ngv)=>{
		// 	ngv.khoangcach = this.calcDist(khs.lat, khs.lng, ngv.lat, ngv.lng)
		// })
		let kc = 0;
		for(let i=0; i<nguoiGVs.length; i++){
			kc = this.calcDist(khs.lat, khs.lng, nguoiGVs[i].lat, nguoiGVs[i].lng);
			nguoiGVs = [...this.state.nguoiGVs];
			let ngv = {...nguoiGVs[i]};
			ngv.khoangcach =  parseFloat(kc).toFixed(1);
			nguoiGVs[i] = ngv;
			this.setState({nguoiGVs})
			//this.state.nguoiGVs[i].khoangcach = parseFloat(kc).toFixed(1);
			//console.log("kc", nguoiGVs[i].kc, kc)
		}
		//console.log("load", nguoiGVs);
	}

	calcDist(lat1,lng1,lat2,lng2){
	    var R = 6371; 
	    var dLat = (lat2 - lat1) * Math.PI / 180;  
	    var dLon = (lng2 - lng1) * Math.PI / 180;
	    var a = 
	        0.5 - Math.cos(dLat)/2 + 
	        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
	        (1 - Math.cos(dLon))/2;
	    //alert(R * 2 * Math.asin(Math.sqrt(a)));
	    return R * 2 * Math.asin(Math.sqrt(a));
	}

	async handleChange(event) {
		let ngv = null;
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let hdthue = {...this.state.hdthue};
		let phieuthu = {...this.state.phieuthu};
		hdthue[name] = value;
		phieuthu[name] = value;
		this.setState({hdthue});
		this.setState({phieuthu}); 
		
		//Khai báo biến phần trăm lương
		let ls = null;

		//Lấy đơn giá theo dịch vụ
		const dg = await (await fetch(`/gvnhanh/bangphidv/${phieuthu["iddv"]}`)).json();
		this.setState({
				dongia: dg,
			})	

		ls = await (await fetch(`/gvnhanh/nguoigv/${hdthue['idnguoigv']}`)).json();
		//console.log("hdthue", this.state.hdthue.idnguoigv, ls)

		//Tạo ngày
		var months = ["01", "02", "03", "04", "05", "06", "07",
         "08", "09", "10", "11", "12"];

		var d = new Date();

		var namedMonth = months[d.getMonth()];
		let ng;
		if(d.getDate()<10){
			ng = `${d.getFullYear()}-${namedMonth}-0${d.getDate()}`;
		}
		else{
			ng = `${d.getFullYear()}-${namedMonth}-${d.getDate()}`;
		}

		//Gán đơn giá cho phiếu thu
		const [idLichhen, idThemhd] = this.props.match.params.id.split('_');
		if(idThemhd === 'new'){
			this.state.phieuthu.dongia = dg.gia;
		}

		//Sự kiện xử lý khi tạo mới
		// if(idThemhd === 'new'){

			//Kiểm tra không cho chọn ngày đã qua
			if(this.state.phieuthu["ngaybatdau"] && this.state.phieuthu["ngaybatdau"]<ng){
					alert("Không được chọn ngày đã qua!");
					this.setState({
						phieuthu:{
							ngayketthuc: this.state.phieuthu["ngayketthuc"],
							ngaybatdau: ng,
							iddv: this.state.phieuthu["iddv"],
							diachilam: this.state.phieuthu["diachilam"],
							dongia: this.state.phieuthu["dongia"],
							thoigian: this.state.phieuthu["thoigian"]
						}
					})
				}

			//Tìm người giúp việc phù hợp với thời gian
			if (this.state.phieuthu["iddv"] && this.state.phieuthu["ngaybatdau"] && this.state.phieuthu["ngayketthuc"]) {
				ngv = await (await fetch(`/gvnhanh/nguoigv/timngv/${dg.idloaidv}/${this.state.phieuthu["ngaybatdau"]}/${this.state.phieuthu["ngayketthuc"]}`)).json();

				if(ngv.length===0){
					confirmAlert({
			          title: 'Thông báo',
			          message: 'Không tìm thấy người giúp việc phù hợp! Vui lòng chọn thời gian khác!',
			          buttons: [
			            {
			              label: 'Đồng ý',
			              onClick: this.setState({
										phieuthu:{
											ngayketthuc: '',
											ngaybatdau: '',
											iddv: this.state.phieuthu["iddv"],
											diachilam: this.state.phieuthu["diachilam"],
											dongia: this.state.phieuthu["dongia"],
											giolamviec: this.state.phieuthu["giolamviec"],
											gioketthuc: this.state.phieuthu["gioketthuc"]
										}
									})
			            },
			            
			          ],
			           childrenElement: () => null,
			            closeOnClickOutside: true,
			            closeOnEscape: true,
			            willUnmount: () => null,
			            onClickOutside: () => null,
			            onKeypressEscape: () => null
			        });
				}
				else{
					this.setState({
						nguoiGVs:ngv
					})

					// ls = await (await fetch(`/gvnhanh/hopdongdk/ptluong/${ngv[0]['idnguoigv']}`)).json();
					// this.setState({
					// 	tienthu: ls,
						
					// })
					// this.state.phieuthu.phantramluong = ls;
					// console.log("luong", this.state.phieuthu.phantramluong)
				}
			}

			//Xử lý sự kiện nếu đặt dịch vụ theo giờ
			if(dg.donvitinh === 'Giờ'){
				this.setState({
					phieuthu:{
						ngayketthuc: this.state.phieuthu["ngaybatdau"],
						ngaybatdau: this.state.phieuthu["ngaybatdau"],
						iddv: this.state.phieuthu["iddv"],
						diachilam: this.state.phieuthu["diachilam"],
						dongia: this.state.phieuthu["dongia"],
						giolamviec: this.state.phieuthu["giolamviec"],
						gioketthuc: this.state.phieuthu["gioketthuc"],

					}
				})

				if(this.state.phieuthu["giolamviec"] && this.state.phieuthu["gioketthuc"]){
					if(this.state.phieuthu["giolamviec"] >= this.state.phieuthu["gioketthuc"]){
						alert("Giờ kết thúc không được nhỏ hơn giờ làm việc");
						this.setState({
							phieuthu:{
								ngayketthuc: this.state.phieuthu["ngaybatdau"],
								ngaybatdau: this.state.phieuthu["ngaybatdau"],
								iddv: this.state.phieuthu["iddv"],
								diachilam: this.state.phieuthu["diachilam"],
								dongia: this.state.phieuthu["dongia"],
								giolamviec: this.state.phieuthu["giolamviec"],
								gioketthuc: ''
							}
						})
					}

					const d1  = new Date('2020-12-12 ' + this.state.phieuthu["giolamviec"]);
					const time1 = d1.getTime();
					const d2  = new Date('2020-12-12 ' + this.state.phieuthu["gioketthuc"]);
					const time2 = d2.getTime();
					const minus = (d2-d1)/3600000;
					//console.log("gio", minus)

					this.setState({
						phieuthu:{
							ngayketthuc: this.state.phieuthu["ngayketthuc"],
							ngaybatdau: this.state.phieuthu["ngaybatdau"],
							iddv: this.state.phieuthu["iddv"],
							diachilam: this.state.phieuthu["diachilam"],
							dongia: this.state.phieuthu["dongia"],
							giolamviec: this.state.phieuthu["giolamviec"],
							gioketthuc: this.state.phieuthu["gioketthuc"],
							tongtien: minus * dg.gia,
							phantramluong: ls,
							tienthu: (100-ls)*minus*dg.gia/100
						}		
					})

					//console.log("tien gio", this.state.phieuthu['phantramluong'])
					
				}
				
			}

			//Xử lý sự kiện nếu đặt dịch vụ theo ngày
			else{
				if (this.state.phieuthu["ngayketthuc"]!=='' && this.state.phieuthu["ngaybatdau"]!==''){
					if(this.state.phieuthu["ngayketthuc"] < this.state.phieuthu["ngaybatdau"]){
						//let start = hdthue["ngaybatdau"];
						alert("Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu");
						this.setState({
							phieuthu:{
								ngayketthuc: '',
								ngaybatdau: this.state.phieuthu["ngaybatdau"],
								iddv: this.state.phieuthu["iddv"],
								diachilam: this.state.phieuthu["diachilam"],
								dongia: this.state.phieuthu["dongia"],
								giolamviec: this.state.phieuthu["giolamviec"],
								gioketthuc: this.state.phieuthu["gioketthuc"],
								thoigian: this.state.phieuthu["thoigian"]
							}
							
						})
					}

					// let ds = Date.parse(this.state.phieuthu['ngaybatdau']);
					// let de = Date.parse(this.state.phieuthu['ngayketthuc'])
					// let diff = de-ds;
					// let dd = diff/ (1000 * 60 * 60 * 24)

					const date1 = new Date(this.state.phieuthu['ngaybatdau']);
					const date2 = new Date(this.state.phieuthu['ngayketthuc']);
					const diffTime = Math.abs(date2 - date1);
					const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1

					// console.log("ngay", diffDays);

					this.setState({
							phieuthu:{
								ngayketthuc: this.state.phieuthu["ngayketthuc"],
								ngaybatdau: this.state.phieuthu["ngaybatdau"],
								iddv: this.state.phieuthu["iddv"],
								diachilam: this.state.phieuthu["diachilam"],
								dongia: ls.luong,
								giolamviec: this.state.phieuthu["giolamviec"],
								gioketthuc: this.state.phieuthu["gioketthuc"],
								thoigian: this.state.phieuthu["thoigian"],
								tongtien: ls.luong*this.state.phieuthu["thoigian"],
								tienthu: dg.phidv
							}
							
						})
					this.tinhKhoangCach();
					//this.state.phieuthu['tongtien'] = diffDays * dg.gia;
					//console.log("tien", this.state.phieuthu)
				}
			}
	
		// }

	}

	async handleSubmit(event) {
		event.preventDefault();
		const {hdthue} = this.state;
		const {phieuthu} = this.state;
		const {khachhang} = this.state;
		const {khs} = this.state;
		const {check} = this.state;
		const [idLichhen, idThemhd] = this.props.match.params.id.split('_');
		
		if(this.state.hdthue.idnv===''){
			this.state.hdthue.idnv=this.state.nhanViens[0].idnv;
		}
		if(this.state.hdthue.idnguoigv===''){
			this.state.hdthue.idnguoigv=this.state.nguoiGVs[0].idnguoigv;
		}
		this.state.hdthue.idkh = khs.idyc;
		this.state.hdthue.trangthai = "Đã đặt";
		this.state.phieuthu.idhdthue = idLichhen;

		if(idThemhd==='new'){
			this.state.hdthue.thanhtoan=false;
		}
		else{
			this.state.hdthue.thanhtoan=check;
		}
		

		// console.log("it",hdthue)
		// console.log("pt", phieuthu)

		if(idThemhd==='new'){
			let today = new Date();
			let year = today.getFullYear();
			let month = today.getMonth()+1;
			let date = today.getDate();
			if (month < 10) 
		        month = '0' + month;
		    if (date < 10) 
		        date = '0' + date;
			this.state.hdthue.ngaythue = year+'-'+month+'-'+date;
			await fetch('/gvnhanh/hdthue', {
				method:'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(hdthue),
			});

			await fetch('/gvnhanh/phieuthudv', {
				method:'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(phieuthu),
			});

			await fetch('/gvnhanh/khachhang', {
				method:'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(khachhang),
			});

			await fetch(`/gvnhanh/yeucau/trangthai/${idLichhen}`, {
				method:'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			});
		}
		else{
			await fetch(`/gvnhanh/hdthue/${idLichhen}`, {
				method:'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(hdthue),
			});

			await fetch(`/gvnhanh/phieuthudv/${idLichhen}`, {
				method:'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(phieuthu),
			});	
		}

		console.log("hd", hdthue);
		console.log("pt", phieuthu);
		console.log("kh", khachhang);
		// console.log("check", check)

		this.props.history.push('/hdthue');
	}

	onCheck(event){
		const target = event.target;
		const value = target.value;
		if(target.checked){
			this.setState({
				check: true
			})
		}
		else{
			this.setState({
				check: false
			})
		}
	}

	clickTb(id){
		let idclick = id;
		this.setState({
			click: id
		})
		//console.log("click", this.state.click)
	}

	currencyFormat(num){
		   return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +' VNĐ'
		}

	sortByLuongAsc() {
    	let ngv = this.state.nguoiGVs.sort((a,b) => (a.luong - b.luong));
    	this.setState({
    		nguoiGVs: ngv,
    	})
    }

    sortByKhoangCachAsc() {
    	let ngv = this.state.nguoiGVs.sort((a,b) => (a.khoangcach - b.khoangcach));
    	this.setState({
    		nguoiGVs: ngv,
    	})
    }

     sortByKinhNghiemAsc() {
    	let ngv = this.state.nguoiGVs.sort((a,b) => (a.kinhnghiem.localeCompare(b.kinhnghiem)));
    	this.setState({
    		nguoiGVs: ngv,
    	})
    }

   	
	render(){

		const [idLichhen, idThemhd] = this.props.match.params.id.split('_');
		const {hdthue} = this.state;
		const {phieuthu} = this.state;
		const {khs} = this.state;
		const {dongia} = this.state;
		const {check, click} = this.state;
		const {nguoiGVs} = this.state;
		//console.log("ngv", nguoiGVs)

		//const {loaiDVs} = this.state;
		//console.log("dv",loaiDVs);
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">{idThemhd ? 'Thêm hợp đồng' : 'Thông tin hợp đồng'}</h1>;

		const table = <table className="table table-bordered table-hover table-inverse table-striped">
							<thead className="">
								<tr className="h-100">
									<th className="text-center">STT</th>
									<th className="text-center">Người giúp việc</th>
									<th className="text-center">Mức lương {' '}
										<i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByLuongAsc}/>
									</th>
									<th className="text-center">Khoảng cách {' '}
										<i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByKhoangCachAsc}/>
									</th>
                                    <th className="text-center">Kinh nghiệm {' '}
                                    	<i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByKinhNghiemAsc}/>
                                    </th>
								</tr>
							</thead>
							<tbody>
								{nguoiGVs.map((ngv, index)=>{
									return <tr key={ngv.idnguoigv}>
										<td className="text-center">{index+1}</td>
										<td className="text-center">{ngv.hoten}</td>
										<td className="text-center">{this.currencyFormat(ngv.luong)} 
											
										</td>
										<td className="text-center">{ngv.khoangcach} km</td>
										<td className="text-center">{ngv.kinhnghiem}</td>									
									</tr>
								})}
							</tbody>
						</table>
		return(
			<div className="content-wrapper">

				<div className="content-header">
		          <div className="container-fluid">
		            <div className="row mb-2">
		              <div className="col-sm-6">
		                <h1 className="m-0">{title}</h1>
		              </div>
		              
		            </div>

		          </div>
		        </div>

				{/* Page Heading */}
				<div className="content">
					<div className="container-fluid col-md-12">
						 <div className="card card-primary">
				           {/* <div className="card-header">
				                <h3 className="card-title">Thêm loại dịch vụ</h3>
				            </div>*/}
				             
				             <form onSubmit={this.handleSubmit}>				             
				                <div className="card-body">
				                	<div className="row">
				                		<div className="col">
				                			<div className="form-group">
							                    <label for="exampleInputEmail1">Tên khách hàng</label>
							                    <input type="text" className="form-control col-md-12" name="hoten" id="hoten" value={khs.hoten || ''}
												onChange={this.handleChange} disabled/>
							                </div>

							                <div className="form-group">
							                    <label for="exampleInputEmail1">Tên dịch vụ</label>
							                    <select type="text" className="form-control col-md-12" name="iddv" id="iddv" value={phieuthu.iddv || ''}
												onChange={this.handleChange} disabled>
													{this.state.DVs.map((item, index) => (
														<option value={item.iddv}>{item.tendv}</option>
													))}
												</select>
							                </div>

							                <div className="form-group">
							                    <label for="exampleInputPassword1">Địa chỉ làm việc</label>
							                    <input type="text" className="form-control" name="diachilam" id="diachilam" value={phieuthu.diachilam || ''}
							                    onChange={this.handleChange}/>
							                  </div>
							                  
							                <div class="form-row">
							                  	<div className="col">
								                	<div className="form-group ">
									                    <label for="exampleInputPassword1">Ngày bắt đầu</label>
									                    <input type="date" className="form-control col-md-10" name="ngaybatdau" id="ngaybatdau" value={phieuthu.ngaybatdau || ''}
														onChange={this.handleChange}/>
									                 </div>
									            </div>
									            {dongia.donvitinh=== 'Giờ'?
									            	<div className="col">
										                <div className="form-group ">
										                    <label for="exampleInputPassword1">Ngày kết thúc</label>
										                    <input type="date" className="form-control col-md-10 " name="ngayketthuc" id="ngayketthu" value={phieuthu.ngayketthuc || ''}
										                    onChange={this.handleChange} disabled/>
										                </div>
										            </div>:
										            <div className="col">
										                {/*<div className="form-group ">
										                    <label for="exampleInputPassword1">Ngày kết thúc</label>
										                    <input type="date" className="form-control col-md-10 " name="ngayketthuc" id="ngayketthu" value={phieuthu.ngayketthuc || ''}
										                    onChange={this.handleChange} />
										                </div>*/}
										                <div className="form-group ">
										                    <label for="exampleInputPassword1">Thời gian làm</label>
										                    <div className="input-group">
											        			 <input type="number" className="form-control col-md-10 text-center" name="thoigian" id="thoigian" value={phieuthu.thoigian || ''}
										                    	onChange={this.handleChange} />
																<div className="input-group-append">
																    <span className="input-group-text">{dongia.donvitinh}</span>
																</div>
															</div>
										                   
										                </div>
										            </div>
									            }
									           
							                </div>

							                {dongia.donvitinh==='Giờ' ? 
							                	<div class="form-row">
								                  	<div className="col">
									                	<div className="form-group ">
										                    <label for="exampleInputPassword1">Giờ làm việc</label>
										                    <input type="time" className="form-control col-md-10" name="giolamviec" id="giolamviec" value={phieuthu.giolamviec || ''}
															onChange={this.handleChange}/>
										                 </div>
										            </div>
										            <div className="col">
										                 <div className="form-group ">
										                    <label for="exampleInputPassword1">Giờ kết thúc</label>
										                    <input type="time" className="form-control col-md-10 " name="gioketthuc" id="gioketthuc" value={phieuthu.gioketthuc || ''}
										                    onChange={this.handleChange} />
										                  </div>
										            </div>
								                </div> : null
							            	}
						                  						                      
					                        <div className="form-group">
							                    <label for="exampleInputPassword1">Người giúp việc</label>
							                    <select className="form-control col-lg-12" name="idnguoigv" id="idnguoigv" value={hdthue.idnguoigv || ''}
												onChange={this.handleChange}>
													{this.state.nguoiGVs.map((item, index) => (
														<option value={item.idnguoigv}>{item.hoten}</option>
													))}
												</select>
							                </div>				                      
						                   			              							                  							                  									                 							                						                 
				                		</div>

				                		<div className="col">

				                			<div className="form-group">
							                    <label for="exampleInputPassword1">Nhân viên đại diện</label>
							                    <select className="form-control col-lg-12" name="idnv" id="idnv" value={hdthue.idnv || ''}
												onChange={this.handleChange}>
													{this.state.nhanViens.map((item, index) => (
														<option value={item.idnv}>{item.hoten}</option>
													))}
												</select>
							                 </div>

							                <div className="form-group">
							                    <label for="exampleInputPassword1">Đơn giá</label>
							                    <div className="input-group">
								                    {/*<input type="number" className="form-control" name="dongia" id="dongia" value={phieuthu.dongia || ''}
														onChange={this.handleChange} disabled/>*/}
													<CurrencyInput className="form-control" name = "dongia" id="dongia" value = {phieuthu.dongia || ''}
													decimalSeparator="," groupSeparator="." disabled/>
													<div className="input-group-append">
													    <span className="input-group-text">VNĐ /</span>
													    <span className="input-group-text">{dongia.donvitinh}</span>
													</div>
												</div>
							                 </div>

							                 <div className="form-group">
							                    <label for="exampleInputPassword1">Tổng giá</label>
							                    <div className="input-group">
								                    {/*<input type="number" className="form-control" name="tongtien" id="tongtien" value={phieuthu.tongtien || ''}
														onChange={this.handleChange} disabled/>*/}
													<CurrencyInput className="form-control" name = "tongtien" id="tongtien" value = {phieuthu.tongtien || ''}
													 decimalSeparator="," groupSeparator="." disabled/>
													<div className="input-group-append">
													    <span className="input-group-text">VNĐ</span>
													</div>
												</div>
							                 </div>

							                 <div className="form-group">
							                    <label for="exampleInputPassword1">Phí giới thiệu</label>
							                    <div className="input-group">
								                    {/*<input type="number" className="form-control" name="tienthu" id="tienthu" value={phieuthu.tienthu || ''}
														onChange={this.handleChange} disabled/>*/}
													<CurrencyInput className="form-control" name = "tienthu" id="tienthu" value = {phieuthu.tienthu || ''}
													 decimalSeparator="," groupSeparator="." disabled/>
													<div className="input-group-append">
													    <span className="input-group-text">VNĐ</span>
													</div>
												</div>
							                 </div>	
							                 <div className="form-group">  
												  <label for="exampleInputPassword1">Thanh toán</label>
												  <div className="input-group-prepend">
												    <div className="input-group-text">
												    {check===true?<input type="checkbox" className="" name="check" id="check" aria-label="Checkbox for following text input"
												      onChange={this.onCheck} checked/>
												      :<input type="checkbox" className="" name="check" id="check" aria-label="Checkbox for following text input"
												      onChange={this.onCheck}/>
												    }
												      
												    </div>
												  </div>
											 </div>
							                </div>
				                		</div>
				                		{idThemhd?table:null}
				                	</div>

				                <div className="card-footer d-flex justify-content-center">
				                  <button type="submit" className="btn btn-primary ">Save</button>
				                  {idThemhd==='new'?<Link to="/yeucau"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>
				              		: <Link to="/hdthue"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>}
				              	  {/*<Link to="/hdthue"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>*/}
				                </div>
				             
				              </form>
				            </div>
					</div>
				</div>
				
			</div>
		);
	}
}
export default withRouter(themhdthue);
