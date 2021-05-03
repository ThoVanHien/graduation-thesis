import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Link
} from "react-router-dom";
import ReactPaginate from "react-paginate";


class listyeucau extends Component{

	constructor(props){
		super(props);
		this.state = {
			ycs:[],
			isLoading: true,
			item:[],
			sortTrangthai: 0,
			sortNgaylam: 0,
			currentPage: 1,
			pageSize: 8,
			totalColumns: 0,
			search: '',
		};
		this.remove = this.remove.bind(this);
		this.sortByTrangthaiAsc = this.sortByTrangthaiAsc.bind(this);
		this.sortByTrangthaiDesc = this.sortByTrangthaiDesc.bind(this);
		this.sortByNgaylamAsc = this.sortByNgaylamAsc.bind(this);
		this.sortByNgaylamDesc = this.sortByNgaylamDesc.bind(this);
		this.handlePaging = this.handlePaging.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
        this.paging = this.paging.bind(this);
	}

	async componentDidMount(){
		const { pageSize } = this.state;
		this.setState({isLoading: true});

		const yc = await(await fetch('gvnhanh/yeucau')).json();

		// fetch('gvnhanh/yeucau')
		// 	.then(response => response.json())
		// 	.then(data => this.setState({
		// 		ycs: data,
		// 		isLoading: false
		// 	}));

		this.setState({
			ycs: yc,
			sortNgaylam: 0,
			sortTrangthai: 0,
			search: '',
			isLoading: false
		})
		this.paging(yc);
	}

	paging(list){
		const pageSize = this.state.pageSize;
		const temp = list.slice(0, pageSize);
		this.setState({
			ycs: temp,
			totalColumns: Math.ceil(list.length / pageSize),
		})
	}

	async handlePaging({ selected }){

		// (current - 1 ) = selected| * size lấy : size row
		const { pageSize } = this.state;
		const list = await (await fetch(`/gvnhanh/yeucau/`)).json();

		//myFish.splice(2, 1); // xóa 1 phần tử từ vị trí 2
		const start = selected * pageSize;
		// size = 6, vị trí 1 bắt đầu từ 0 đến 5
		// size = 6, vị trí 2 bắt đầu từ 6 đến 11
		const end = start + pageSize;

		const newList = list.slice(start, end)

		this.setState({
			ycs: newList,
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
			search: item,

		});
		
	}
	async searchSubmit(event){
		event.preventDefault();
		const pageSize = this.state.pageSize;
		const search = this.state.search;
		const find = await(await fetch(`gvnhanh/yeucau/find/${search}`)).json();
		this.setState({
			ycs: find,
			totalColumns: Math.ceil(find.length/ pageSize)
		})
		
	}

	sortByTrangthaiAsc() {
      let yc = this.state.ycs.sort((a,b) => (a.trangthai.localeCompare(b.trangthai)));
      this.setState({
        ycs: yc,
        sortTrangthai: 0,
      })
      console.log("sort", this.state);
    }

    sortByTrangthaiDesc() {
      let yc = this.state.ycs.sort((a, b) => (b.trangthai.localeCompare(a.trangthai)));
      this.setState({
        ycs: yc,
        sortTrangthai: 1,
      })
       console.log("sort", this.state);
    }

    sortByNgaylamAsc() {
      let yc = this.state.ycs.sort((a,b) => (a.ngaylam.localeCompare(b.ngaylam)));
      this.setState({
        ycs: yc,
        sortNgaylam: 0,
      })
      console.log("sort", this.state);
    }

    sortByNgaylamDesc() {
      let yc = this.state.ycs.sort((a, b) => (b.ngaylam.localeCompare(a.ngaylam)));
      this.setState({
        ycs: yc,
        sortNgaylam: 1,
      })
       console.log("sort", this.state);
    }

	async remove(id){
		await fetch(`/gvnhanh/yeucau/${id}`,{
			method: 'DELETE',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(() =>{
			let updateYeucau = [...this.state.ycs].filter(i => i.idyc !== id);
			this.setState({ycs: updateYeucau});
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


	render(){

		const {ycs, isLoading, sortTrangthai, sortNgaylam, pageSize, currentPage, totalColumns, search} = this.state;

		if (isLoading) {
            return <p className="text-primary align-middle text-center">
                    <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
                    Loading...
                  </p>;
        }


        const ycList = ycs.map((yc,index) =>{
        	return <tr key={yc.idyc}>
				<td className="text-center">{yc.idyc}</td>
				<td className="text-center">{yc.hoten}</td>
				<td className="text-center">{yc.sdt}</td>
				 <td className="text-center">{yc.diachi}</td>
                <td className="text-center">
                	{this.formatter.format(Date.parse(yc.ngaylam))}
                	
                </td>
                <td className="text-center">{yc.congviec}</td>
                {/*<td className="text-center">{yc.trangthai}</td>*/}
                <td className="text-center">
                	<div class="btn-group" role="group" aria-label="Basic example">

                    {yc.trangthai==='Chưa duyệt'? <Link to={"/hdthue/"+ `${yc.idyc}_new`}>
						  <button type="button" class="btn btn-outline-primary" title="Duyệt yêu cầu">
						  	<i className="fas fa-calendar-check" />
						  </button>	</Link> : null}

					  <button type="button" class="btn btn-outline-danger" onClick={this.handleClick.bind(this,yc.idyc)} title="Xóa">
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
		                <h1 className="m-0">Danh sách yêu cầu</h1>
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
									<th className="text-center align-middle" scope="col">TT</th>
									<th className="text-center align-middle">Họ tên KH</th>
									<th className="text-center align-middle">SĐT</th>
									<th className="text-center align-middle">Địa chỉ</th>
									<th className="text-center align-middle">Ngày làm {' '}
										{sortNgaylam===1?
					                      <i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByNgaylamAsc}/>
					                      :<i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByNgaylamDesc}/>
					                    }
									</th>
									<th className="text-center align-middle">Chi tiết công việc</th>
									{/*<th className="text-center align-middle">Trạng thái {' '}
										
									</th>*/}
									<th className="text-center align-middle">
										{sortTrangthai===1?
					                      <i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByTrangthaiAsc}/>
					                      :<i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByTrangthaiDesc}/>
					                    }
									</th>
								</tr>
							</thead>
							<tbody>
								{ycList}
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
export default listyeucau;
