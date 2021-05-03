import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
// import CurrencyFormat from 'react-currency-format';
import {
  Link,
  withRouter
} from "react-router-dom";
import ReactPaginate from "react-paginate";

class listnhanvien extends Component{

	emptyItem = {
		sapxep: '',
	};

	constructor(props){
		super(props);
		this.state = {
			nvs:[],
			currentPage: 1,
			pageSize: 8,
			totalColumns: 0,
			search: '',
			isLoading: true,
		};
		this.remove = this.remove.bind(this);	
		this.currencyFormat = this.currencyFormat.bind(this);
		this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
        this.sortByNgaysinhAsc = this.sortByNgaysinhAsc.bind(this);
        this.sortByNgaysinhDesc = this.sortByNgaysinhDesc.bind(this);
        this.handlePaging = this.handlePaging.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
        this.paging = this.paging.bind(this);
	}

	async componentDidMount(){
		this.setState({isLoading: true});

		const nv = await(await fetch('gvnhanh/nhanvien')).json();
		//const temp = nv.slice(0, pageSize);

		this.setState({
			nvs: nv,
			sort: 0,
			sortNgaysinh: 0,
			search: '',
			isLoading: false
		})

		//phân trang
		this.paging(nv);

		// fetch('gvnhanh/nhanvien')
		// 	.then(response => response.json())
		// 	.then(data => this.setState({
		// 		nvs: data,
		// 		isLoading: false,
		// 		sort: 0,
		// 		sortNgaysinh: 0,
		// 	}));
	}

	paging(list){
		const pageSize = this.state.pageSize;
		const temp = list.slice(0, pageSize);
		this.setState({
			nvs: temp,
			totalColumns: Math.ceil(list.length / pageSize),
		})
	}

	async remove(id){
		await fetch(`/gvnhanh/nhanvien/${id}`,{
			method: 'DELETE',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(() =>{
			let updateNhanvien = [...this.state.nvs].filter(i => i.idnv !== id);
			this.setState({nvs: updateNhanvien});
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

    formatter = new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        });	

    numberFormat = new Intl.NumberFormat('en-IN', {
	    style: 'currency',
	    currency: 'VND'
	  });

    currencyFormat(num){
		   return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +' VNĐ'
		}

	async handlePaging({ selected }){

		// (current - 1 ) = selected| * size lấy : size row
		const { pageSize } = this.state;
		const list = await (await fetch(`/gvnhanh/nhanvien/`)).json();

		//myFish.splice(2, 1); // xóa 1 phần tử từ vị trí 2
		const start = selected * pageSize;
		// size = 6, vị trí 1 bắt đầu từ 0 đến 5
		// size = 6, vị trí 2 bắt đầu từ 6 đến 11
		const end = start + pageSize;

		const newList = list.slice(start, end)

		this.setState({
			nvs: newList,
			currentPage: selected + 1,
		})
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
		const find = await(await fetch(`gvnhanh/nhanvien/find/${search}`)).json();
		this.setState({
			nvs: find,
			totalColumns: Math.ceil(find.length / pageSize)
		})
		
	}

	sortByPriceAsc() {
    	let nv = this.state.nvs.sort((a,b) => (a.luong - b.luong));
    	this.setState({
    		nvs: nv,
    		sort: 0,
    	})
    	console.log("sort", this.state);
    }

    sortByPriceDesc() {
        let nv = this.state.nvs.sort((a, b) => (b.luong - a.luong))
    	this.setState({
    		nvs: nv,
    		sort: 1,
    	})
    }

    sortByNgaysinhAsc() {
    	let nv = this.state.nvs.sort((a,b) => (a.ngaysinh.localeCompare(b.ngaysinh)));
    	this.setState({
    		nvs: nv,
    		sortNgaysinh: 0,
    	})
    	console.log("sort", this.state);
    }

    sortByNgaysinhDesc() {
        let nv = this.state.nvs.sort((a, b) => (b.ngaysinh.localeCompare(a.ngaysinh)));
    	this.setState({
    		nvs: nv,
    		sortNgaysinh: 1,
    	})
    }
	
	render(){

		const {nvs, isLoading, sort, sortNgaysinh, pageSize, currentPage, totalColumns, search} = this.state;

        // if (isLoading) {
        //     return <p className="text-primary align-middle text-center">
        //             <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
        //             Loading...
        //           </p>;
        // }

        const nvList = nvs.map(nv =>{
        	return <tr key={nv.idnv}>
						<td className="text-center">{nv.idnv}</td>
						<td className="text-center">{nv.hoten}</td>
						<td className="text-center">{nv.gioitinh}</td>
                        <td className="text-center">
                        	{this.formatter.format(Date.parse(nv.ngaysinh))}
                        	
                        </td>
                        <td className="text-center">{nv.sdt}</td>
                        <td className="text-center">{nv.cmnd}</td>
                        <td className="text-center">
                        	{/*<CurrencyFormat value={nv.luong} displayType={'text'} thousandSeparator={true}/>*/}
                        	{this.currencyFormat(nv.luong)}
                        </td>
                        <td className="text-center">
                        	<div class="btn-group" role="group" aria-label="Basic example">
	                        	<Link to={"/nhanvien/"+nv.idnv}>
								  <button type="button" className="btn btn-outline-primary" title="Cập nhật">
								  	<i className="fas fa-pencil-alt" />
								  </button>
								</Link>

							  <button type="button" className="btn btn-outline-danger" onClick={this.handleClick.bind(this,nv.idnv)} title="Xóa">
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
		                <h1 className="m-0">Thông tin nhân viên</h1>
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
						  	<Link to = "/nhanvien/new">
								<button className="btn btn-success float-right">Thêm nhân viên</button>
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
									<th className="text-center">Mã NV</th>
									<th className="text-center">Họ tên</th>
									<th className="text-center">Giới tính</th>
									<th className="text-center">Ngày sinh {' '}
										{sortNgaysinh===1?
	                                    	<i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByNgaysinhAsc}/>
	                                    	: <i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByNgaysinhDesc}/>
	                                    }
									</th>
                                    <th className="text-center">SĐT</th>
                                    <th className="text-center">CMND</th>
                                    <th className="text-center">Lương {' '}
	                                    {sort===1?
	                                    	<i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByPriceAsc}/>
	                                    	: <i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByPriceDesc}/>
	                                    }                               
                                    </th>
                                    <th className="text-center"></th>
								</tr>
							</thead>
							<tbody>
								
								{nvList}
								
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

				{/*<section className="content">
				  <div className="container-fluid">
				    <div className="row">
				      <div className="col-12">
				        <div className="card">
				          <div className="card-header">
				            <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
				          </div>
				          
				          <div className="card-body">
				            <table id="example2" className="table table-bordered table-hover">
				              <thead>
				                <tr>
				                    <th className="text-center">Mã NV</th>
									<th className="text-center">Họ tên</th>
									<th className="text-center">Giới tính</th>
									<th className="text-center">Ngày sinh</th>
                                    <th className="text-center">SĐT</th>
                                    <th className="text-center">CMND</th>
                                    <th className="text-center">Lương</th>
                                    <th className="text-center"></th>
				                </tr>
				              </thead>
				              <tbody>
				                	{nvList}
				              </tbody>
				              <tfoot>
				                <tr>
				                  <th>Rendering engine</th>
				                  <th>Browser</th>
				                  <th>Platform(s)</th>
				                  <th>Engine version</th>
				                  <th>CSS grade</th>
				                </tr>
				              </tfoot>
				            </table>
				          </div>
				         
				        </div>
				        
				      </div>
				     
				    </div>
				   
				  </div>
				
				</section>*/}

				
			</div>
		);
	}
}
export default listnhanvien;
