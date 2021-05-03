import React, {Component} from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";
// import CurrencyFormat from 'react-currency-format';

class themnhanvien extends Component{

	emptyItem = {
		idnv: '',
		idkh: '',
		ngay: '',
		gio: '',
		diachihen: '',
		hopdong:'',
	};

	emptyYeucau = {
		hoten: '',
		sdt: '',
		diachi: '',
		ngaylam: '',
		congviec: '',
		trangthai: ''
	}

	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem,
			yeuCau:this.emptyYeucau,
			nhanViens:[],
			dichVus:[],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount() {
		const [idYeucau, idLichhen] = this.props.match.params.id.split('_');
		if (idLichhen === 'new') {
			const yc = await (await fetch(`/gvnhanh/yeucau/${idYeucau}`)).json();
			const nv = await (await fetch(`/gvnhanh/nhanvien`)).json();
			this.setState({
				yeuCau: yc
			})
		}
		else{
			const lh = await (await fetch(`/gvnhanh/lichhen/${this.props.match.params.id}`)).json();
			//console.log(lh.idyeucau);

			const yc = await (await fetch(`/gvnhanh/yeucau/${lh.idkh}`)).json();
			//console.log(yc);
			this.setState({
				item: lh,
				yeuCau:yc
			});
		}
		const nv = await (await fetch(`/gvnhanh/nhanvien`)).json();
		const dv = await (await fetch(`/gvnhanh/bangphidv`)).json();
		this.setState({
			nhanViens:nv,
			dichVus:dv,
		})
		console.log("item", this.state)
	}

	handleChange(event) {
		let nv=null;
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let item = {...this.state.item};
		item[name] = value;
		this.setState({item});

		const [idYeucau, idLichhen] = this.props.match.params.id.split('_');


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

		//console.log("namedMonth", ng);


		this.setState({item}, async () => {
			const gio = this.state.item["gio"];
			
			console.log(this.state.item["ngay"])
			if(this.state.item["ngay"] && this.state.item["ngay"]<=ng){
				alert("Không được chọn ngày đã qua!");
				this.setState({
					item:{
						gio: gio,
						diachi: this.state.item["diachi"]
					}
				})
			}
		});

		this.setState({item}, async () => {
			if (this.state.item["ngay"] && this.state.item["gio"] &&idLichhen==='new') {
				nv = await (await fetch(`/gvnhanh/nhanvien/${item["gio"]}/${item["ngay"]}`)).json();
				console.log("nv",nv)
				this.setState({
					nhanViens:nv
				})
			}
		});
	}

	async handleSubmit(event) {
		event.preventDefault();

		const {item} = this.state;
		const {yeuCau} = this.state;
		const {nhanViens} = this.state;
		const [idYeucau, idLichhen] = this.props.match.params.id.split('_');

		
		if(idLichhen==='new'){
			if(this.state.item.idnv===""){
				this.state.item.idnv=this.state.nhanViens[0].idnv;
			}
			this.state.yeuCau.trangthai='Đã duyệt';
			this.state.item.hopdong=0;
			this.state.item.idkh=idYeucau;

			console.log("yc", this.state.yeuCau)

			await fetch('/gvnhanh/lichhen', {
				
				method: (idLichhen!=="new") ? 'PUT' : 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(item),
			});

			await fetch(`/gvnhanh/yeucau/${idYeucau}`,{
				method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(yeuCau),
			});
		}
		else{
			console.log("put", item)
			await fetch(`/gvnhanh/lichhen/${this.props.match.params.id}`, {
				
				method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(item),
			});
		}
		
		console.log("lh", item);

		this.props.history.push('/lichhen');
		
	}

	handleChangePhone(e){
	    if(e.target.value.match("^[a-zA-Z ]*$")!=null) {
	      this.setState({item: e.target.value});
	    }
	  }
	render(){

		const {item} = this.state;
		const {yeuCau} = this.state;
		const {dichVus} = this.state;
		this.state.item.idyc = yeuCau.idyc;
		this.state.item.idlh = yeuCau.idyc;
		const [idYeucau, idLichhen] = this.props.match.params.id.split('_');
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">{idLichhen ? 'Thêm lịch hẹn' : 'Cập nhật lịch hẹn'}</h1>;

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

				                  <input type="hidden" name="idyeucau" id="idyeucau" value={item.idyeucau}
									onChange={this.handleChange} autoComplete="address-level1"/>
				                  
				                  
				                 <div class="row">
				                    <div class="col">
				                    	<div className="form-group">
						                    <label for="exampleInputEmail1">Họ tên khách hàng</label>
						                    <input type="text" className="form-control col-md-10" name="hoten" id="hoten" value={yeuCau.hoten ||''}
						                    onChange={this.handleChange} placeholder="" disabled/>
						                </div>

				                    	<div className="form-group">
						                    <label for="exampleInputPassword1">Số điện thoại</label>
						               		<input type="text" className="form-control col-md-10" name="sdt" id="sdt" value={yeuCau.sdt ||''}
											onChange={this.handleChange} pattern="[0-9]{10}" placeholder="" title="Hãy nhập đúng 10 chữ số điện thoại" disabled/>
						                </div>

						                <div className="form-group">
						                    <label for="exampleInputPassword1">Địa chỉ làm việc</label>
						               		<input type="text" className="form-control col-md-10" name="diachi" id="diachi" value={yeuCau.diachi ||''}
											onChange={this.handleChange} disabled/>
						               </div>

						               <div className="form-group">
						                    <label for="exampleInputPassword1">Ngày làm</label>
						               		<input type="text" className="form-control col-md-10" name="ngaylam" id="ngaylam" value={yeuCau.ngaylam ||''}
											onChange={this.handleChange} disabled/>
						               </div>   

						               <div className="form-group">
						                    <label for="exampleInputPassword1">Chi tiết công việc</label>
						               		<input type="text" className="form-control col-md-10" name="congviec" id="congviec" value={yeuCau.congviec ||''}
											onChange={this.handleChange} disabled/>
						               </div>
				                    </div>
				                    <div class="col">
				                    	<div className="form-group">
						                    <label for="exampleInputPassword1">Dịch vụ</label>
						               		<div type="text" className="form-control col-md-8">
							               		{dichVus.map((dv,index)=>{
							               			if(dv.iddv===yeuCau.iddv)
							               				return dv.tendv
							               		})} 
							               	</div>
						               </div>

				                    	<div className="form-group">
						                    <label for="exampleInputPassword1">Giờ hẹn</label>
						               		<input type="time" className="form-control col-md-8" name="gio" id="gio" value={item.gio ||''}
											onChange={this.handleChange} />
						               </div>

						               <div className="form-group">
						                    <label for="exampleInputPassword1">Ngày hẹn</label>
						               		<input type="date" className="form-control col-md-8" name="ngay" id="ngay" value={item.ngay ||''}
											onChange={this.handleChange} />
						               </div>

						               <div className="form-group">
						                    <label for="exampleInputPassword1">Nhân viên</label>
						               		<select type="text" className="form-control col-md-8" name="idnv" id="idnv"
											onChange={this.handleChange}>
												{this.state.nhanViens.map((item, index) => (
													<option value={item.idnv}>{item.hoten}</option>
												))}
											</select>
						               </div>

						               <div className="form-group">
						                    <label for="exampleInputPassword1">Địa chỉ hẹn</label>
						               		<input type="text" className="form-control" name="diachihen" id="diachihen" value={item.diachihen ||''}
											onChange={this.handleChange} />
						               </div>
				                    </div>
				                  </div>

				                  

					               			               
				                </div>
				               

				                <div className="card-footer">
				                  <button type="submit" className="btn btn-primary">Save</button>
				                  {idLichhen==='new'? <Link to="/yeucau"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>
				                  : <Link to="/lichhen"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>}
				                </div>
				              </form>
				            </div>
					</div>
				</div>
			
			</div>
		);
	}
}
export default withRouter(themnhanvien);
