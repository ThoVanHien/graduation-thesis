import React, {Component} from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";
// import CurrencyFormat from 'react-currency-format';

class themnguoigv extends Component{

	emptyItem = {
		hoten: '',
		gioitinh: '',
		ngaysinh: '',
		sdt: '',
		cmnd: '',
		kinhnghiem: '',
		quequan:'',
		idloaidv:'',
		del: '', 
		hopdong: '',
		hinhanh: '',
	};

	emptyHdong = {
		idnguoigv:'',
		idnv:'',
		suckhoe:'',
		ngayky:'',
		ngayhethan:'',
		phantramluong:'',
		kinhnghiem:'',
	}

	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem,
			dichVus:[],
			dvdangky:'',
			upload: '',
			picture: '',
			nhanViens:[],
			hopdong: this.emptyHdong,
			nextId: '',
			image: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleChangePhone = this.handleChangePhone.bind(this);
		// this.getBase64 = this.getBase64.bind(this);
		// this.changeImage = this.changeImage.bind(this);
	}

	async componentDidMount() {
		const [update, them] = this.props.match.params.id.split('_');
		if(update!=='new'){
			if (them !== 'new') {
				const ngv = await (await fetch(`/gvnhanh/nguoigv/${update}`)).json();
				const hd = await (await fetch(`/gvnhanh/hopdongdk/${update}`)).json();
				this.setState({
					item: ngv,
					picture: ngv.hinhanh,
					hopdong: hd
				});

				console.log("state", ngv)
			}
			else{
				const ngv = await (await fetch(`/gvnhanh/nguoigv/${update}`)).json();
				//this.setState({item: ngv});
				this.setState({
					item: ngv
				})
			}
		}
		else{
			const id = await (await fetch('/gvnhanh/nguoigv/next')).json();
			this.setState({
				nextId: id
			})
		}

		const nv = await (await fetch(`/gvnhanh/nhanvien`)).json();
		this.setState({
			nhanViens:nv
		})
		const dv = await (await fetch(`/gvnhanh/loaidv`)).json();
		this.setState({
			dichVus:dv
		})
	}

	async handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let item = {...this.state.item};
		item[name] = value;
		let hopdong = {...this.state.hopdong};
		hopdong[name] =  value;
		this.setState({item});
		this.setState({hopdong});

		const [update, them] = this.props.match.params.id.split('_');

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

		this.setState({hopdong}, async () => {
			
			console.log(this.state.hopdong["ngay"])
			if(them==='new' && this.state.hopdong["ngayky"] && this.state.hopdong["ngayky"]<ng){
				alert("Không được chọn ngày đã qua!");
				this.setState({
					hopdong:{
						idnguoigv: hopdong["idnguoigv"],
						idnv: hopdong["idnv"],
						suckhoe: hopdong["suckhoe"],
						ngayky: '',
						ngayhethan: hopdong["ngayhethan"],
						phantramluong: hopdong["phantramluong"],
						kinhnghiem: hopdong["kinhnghiem"]
					}
				})
			}

			if (this.state.hopdong["ngayky"] && this.state.hopdong["ngayhethan"]){
				if(this.state.hopdong["ngayhethan"] < this.state.hopdong["ngayky"]){
				alert("Ngày hết hạn phải lớn hơn ngày ký");
				this.setState({
					hopdong:{
						idnguoigv: hopdong["idnguoigv"],
						idnv: hopdong["idnv"],
						suckhoe: hopdong["suckhoe"],
						ngayky: hopdong["ngayky"],
						ngayhethan: '',
						phantramluong: hopdong["phantramluong"],
						kinhnghiem: hopdong["kinhnghiem"]
					}			
				})
			}
		}
		});
	}

	async handleSubmit(event) {
		event.preventDefault();
		const [update, them] = this.props.match.params.id.split('_');
		const {item, picture, hopdong, nextId} = this.state;
		
		if(this.state.item.gioitinh===''){
			this.state.item.gioitinh='Nam';	
		}
		this.state.item.del=0;
		this.state.item.hopdong=1;
		this.state.item.ungtuyen=0;
		this.state.item.hinhanh = picture;
		if(this.state.hopdong.idnv===''){
			this.state.hopdong.idnv=this.state.nhanViens[0].idnv;
		}

		if(them==='new' || update==='new'){
			this.state.item.diem = 10
		}

		if(update!=='new'){
			this.state.hopdong.idnguoigv = update;
		
			const formData = new FormData();
			formData.append('hinhanh', item['hinhanh']);
			formData.append('hoten', item['hoten']);
			formData.append('ngaysinh', item['ngaysinh']);
			formData.append('sdt', item['sdt']);
			formData.append('cmnd', item['cmnd']);
			formData.append('luong', item['luong'])
			formData.append('gioitinh', item['gioitinh'])
			fetch(`/gvnhanh/nguoigv/${update}`, {
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

			if(them==="new"){
				this.state.hopdong.idhddk = update;
				await fetch('/gvnhanh/hopdongdk', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(hopdong),
				});
				
			}
			else{
				await fetch(`/gvnhanh/hopdongdk/${update}`, {
					method: 'PUT',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(hopdong),
				});
			}
		}
		else{
			this.state.hopdong.idhddk = nextId;
			this.state.hopdong.idnguoigv = nextId;

			await fetch(`/gvnhanh/nguoigv/`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(item),
			});

			await fetch('/gvnhanh/hopdongdk', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(hopdong),
			});
		}
		
		this.props.history.push('/nguoigv');
		console.log("log", this.state)
	}

	onImageChange = (event) => {
	    if (event.target.files && event.target.files[0]) {
	      let img = event.target.files[0];
	      this.setState({
	      	picture: URL.createObjectURL(img),
	      	image: img
	      })
	    }
    }

	render(){

		const {item, picture, nhanViens, hopdong, dichVus} = this.state;
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">{item.idnguoigv ? 'Cập nhật người giúp việc' : 'Thêm người giúp việc'}</h1>;
		const [update, them] = this.props.match.params.id.split('_');

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
							                    <label for="exampleInputPassword1">Họ tên nhân viên</label>
							                    <select className="form-control" name="idnv" id="idnv" value={hopdong.idnv || ''}
							                    onChange={this.handleChange} >
							                    	{nhanViens.map((nv, index)=>(
							                    		<option value={nv.idnv}>{nv.hoten}</option>
							                    	))}
							                    </select>
							                  </div>
							                  <div className="form-group">
							                    <label for="exampleInputPassword1">Tình trạng sức khỏe</label>
							                    <input type="text" className="form-control" name="suckhoe" id="suckhoe" value={hopdong.suckhoe || ''}
							                    onChange={this.handleChange}/>
							                  </div>

							                  <div className="form-group">
							                    <label for="exampleInputPassword1">Kinh nghiệm</label>
							                    <select type="text" className="form-control" name="kinhnghiem" id="kinhnghiem" value={hopdong.kinhnghiem || ''}
													onChange={this.handleChange}>
														<option value="1 năm">1 năm</option>
														<option value="2 năm">2 năm</option>
														<option value="3 năm">3 năm</option>
														<option value="4 năm">4 năm</option>
														<option value="5 năm">5 năm</option>
														<option value="trên 5 năm">trên 5 năm</option>
												</select>
							                  </div>
							                   
							                 {/* <div class="form-row">
							                      <div class="col">
							                        <div className="form-group">
									                    <label for="exampleInputPassword1">Ngày ký hợp đồng</label>
									                    <input type="date" className="form-control "name="ngayky" id="ngayky" value={hopdong.ngayky || ''}
							                    onChange={this.handleChange}/>
									                </div>
							                      </div>
							                      <div class="col">
								                    <div className="form-group">
									                    <label for="exampleInputPassword1">Ngày hết hạn</label>
									                    <input type="date" className="form-control" name="ngayhethan" id="ngayhethan" value={hopdong.ngayhethan || ''}
							                    onChange={this.handleChange}/>
									                </div>
							                      </div>
							                    </div>	*/}						         
							                  {/*<div className="form-group">
							                    <label for="exampleInputPassword1">Phần trăm lương</label>
							                    <div class="input-group mb-3 col-md-6">
												  <input type="number" min="0" max="100" className="form-control" name="phantramluong" id="phantramluong" value={hopdong.phantramluong || ''}
							                    onChange={this.handleChange}/>
												  <div class="input-group-append">
												    <span class="input-group-text" id="basic-addon2">%</span>
												  </div>
												</div>
							                </div>*/}
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
export default withRouter(themnguoigv);
