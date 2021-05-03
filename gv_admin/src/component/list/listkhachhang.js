import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Link,
  withRouter
} from "react-router-dom";
import ReactPaginate from "react-paginate";

class listkhachhang extends Component{

	constructor(props){
		super(props);
		this.state = {
			khs:[],	
			item:[],
			sortTrangthai: 0,
			currentPage: 1,
			pageSize: 8,
			totalColumns: 0,
			isLoading: true,
		};
		this.clickTrue = this.clickTrue.bind(this);
		this.clickFalse = this.clickFalse.bind(this);
		this.sortByTrangthaiAsc = this.sortByTrangthaiAsc.bind(this);
		this.sortByTrangthaiDesc = this.sortByTrangthaiDesc.bind(this);
		this.paging = this.paging.bind(this);
		this.searchChange = this.searchChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
	}

	async componentDidMount(){
		this.setState({isLoading: true});

		const kh = await(await fetch('gvnhanh/khachhang')).json();

		this.setState({
			khs: kh,
			search: '',
			isLoading: false
		})

		this.paging(kh);
	}

	paging(list){
		const pageSize = this.state.pageSize;
		const temp = list.slice(0, pageSize);
		this.setState({
			khs: temp,
			totalColumns: Math.ceil(list.length / pageSize),
		})
	}

	async handlePaging({ selected }){

		// (current - 1 ) = selected| * size lấy : size row
		const { pageSize } = this.state;
		const list = await (await fetch(`/gvnhanh/khachhang/`)).json();

		//myFish.splice(2, 1); // xóa 1 phần tử từ vị trí 2
		const start = selected * pageSize;
		// size = 6, vị trí 1 bắt đầu từ 0 đến 5
		// size = 6, vị trí 2 bắt đầu từ 6 đến 11
		const end = start + pageSize;

		const newList = list.slice(start, end)

		this.setState({
			khs: newList,
			currentPage: selected + 1,
		})
	}

	sortByTrangthaiAsc() {
      let kh = this.state.khs.sort((a,b) => (a.trangthai - b.trangthai));
      this.setState({
        khs: kh,
        sortTrangthai: 0,
      })
      console.log("sort", this.state);
    }

    sortByTrangthaiDesc() {
      let kh = this.state.khs.sort((a, b) => (b.trangthai - a.trangthai));
      this.setState({
        khs: kh,
        sortTrangthai: 1,
      })
       console.log("sort", this.state);
    }

    clickTrue(id){
    	confirmAlert({
          title: 'Cảnh báo',
          message: 'Bạn chắc chắn muốn cho phép đặt dịch vụ',
          buttons: [
            {
              label: 'Đồng ý',
              onClick: ()=> {
            		fetch(`/gvnhanh/khachhang/true/${id}`,{
						method: 'PUT',
						headers:{
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						}
					}).then(() => {
	                  fetch('gvnhanh/khachhang')
	                .then(response => response.json())
	                .then(data => this.setState({khs: data, isLoading: false}));
	              });
              	}
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

    clickFalse(id){
    	confirmAlert({
          title: 'Cảnh báo',
          message: 'Bạn chắc chắn muốn cấm đặt dịch vụ',
          buttons: [
            {
              label: 'Đồng ý',
              onClick: ()=> {
            		fetch(`/gvnhanh/khachhang/false/${id}`,{
						method: 'PUT',
						headers:{
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						}
					}).then(() => {
	                  fetch('gvnhanh/khachhang')
	                .then(response => response.json())
	                .then(data => this.setState({khs: data, isLoading: false}));
	              });
              	}
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
		const find = await(await fetch(`gvnhanh/khachhang/find/${search}`)).json();
		this.setState({
			khs: find,
			totalColumns: Math.ceil(find.length / pageSize)
		})
		
	}

	render(){

		const {khs, isLoading, sortTrangthai, pageSize, currentPage, totalColumns} = this.state;

		if (isLoading) {
            return <p className="text-primary align-middle text-center">
                    <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
                    Loading...
                  </p>;
        }


        const khList = khs.map(kh =>{
        	return <tr key={kh.idkh}>
				<td className="text-center">{kh.idkh}</td>
				<td className="text-center">{kh.hoten}</td>
				<td className="text-center">{kh.sdt}</td>
				<td className="text-center">{kh.diachi}</td>
                <td className="text-center">
                	{kh.trangthai===1?
                	<button type="button" class="btn btn-outline-success" onClick={this.clickFalse.bind(this,kh.idkh)} title="Được đặt dịch vụ">
					  	<i className="fas fa-check-circle" />
					</button>
					:<button type="button" class="btn btn-outline-danger" onClick={this.clickTrue.bind(this,kh.idkh)} title="Cấm đặt dịch vụ">
					  	<i className="fas fa-times-circle" />
					</button>}
                </td>
                
			</tr>

        });

		return(
			<div className="content-wrapper">

				<div className="content-header">
		          <div className="container-fluid">
		            <div className="row mb-2">
		              <div className="col-sm-6">
		                <h1 className="m-0">Thông tin khách hàng</h1>
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
									<th className="text-center" scope="col">Mã KH</th>
									<th className="text-center">Họ tên</th>
									<th className=" text-center">SĐT</th>
									<th className="text-center">Địa chỉ</th>
									<th className="text-center">Trạng thái {' '}
										{sortTrangthai===1?
					                      <i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByTrangthaiAsc}/>
					                      :<i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByTrangthaiDesc}/>
					                    }
									</th>
								</tr>
							</thead>
							<tbody>
								{khList}
							</tbody>
						</table>
					</div>

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
		);
	}
}
export default listkhachhang;
