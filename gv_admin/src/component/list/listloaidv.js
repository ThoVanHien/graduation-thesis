import React, {Component} from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from "react-paginate";

class listloaidv extends Component{

	constructor(props){
		super(props);
		this.state = {
			loaidvs:[],
			currentPage: 1,
			pageSize: 8,
			totalColumns: 0,
			isLoading: true,
		};
		this.remove = this.remove.bind(this);
		this.searchChange = this.searchChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
        this.paging = this.paging.bind(this);
	}

	async componentDidMount(){
		this.setState({isLoading: true});

		const loaidv = await(await fetch("gvnhanh/loaidv")).json();

		this.setState({
			loaidvs: loaidv,
			search: '',
			isLoading: false
		})

		this.paging(loaidv)
	}

	paging(list){
		const pageSize = this.state.pageSize;
		const temp = list.slice(0, pageSize);
		this.setState({
			loaidvs: temp,
			totalColumns: Math.ceil(list.length / pageSize),
		})
	}

	async handlePaging({ selected }){

		// (current - 1 ) = selected| * size lấy : size row
		const { pageSize } = this.state;
		const list = await (await fetch(`/gvnhanh/loaidv/`)).json();

		//myFish.splice(2, 1); // xóa 1 phần tử từ vị trí 2
		const start = selected * pageSize;
		// size = 6, vị trí 1 bắt đầu từ 0 đến 5
		// size = 6, vị trí 2 bắt đầu từ 6 đến 11
		const end = start + pageSize;

		const newList = list.slice(start, end)

		this.setState({
			loaidvs: newList,
			currentPage: selected + 1,
		})
	}

	async remove(id){
		await fetch(`/gvnhanh/loaidv/${id}`,{
			method: 'DELETE',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(() =>{
			let updateLoaidv = [...this.state.loaidvs].filter(i => i.idloaidv !== id);
			this.setState({loaidvs: updateLoaidv});
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
		const pageSize = this.state["pageSize"];
		const search = this.state.search;
		const find = await(await fetch(`gvnhanh/loaidv/find/${search}`)).json();
		this.setState({
			loaidvs: find,
			totalColumns: Math.ceil(find.length / pageSize)
		})
		
	}

	render(){

		const {loaidvs, isLoading, pageSize, currentPage, totalColumns, search} = this.state;

        if (isLoading) {
            return <p className="text-primary align-middle text-center">
                    <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
                    Loading...
                  </p>;
        }

        const loaidvList = loaidvs.map(loaidv =>{
        	return <tr className="" key={loaidv.idloaidv}>
						<td className="text-center align-middle">{loaidv.idloaidv}</td>
						<td className="align-middle">{loaidv.tenloai}</td>
						<td className="text-justify">{loaidv.gioithieu}</td>
                        <td className="text-center align-middle">
                        	<div class="btn-group" role="group" aria-label="Basic example">
	                        	<Link to={"/loaidv/"+loaidv.idloaidv}>
								  <button type="button" class="btn btn-outline-primary" title="Cập nhật">
								  	<i className="fas fa-pencil-alt" />
								  </button>
								</Link>

							  <button type="button" class="btn btn-outline-danger" onClick={this.handleClick.bind(this,loaidv.idloaidv)} title="Xóa">
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
		                <h1 className="m-0">Loại dịch vụ</h1>
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
						  	<Link to = "/loaidv/new">
								<button className="btn btn-success float-right">Thêm dịch vụ</button>
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
								<tr className="">
									<th className="text-center ">Mã loại</th>
									<th className="text-center w-25">Tên loại</th>
									<th className="text-center">Giới thiệu</th>
									<th className="text-center"></th>
								</tr>
							</thead>
							<tbody>
								{loaidvList}
							</tbody>
						</table>
					</div>

					<div className="container-fluid ">
		                <div className="Page navigation example d-flex justify-content-center">
							<ReactPaginate
								containerClassName="paging-container"
								pageClassName="paging-container__item"
								activeClassName="paging-container__item active"
								previousClassName="paging-container__item previous"
								nextClassName="paging-container__item next"
								pageLinkClassName="link"
								previousLabel={<span>{'<'}</span>}
								nextLabel={<span>{'>'}</span>}
								marginPagesDisplayed={currentPage}
								onPageChange={this.handlePaging.bind(this)}
								pageRangeDisplayed={pageSize}
								pageCount={totalColumns} />
				 		</div>
				 	</div>
				</div>
			</div>
		);
	}
}
export default listloaidv;
