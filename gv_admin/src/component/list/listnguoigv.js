import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Link,
  withRouter
} from "react-router-dom";
import ReactPaginate from "react-paginate";

class listnguoigv extends Component{

	  constructor(props) {
        super(props);
        this.state = {
          ngvs: [], 
          sortDate: 0,
          sortHopDong: 0,
          sortDiem: 0,
          currentPage: 1,
          pageSize: 8,
          totalColumns: 0,
          search: '',
          isLoading: true,
        };
        //this.remove = this.remove.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        this.sortByDateAsc = this.sortByDateAsc.bind(this);
        this.sortByDateDesc = this.sortByDateDesc.bind(this);
        this.sortByHopDongAsc = this.sortByHopDongAsc.bind(this);
        this.sortByHopDongDesc = this.sortByHopDongDesc.bind(this);
        this.paging = this.paging.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
        this.sortByDiemAsc = this.sortByDiemAsc.bind(this);
        this.sortByDiemDesc = this.sortByDiemDesc.bind(this);
    }

    async componentDidMount() {
        this.setState({isLoading: true});

        const ngv = await(await fetch('gvnhanh/nguoigv')).json();

        this.setState({
          ngvs: ngv,
          search:'',
          isLoading: false
        })

        this.paging(ngv)
    }

    paging(list){
      const pageSize = this.state.pageSize;
      const temp = list.slice(0, pageSize);
      this.setState({
        ngvs: temp,
        totalColumns: Math.ceil(list.length / pageSize),
      })
    }

    async handlePaging({ selected }){

        // (current - 1 ) = selected| * size lấy : size row
        const { pageSize } = this.state;
        const list = await (await fetch(`/gvnhanh/nguoigv/`)).json();

        //myFish.splice(2, 1); // xóa 1 phần tử từ vị trí 2
        const start = selected * pageSize;
        // size = 6, vị trí 1 bắt đầu từ 0 đến 5
        // size = 6, vị trí 2 bắt đầu từ 6 đến 11
        const end = start + pageSize;

        const newList = list.slice(start, end)

        this.setState({
            ngvs: newList,
            currentPage: selected + 1,
        })
    }

    sortByDateAsc() {
      let ngv = this.state.ngvs.sort((a,b) => (a.ngaysinh.localeCompare(b.ngaysinh)));
      this.setState({
        ngvs: ngv,
        sortDate: 0,
      })
      console.log("sort", this.state);
    }

    sortByDateDesc() {
      let ngv = this.state.ngvs.sort((a, b) => (b.ngaysinh.localeCompare(a.ngaysinh)));
      this.setState({
        ngvs: ngv,
        sortDate: 1,
      })
    }

    sortByHopDongAsc() {
      let ngv = this.state.ngvs.sort((a,b) => (a.hopdong - b.hopdong));
      this.setState({
        ngvs: ngv,
        sortHopDong: 0,
      })
      console.log("sort", this.state);
    }

    sortByHopDongDesc() {
        let ngv = this.state.ngvs.sort((a,b) => (b.hopdong - a.hopdong));
        this.setState({
            ngvs: ngv,
            sortHopDong: 1,
        })
        console.log("sort", this.state);
    }

    sortByDiemAsc() {
      let ngv = this.state.ngvs.sort((a,b) => (a.diem - b.diem));
      this.setState({
        ngvs: ngv,
        sortDiem: 0,
      })
      console.log("sort", this.state);
    }

    sortByDiemDesc() {
        let ngv = this.state.ngvs.sort((a,b) => (b.diem - a.diem));
        this.setState({
            ngvs: ngv,
            sortDiem: 1,
        })
        console.log("sort", this.state);
    }

    async remove(id) {
        await fetch(`/gvnhanh/nguoigv/xoa/${id}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
           let updateNguoiGV = [...this.state.ngvs].filter(i => i.idnguoigv !== id);
           this.setState({ngvs: updateNguoiGV});
        });
    }

    async handleClick(id){
      confirmAlert({
          title: 'Cảnh báo',
          message: 'Bạn chắc chắn muốn xóa',
          buttons: [
            {
              label: 'Đồng ý',
              onClick: ()=>this.remove(id)
            //   onClick: async ()=> {
            //   await fetch(`/gvnhanh/nguoigv/xoa/${id}`, {
            //                 method:'PUT',
            //                 headers: {
            //                   'Accept': 'application/json',
            //                   'Content-Type': 'application/json'
            //                 }
            //               }).then(() => {
            //            fetch('gvnhanh/nguoigv')
            //           .then(response => response.json())
            //           .then(data => this.setState({ngvs: data, isLoading: false}));
            //     });
            // }
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
        const find = await(await fetch(`gvnhanh/nguoigv/find/${search}`)).json();
        this.setState({
            ngvs: find,
            totalColumns: Math.ceil(find.length / pageSize)
        })
        
    }

	render(){

		const {ngvs, isLoading, sortDate, sortHopDong, pageSize, currentPage, totalColumns, search, sortDiem} = this.state;

		if (isLoading) {
            return <p className="text-primary align-middle text-center">
                    <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
                    Loading...
                  </p>;
        }

    const ngvList = ngvs.map(ngv => {
	          return <tr key={ngv.idnguoigv}>
	            <th scope="row" className="text-center">{ngv.idnguoigv}</th>
	            <td className="text-center">{ngv.hoten}</td>
	            <td className="text-center">{ngv.gioitinh}</td>
	            <td className="text-center">{this.formatter.format(Date.parse(ngv.ngaysinh))}</td>
	            <td className="text-center">{ngv.sdt}</td>
	            <td className="text-center">{ngv.quequan}</td>
              {/*<td className="text-center">{ngv.diem}</td>*/}
	            <td className="text-center">

            	<div className="btn-group" role="group" aria-label="Basic example">
                <Link to={"/nguoigv/"+ngv.idnguoigv}>
      						  <button type="button" className="btn btn-outline-primary" title="Cập nhật">
      						  	<i className="fas fa-pencil-alt" />
  						  </button>
  						</Link>

					{/*	{ngv.hopdong!==1 ? <Link to={"/hdlaodong/" + `${ngv.idnguoigv}_new`}><button type="button" className="btn btn-outline-warning" tag={Link} to={"/hopdongdk/" + `${ngv.idnguoigv}_new`} 
		                title="Hợp đồng"><i className="fas fa-print" /></button></Link>: null}*/}

						<button type="button" className="btn btn-outline-danger" onClick={this.handleClick.bind(this,ngv.idnguoigv)} title="Xóa">
							<i className="fas fa-trash" />
						</button>
            {/*<Link to={"danhgia/"+ngv.idnguoigv}>
              <button type="button" className="btn btn-outline-success" title="Đánh giá">
                <i className="fas fa-check-double" />
              </button>
            </Link>*/}
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
		                <h1 className="m-0">Thông tin người giúp việc</h1>
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

                         {/* <div>
                            <Link to = "/nguoigv/new">
                                <button className="btn btn-success float-right">Thêm mới</button>
                            </Link>
                          </div>*/}
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
									<th className="text-center" scope="col">Mã NGV</th>
									<th className="text-center">Họ tên   
                                    </th>
									<th className=" text-center">Giới tính</th>
									<th className="text-center">Ngày sinh {''}
                        {sortDate===1?
                          <i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByDateAsc}/>
                          :<i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByDateDesc}/>
                        }
                        </th>
									<th className="text-center">SĐT</th>
									<th className="text-center">Quê quán</th>
                  {/*<th className="text-center">Điểm {' '}
                        {sortDiem===1?
                          <i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByDiemAsc}/>
                          :<i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByDiemDesc}/>
                        }
                  </th>*/}
									<th className="text-center"></th>
								</tr>
							</thead>
							<tbody>
								{ngvList}
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
export default listnguoigv;
