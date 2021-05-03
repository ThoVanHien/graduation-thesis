import React, {Component} from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";
import CurrencyInput from 'react-currency-input-field';

class nguoigiupviec extends Component{

	emptyItem = {
		hoten: '',
		gioitinh: '',
		ngaysinh: '',
		sdt: '',
		cmnd: '',
		quequan: '',
		hinhanh: '',
		del: '',
		hopdong: '',
		idloaidv: '',
		diem: '',
		luong: '',
		kinhnghiem: '',
		kynang: '',
		suckhoe: ''
	};

	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem,
			dichVus: [],
			picture: '',
			image: '',
			luong: '',
			maxluong: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.max = this.max.bind(this);
		//this.handleChangePhone = this.handleChangePhone.bind(this);
	}

	async componentDidMount() {
		const [update, them] = this.props.match.params.id.split('_');
		const ngv = await(await fetch(`/gvnhanh/nguoigv/${update}`)).json();
		const dv = await (await fetch(`/gvnhanh/loaidv`)).json();
		this.setState({
			item: ngv,
			dichVus: dv,
			picture: ngv.hinhanh,
			luong: ngv.luong
		})
		console.log("dv", this.state.item)
	}

	async handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let item = {...this.state.item};
		item[name] = value;
		this.setState({item});

	}

	async max(){
		let {item} = this.state;
		const max = await(await fetch(`/gvnhanh/loaidv/${item.idloaidv}`)).json();
		console.log("max", max.chantren)
		if(item['luong']>max.chantren){
			alert("Mức lương quá cao so với công việc! Tối đa "+max.chantren+" VNĐ");
			item = {...this.state.item}
			item['luong'] = max.chantren;
			this.setState({item})
			this.setState({
				luong: max.chantren
			})
		}

		console.log("item", this.state.item)
	}

	async handleSubmit(event) {
		event.preventDefault();
		const [update, them] = this.props.match.params.id.split('_');
		const {item, image} = this.state;
		
		if(this.state.item.gioitinh===''){
			this.state.item.gioitinh='Nam';	
		}
		if(this.state.item.kinhnghiem===''){
			this.state.image.kinhnghiem = '1 năm';
		}
		this.state.item.del=0;
		this.state.item.hopdong=1;
		this.state.item.ungtuyen=0;
		this.state.item.diem = 10;

		if(image===''){
			await fetch(`/gvnhanh/nguoigv/${update}`, {
				method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(item),
			});
		}
		else{
			this.state.item.hinhanh = image;
			const formData = new FormData();
			formData.append('hoten', item['hoten']);
			formData.append('gioitinh', item['gioitinh']);
			formData.append('ngaysinh', item['ngaysinh']);
			formData.append('sdt', item['sdt']);
			formData.append('cmnd', item['cmnd']);
			formData.append('quequan', item['quequan']);
			formData.append('hinhanh', item['hinhanh']);
			formData.append('del', item['del']);
			formData.append('hopdong', item['hopdong']);
			formData.append('ungtuyen', item['ungtuyen']);
			formData.append('idloaidv', item['idloaidv']);
			formData.append('diem', item['diem']);
			formData.append('luong', item['luong']);
			formData.append('kinhnghiem', item['kinhnghiem']);
			formData.append('kynang', item['kynang']);
			formData.append('suckhoe', item['suckhoe']);
			formData.append('lat', item['lat']);
			formData.append('lng', item['lng']);
			fetch(`/gvnhanh/nguoigv/image/${update}`, {
				method: 'PUT',
				body: formData
			})
			.then(response => response.json())
			.then(result => {
				console.log('Success:', result);
			})
			.catch(error => {
				console.error('Error:', error);
			});
		}
		this.props.history.push('/nguoigv');
	}

	onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			this.setState({
				// picture: URL.createObjectURL(img)
				picture: URL.createObjectURL(img),
				image: img
			})
			//console.log("image", this.state.picture)
		}
	};

	numberChange(val) {
		let { luong } = this.state;
		this.setState({
			luong: val
		})
		this.state.item.luong = val;
	}
	
	render(){

		const {item, dichVus, picture, luong} = this.state;
		const [update, them] = this.props.match.params.id.split('_');
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">Cập nhật người giúp việc</h1>;

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
						                    <label for="exampleInputEmail1">Họ tên nhân viên</label>
						                    <input type="text" className="form-control col-md-12" name="hoten" id="hoten" value={item.hoten || ''} 
						                    onChange={this.handleChange} placeholder="" required/>
						                  </div>

						                  <div class="row">
						                    <div class="col">
						                    	<div className="form-group">
								                    <label for="exampleInputPassword1">Giới tính</label>
								                    <select className="form-control col-md-10" name="gioitinh" id="gioitinh" value={item.gioitinh || ''} onChange={this.handleChange}>
								                    	<option>Nam</option>
								                    	<option>Nữ</option>
								                    	<option>Khác</option>
								                    </select>
								                </div>
						                    </div>

						                    <div class="col">
						                    	<div className="form-group">
								                    <label for="exampleInputPassword1">Ngày sinh</label>
				   				                    <input type="date" className="form-control col-md-10" name="ngaysinh" id="ngaysinh" value={item.ngaysinh || ''}
													onChange={this.handleChange} placeholder="" required/>
								                  </div>
						                    </div>
						                  </div>
						                  
						                 <div class="row">
						                    <div class="col">
						                    	<div className="form-group">
								                    <label for="exampleInputPassword1">Số điện thoại</label>
								               		<input type="text" className="form-control col-md-10" name="sdt" id="sdt" value={item.sdt || ''}
													onChange={this.handleChange} pattern="[0-9]{10}" placeholder="" title="Hãy nhập đúng 10 chữ số điện thoại" required/>
								                </div>
						                    </div>
						                    <div class="col">
						                    	<div className="form-group">
								                    <label for="exampleInputPassword1">CMND</label>
								               		<input type="text" className="form-control col-md-10" name="cmnd" id="cmnd" value={item.cmnd || ''}
													onChange={this.handleChange} pattern="[0-9]{9}" placeholder="" title="Hãy nhập đúng 9 chữ số cmnd" required/>
								                </div>
						                    </div>
						                  </div>

						                   <div className="form-group">
						                    <label for="exampleInputEmail1">Địa chỉ</label>
						                    <input type="text" className="form-control col-md-12" name="quequan" id="quaquan" value={item.quequan || ''} 
						                    onChange={this.handleChange} placeholder="" required/>
						                  </div>

						                  	<div className="form-group">
							                    <label for="exampleInputPassword1">Dịch vụ đăng ký</label>
							                    <select className="form-control" name="idloaidv" id="idloaidv" value={item.idloaidv || ''}
							                    	onChange={this.handleChange} >
							                    	{dichVus.map((dv, index)=>(
							                    		<option value={dv.idloaidv}>{dv.tenloai}</option>
							                    	))}
							                    </select>
								                {/*<div type="text" className="form-control">
								               		{dichVus.map((dv,index)=>{
								               			if(dv.idloaidv===item.idloaidv)
								               				return dv.tenloai
								               		})} 
								               	</div>*/}
							               	</div>

						                  <div className="form-group">
							                    <label for="exampleInputPassword1">Hình ảnh</label>
							               		<input type="file" className="form-control-file" id="customFile" onChange={this.onImageChange} accept="image/*"/>
												<div className="previewProfilePic" >
									                <img className="playerProfilePic_home_tile w-25 h-25" src={picture} alt=""/>
									            </div>
							              </div>
							            </div>

							            <div className="col">
				                			 
							                  <div className="form-group">
							                    <label for="exampleInputPassword1">Tình trạng sức khỏe</label>
							                    <input type="text" className="form-control" name="suckhoe" id="suckhoe" value={item.suckhoe || ''}
							                    onChange={this.handleChange} required/>
							                  </div>

							                  <div className="form-group">
							                    <label for="exampleInputPassword1">Kinh nghiệm</label>
							                    <select type="text" className="form-control" name="kinhnghiem" id="kinhnghiem" value={item.kinhnghiem || ''}
													onChange={this.handleChange}>
														<option value="1 năm">1 năm</option>
														<option value="2 năm">2 năm</option>
														<option value="3 năm">3 năm</option>
														<option value="4 năm">4 năm</option>
														<option value="trên 4 năm">trên 4 năm</option>
												</select>
							                  </div>

							                {/*  <div className="form-group">
							                    <label for="exampleInputPassword1">Kỹ năng</label>
							                    <input type="text" className="form-control" name="kynang" id="kynang" value={item.kynang || ''}
							                    onChange={this.handleChange}/>
							                  </div>*/}

							                   	<div className="form-group">
													<label for="exampleInputPassword1">Mức lương yêu cầu</label>
													<div class="input-group mb-3 col-md-8">
														<CurrencyInput className="form-control text-center"
															name="luong" id="luong" value={luong}
															onChange={(value, name) => this.numberChange(value)}
															decimalSeparator=","
															groupSeparator="."
														onBlur={this.max} />
														<div class="input-group-append">
															<span class="input-group-text" id="basic-addon2">VNĐ/Tháng</span>
														</div>
													</div>
												</div>
							                   
						                </div>
							        </div>	                 
				                </div>

				                <div className="card-footer d-flex justify-content-center">
				                  <button type="submit" className="btn btn-primary">Save</button>
				                  {them==='new'? <Link to="/tuyendung"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>
				              	  : <Link to="/nguoigv"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>}
				                </div>
				              </form>
				            </div>
					</div>
				</div>
			
			</div>
		);
	}
}
export default withRouter(nguoigiupviec);
