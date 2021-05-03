import React, {Component} from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";

class themloaidv extends Component{

	emptyItem = {
		tenloai: '',
		gioithieu: '',
		camket: '',
		kynang: '',
		anh: ''
	};

	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem,
			picture: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		//this.handleChangePhone = this.handleChangePhone.bind(this);
	}

	async componentDidMount() {
		if (this.props.match.params.id !== 'new') {
			const loaidv = await (await fetch(`/gvnhanh/loaidv/${this.props.match.params.id}`)).json();
			this.setState({
				item: loaidv,
				picture: loaidv.anh,
			});
		}
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let item = {...this.state.item};
		item[name] = value;
		this.setState({item});
	}

	async handleSubmit(event) {
		event.preventDefault();

		const {item, picture} = this.state;
		// if(this.state.item.gioitinh===undefined){
		// 	this.state.item.gioitinh='Nam';
			
		// }
		this.state.item.anh = picture;
		await fetch('/gvnhanh/loaidv', {
			method: (item.id) ? 'PUT' : 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item),
		});
		this.props.history.push('/loaidv');
		
	}

	onImageChange = (event) => {
	    if (event.target.files && event.target.files[0]) {
	      let img = event.target.files[0];
	      this.setState({
	      	picture: URL.createObjectURL(img)
	      })
	    }
    }

	render(){

		const {item, picture} = this.state;
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">{item.idloaidv ? 'Cập nhật dịch vụ' : 'Thêm dịch vụ'}</h1>;

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
				                    <label for="exampleInputEmail1">Tên dịch vụ</label>
				                    <input type="text" className="form-control" name="tenloai" id="loaidv"
				                    value={item.tenloai||''} onChange={this.handleChange} placeholder=""/>
				                  </div>
				                  <div className="form-group">
				                    <label for="exampleInputPassword1">Giới thiệu</label>
				                    <textarea className="form-control" name="gioithieu" id="gioithieu" 
				                    value={item.gioithieu||''} onChange={this.handleChange} rows="2"></textarea>
				                  </div>
				                  <div className="form-group">
				                    <label for="exampleInputPassword1">Cam kết</label>
				                    <textarea className="form-control" name="camket" id="camket" 
				                    value={item.camket||''} onChange={this.handleChange} rows="2"></textarea>
				                  </div>
				                  <div className="form-group">
				                    <label for="exampleInputPassword1">Kỹ năng người giúp việc</label>
				                    <textarea className="form-control" name="kynang" id="kynang"
				                    value={item.kynang||''} onChange={this.handleChange} rows="2"></textarea>
				                  </div>
				                  <div className="form-group">
					                    <label for="exampleInputPassword1">Hình ảnh</label>
					               		<input type="file" className="form-control-file" id="customFile" onChange={this.onImageChange} accept="image/*"/>
										<div className="previewProfilePic" >
							                <img className="playerProfilePic_home_tile w-25 h-25" src={picture} alt=""/>
							            </div>
					              </div>
				                </div>
				               

				                <div className="card-footer">
				                  <button type="submit" className="btn btn-primary">Save</button>
				                  <Link to="/loaidv"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>
				                </div>
				              </form>
				            </div>
					</div>
				</div>
				
				

				{/*<table className="table table-striped">
					<thead className="thead-dark mx-auto">
						<tr className>
							<th scope="col" className="text-center align-middle">Mã loại</th>
							<th scope="col" className="text-justify align-middle">Tên loại</th>
							<th scope="col" className="text-center align-middle">Giới thiệu</th>
             
							<th />
						</tr>
					</thead>
					<tbody>
						{loaidvList}
					</tbody>
				</table> */}
			</div>
		);
	}
}
export default withRouter(themloaidv);
