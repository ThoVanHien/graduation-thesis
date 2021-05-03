import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Link,
  withRouter
} from "react-router-dom";

const utilizeFocus = () => {
	const ref = React.createRef()
	const setFocus = () => {ref.current &&  ref.current.focus()}

	return {setFocus, ref} 
}

class themtaikhoan extends Component{

	emptyItem = {
		sdt: '',
		pass: '',
		idnv: '',
		quyen: '',
		trangthai: '',
		repass: ''
	};

	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem,
			nhanViens:[]
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		//this.handleChangePhone = this.handleChangePhone.bind(this);
	}

	async componentDidMount() {
		// this.nameInput.focus(); 
		
		const nv = await (await fetch(`/gvnhanh/nhanvien/tk`)).json();
		
		if(nv.length===0){
			confirmAlert({
	          title: 'Thông báo',
	          message: 'Các nhân viên đã có đủ tài khoản. Không tạo thêm được nữa!',
	          buttons: [
	            {
	              label: 'OK',
	              onClick: ()=> this.props.history.push('/taikhoan')
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
		else{

			this.setState({
				nhanViens:nv
			})


			if (this.props.match.params.id !== 'new') {
				const tk = await (await fetch(`/gvnhanh/taikhoan/${this.props.match.params.id}`)).json();
				this.setState({item: tk});
			}
			else{
				let nvien = await (await fetch(`/gvnhanh/nhanvien/${nv[0].idnv}`)).json();
				console.log("nvien",nvien.sdt)

				this.setState({
					item:{
						sdt: nvien.sdt,
						pass: '',
						idnv: nv[0].idnv,
						quyen: '',
						trangthai: '',
						repass: ''
					}
				})
			}
		}

		
	}

	async handleChange(event) {
		let nvien=null
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let item = {...this.state.item};
		item[name] = value;
		this.setState({item});

		//console.log("nv",item);
		if (this.props.match.params.id === 'new'){
			//console.log("nvien", this.state.item.idnv)
			this.setState({item}, async () => {
				nvien = await (await fetch(`/gvnhanh/nhanvien/${this.state.item.idnv}`)).json();
				//console.log("nvien",nvien.sdt)

				this.setState({
					item:{
						sdt: nvien.sdt,
						pass: item["pass"],
						idnv: item["idnv"],
						quyen: item["quyen"],
						trangthai: item["trangthai"],
						repass: item["repass"]
					}
				})
			});
		}	

		// this.setState({[event.target.id]: event.target.value});
		
		 // this.setState({
	  //     input: event.target.value
	  //   });
	}

	async handleSubmit(event) {
		event.preventDefault();
		const {item} = this.state;
		const {nhanViens} = this.state;

		
		// if(this.state.item["idnv"]===''){
		// 	this.state.item["idnhanvien"] = this.state.nhanViens[0].idnhanvien;
		// }
		if(this.state.item["quyen"]===''){
			this.state.item["quyen"] = 'Admin';
		}
		this.state.item.trangthai="hoạt động";

		console.log("submit", this.state.item);

		if (this.state.item["pass"] && this.state.item["repass"] &&this.props.match.params.id==='new') {
				if(this.state.item["pass"] !== this.state.item["repass"]){
					alert("Mật khẩu không giống nhau! Vui lòng nhập lại!");
					this.setState({
						item:{
							sdt: item["sdt"],
							pass: item["pass"],
							idnv: item["idnv"],
							quyen: item["quyen"],
							trangthai: item["trangthai"],
							repass: ''
						}
					})
				}
				else{
					
					//console.log("id", this.state.item)
					await fetch('/gvnhanh/taikhoan', {
						method: (item.id) ? 'PUT' : 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(item),
					});
					this.props.history.push('/taikhoan');
				}
			}
		if (this.props.match.params.id !== 'new'){
			await fetch(`/gvnhanh/taikhoan/${this.props.match.params.id}`, {
						method: 'PUT',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(item),
					});
			this.props.history.push('/taikhoan');
		}	
	}

	render(){

		const {item} = this.state;
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">{item.idtk ? 'Cập nhật tài khoản' : 'Thêm tài khoản'}</h1>;

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
				                  <div className="form-group">
				                    <label for="exampleInputEmail1">Họ tên nhân viên</label>
				                    	{item.idtk?
											<select className="form-control col-md-8" type="select" name="idnv" id="idnv" value={item.idnv || ''}
											onChange={this.handleChange} autoComplete="name" disabled>
												{this.state.nhanViens.map((item, index) => (
													<option value={item.idnv}>{item.hoten}</option>
												))}
											</select>: 
											<select className="form-control col-md-8" type="select" name="idnv" id="idnv" value={item.idnv || ''}
											onChange={this.handleChange} autoComplete="name" required>
												{this.state.nhanViens.map((item, index) => (
													<option value={item.idnv}>{item.hoten}</option>
												))}
											</select>
										}														                  
						          </div>

						          <div className="form-group">
				                    <label for="exampleInputEmail1">Tên tài khoản</label>
									<input type="text" className="form-control col-md-8" name="sdt" id="sdt" value={item.sdt || ''}
										onChange={this.handleChange} disabled/>						                  
						          </div>

						          <div className="form-group">
				                    <label for="exampleInputEmail1">Mật khẩu</label>
									<input type="password" className="form-control col-md-8"  name="pass" id="pass" value={item.pass || ''}
									onChange={this.handleChange} autoComplete="address-level1" 
									minlength="6" maxlength="15" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" 
									title="Mật khẩu có tối thiểu 6 ký tự, bao gồm ít nhất 1 số, 1 chữ hoa và 1 ký tự đặc biệt" required/>						                  
						          </div>

						          {item.idtk?null:<div className="form-group">
				                    <label for="exampleInputEmail1">Nhập lại mật khẩu</label>
									<input type="password" className="form-control col-md-8" name="repass" id="repass" value={item.repass || ''}
									onChange={this.handleChange} autoComplete="address-level1" 
									minlength="6" maxlength="15" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" 
									title="Mật khẩu có tối thiểu 6 ký tự, bao gồm ít nhất 1 số, 1 chữ hoa và 1 ký tự đặc biệt" 
									required/>						                  
						          </div>}

						          <div className="form-group">
				                    <label for="exampleInputEmail1">Quyền</label>
										<select className="form-control col-md-4" name="quyen" id="quyen" value={item.quyen || ''}
										onChange={this.handleChange}>
					                    	<option>Admin</option>
					                    	<option>Nhân viên</option>
					                    </select>				                  
						          </div>
				                </div>
				               

				                <div className="card-footer">
				                  <button type="submit" className="btn btn-primary">Save</button>
				                  <Link to="/taikhoan"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>
				                </div>
				              </form>
				            </div>
					</div>
				</div>
			
			</div>
		);
	}
}
export default withRouter(themtaikhoan);
