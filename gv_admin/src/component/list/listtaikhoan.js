import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Link,
  withRouter
} from "react-router-dom";

class listtaikhoan extends Component{

	constructor(props){
		super(props);
		this.state = {
			tks:[],
			item:[],
			nvs:[],
			search:'',
			isLoading: true,
		};
		this.remove = this.remove.bind(this);
		this.searchChange = this.searchChange.bind(this);
		this.searchSubmit = this.searchSubmit.bind(this);		
	}

	 async componentDidMount() {
        const response = await fetch('/gvnhanh/taikhoan');
        const body = await response.json();
        const nv = await (await fetch('gvnhanh/nhanvien')).json();
        this.setState({ 
        	tks: body, 
        	search:'',
        	isLoading: false ,
        	nvs: nv
        });
    }

	async remove(id){
		await fetch(`/gvnhanh/taikhoan/${id}`,{
			method: 'DELETE',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(() =>{
			let updateTaikhoan = [...this.state.tks].filter(i => i.idtk !== id);
			this.setState({tks: updateTaikhoan});
		});
	}

	handleClick(id){
      confirmAlert({
          title: 'Cảnh báo',
          message: 'Bạn chắc chắn muốn xóa',
          buttons: [
            {
              label: 'Đồng ý',
              onClick: ()=> this.remove(id)
            },
            {
              label: 'Không',
           
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

    async searchChange(event){
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let item = {...this.state.search};
		item = value;
		if(item===''){
			this.componentDidMount()
		}
		this.setState({
			search: item
		});
		
	}
	async searchSubmit(event){
		event.preventDefault();
		const search = this.state.search;
		const find = await(await fetch(`gvnhanh/taikhoan/find/${search}`)).json();
		this.setState({
			tks: find
		})
		console.log("find", search)
	}

	render(){

		const {tks, isLoading} = this.state;
		const {item} = this.state;
		const {nvs} = this.state;

        if (isLoading) {
            return <p className="text-primary align-middle text-center">
                    <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
                    Loading...
                  </p>;
        }

        const tkList = tks.map(tk =>{
        	return <tr key={tk.idtk}>
						<td className="text-center">{tk.idtk}</td>
						<td className="text-center">{tk.sdt}</td>
						<td className="text-center">
						{nvs.map((nv, index)=>{
							if(nv.idnv===tk.idnv)
								return nv.hoten
						})}
						</td>                  
                        <td className="text-center">{tk.quyen}</td>
                        <td className="text-center">{tk.trangthai}</td>
                        <td className="text-center">
                        	<div class="btn-group" role="group" aria-label="Basic example">
	                        	<Link to={"/taikhoan/"+tk.idtk}>
								  <button type="button" class="btn btn-outline-primary" title="Cập nhật">
								  	<i className="fas fa-pencil-alt" />
								  </button>
								</Link>

							  <button type="button" class="btn btn-outline-danger" onClick={this.handleClick.bind(this,tk.idtk)} title="Xóa">
							  	<i className="fas fa-trash" />
							  </button>
							</div>                       	
                        </td>
					</tr>
        });

		return(
			<div className="content-wrapper">

				<div className="content-header">
		          <div className="container-fluid">
		            <div className="row mb-2">
		              <div className="col-sm-6">
		                <h1 className="m-0">Thông tin tài khoản</h1>
		              </div>{/* /.col */}
		              
		            </div>{/* /.row */}

		             <div className="pb-2 pt-2">      
			            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">				  
						  <div className="input-group">
						  	<form className="form-inline" onSubmit={this.searchSubmit}>
						  	  <div className="input-group">
								  <input className="form-control" type="search" placeholder="Nhập tên cần tìm..." 
								  onChange={this.searchChange} aria-label="Search" />
								  <div className="input-group-append">
								    <button className="btn bg-secondary rounded-right" type="submit">
				                      <i className="fas fa-search" />
				                    </button>
								  </div>
							  </div>
							 </form>
						  </div>

						  <div>
						  	<Link to = "/taikhoan/new">
								<button className="btn btn-success float-right">Thêm tài khoản</button>
							</Link>
						  </div>
						</div>		
					</div>

		          </div>{/* /.container-fluid */}
		        </div>

				{/* Page Heading */}
				<div className="content">
					<div className="container-fluid">
						<table className="table table-bordered table-hover table-inverse table-striped">
							<thead className="thead-dark">
								<tr className="h-100">
									<th className="text-center">STT</th>
									<th className="text-center">Tên tài khoản</th>
									<th className="text-center">Nhân viên</th>
									<th className="text-center">Quyền</th>
                                    <th className="text-center">Trạng thái</th>
                                    <th className="text-center"></th>
								</tr>
							</thead>
							<tbody>
								{tkList}
							</tbody>
						</table>
					</div>
				</div>
				
			</div>
		);
	}
}
export default listtaikhoan;
