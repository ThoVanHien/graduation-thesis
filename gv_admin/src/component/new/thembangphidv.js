import React, {Component} from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";

class thembangphidv extends Component{

	emptyItem = {
		idloaidv: '',
		tendv: '',
		mota:'',
		gia: '',
		donvitinh: '',
		phidv:'',
		chantren: '',
		// tenloai: ''
	};


	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem,
		 	loaiDVs:[],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}

	async componentDidMount() {
		if (this.props.match.params.id !== 'new') {
			const bangphidv = await (await fetch(`/gvnhanh/bangphidv/${this.props.match.params.id}`)).json();
			this.setState({item: bangphidv});
			
		}

		const loaidv = await (await fetch(`/gvnhanh/loaidv`)).json();
		this.setState({
				loaiDVs: loaidv
			})
		//console.log("loai", loaidv);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let item = {...this.state.item};
		item[name] = value;
		this.setState({item});

		// this.setState({[event.target.id]: event.target.value});
		
		 // this.setState({
	  //     input: event.target.value
	  //   });
	}

	async handleSubmit(event) {
		event.preventDefault();
		const {item} = this.state;

		
		if(item["donvitinh"]===''){
			item["donvitinh"]="Giờ"
		}
		if(item["idloaidv"]===''){
			item["idloaidv"]=this.state.loaiDVs[0].idloaidv
		}
		console.log("item", item);

		await fetch('/gvnhanh/bangphidv', {
			method: (item.id) ? 'PUT' : 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item),
		});
		this.props.history.push('/bangphidv');
	}
	
	render(){

		const {item} = this.state;
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">{item.iddv ? 'Cập nhật bảng phí' : 'Thêm bảng phí'}</h1>;
	
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
				                    <label for="exampleInputEmail1">Tên loại dịch vụ</label>
				                    <select className="form-control" name="idloaidv" id="idloaidv" value={item.idloaidv || ''}
				                    onChange={this.handleChange} >
				                    	{this.state.loaiDVs.map((item, index) => (
											<option value={item.idloaidv}>{item.tenloai}</option>
										))}
				                    </select>
				                  </div>
				                  <div className="form-group">
				                    <label for="exampleInputEmail1">Tên dịch vụ</label>
				                    <input type="text" className="form-control" name="tendv" id="tendv" value={item.tendv || ''}
										onChange={this.handleChange} required/>
				                  </div>
				                  <div className="form-group">
				                    <label for="exampleInputPassword1">Mô tả</label>
				                    <textarea type="text" className="form-control" name="mota" id="mota" value={item.mota || ''}
									onChange={this.handleChange} required row="2">
									</textarea>
				                  </div>
				                  <div class="row">
				                  	 	<div class="col">
				                  	   		<div className="form-group">
							                    <label for="exampleInputPassword1">Giá</label>
							                    <div className="input-group">
							                      <div className="custom-file col-md-8">
							                        <input type="number" min="0" name="gia" id="gia" value={item.gia || ''}
														onChange={this.handleChange} className="form-control text-center"/>
							                      </div>
							                      <div className="input-group-append">
							                        <span className="input-group-text">VNĐ</span>
							                      </div>
							                    </div>
							                </div>
				                  	 	</div>
				                  	 	<div className="col">
						                  	<div className="form-group">
							                    <label for="exampleInputPassword1">Giá tối đa</label>
							                    <div className="input-group">
							                      <div className="custom-file col-md-8">
							                        <input type="number" min="0" name="chantren" id="chantren" value={item.chantren || ''}
														onChange={this.handleChange} className="form-control text-center"/>
							                      </div>
							                      <div className="input-group-append">
							                        <span className="input-group-text">VNĐ</span>
							                      </div>
							                    </div>
							                </div>
				                  	 	</div>
				                  	 	<div className="col">
				                  	 		<div className="form-group">
							                    <label for="exampleInputPassword1">Phí giới thiệu</label>
							                    <div className="input-group">
							                      <div className="custom-file col-md-8">
							                        <input type="number" min="0" name="phidv" id="phidv" value={item.phidv || ''}
														onChange={this.handleChange} className="form-control text-center"/>
							                      </div>
							                      <div className="input-group-append">
							                        <span className="input-group-text">VNĐ</span>
							                      </div>
							                    </div>
							                </div>
				                  	 	</div>
				                  </div>
				                  
				                  <div className="form-group">
								    <label for="exampleFormControlSelect1">Đơn vị tính</label>
								    <select className="form-control col-md-2" name="donvitinh" id="donvitinh" value={item.donvitinh || ''}
										onChange={this.handleChange}>
								      {/*<option>Giờ</option>*/}
								      <option>Ngày</option>
								      <option>Tháng</option>
								      {/*<option>Năm</option>*/}
								    </select>
								  </div>
				                  
				                </div>
				               

				                <div className="card-footer">
				                  <button type="submit" className="btn btn-primary">Save</button>
				                  <Link to ="/bangphidv"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>
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
export default withRouter(thembangphidv);
