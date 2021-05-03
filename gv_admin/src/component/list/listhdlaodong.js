import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Link,
  withRouter
} from "react-router-dom";

class listhdlaodong extends Component{

	constructor(props) {
        super(props);
        this.state = {
          hdlds: [], 
          isLoading: true,
          nhanViens: [],
          ngvs: [],
          sortNgayky: 0,
          sortNgayhethan: 0,
        };
        this.sortByNgaykyAsc = this.sortByNgaykyAsc.bind(this);
        this.sortByNgaykyDesc = this.sortByNgaykyDesc.bind(this);
        this.sortByNgayhethanAsc = this.sortByNgayhethanAsc.bind(this);
        this.sortByNgayhethanDesc = this.sortByNgayhethanDesc.bind(this);
    }

    async componentDidMount() {
        this.setState({isLoading: true});

        fetch('gvnhanh/hopdongdk')
          .then(response => response.json())
          .then(data => this.setState({hdlds: data, isLoading: false}));

        const nv = await (await fetch('gvnhanh/nhanvien')).json();
        const ngv = await (await fetch('gvnhanh/nguoigv')).json();

        this.setState({
        	nhanViens: nv,
        	ngvs: ngv
        })
    }

    sortByNgaykyAsc() {
      let hdld = this.state.hdlds.sort((a,b) => (a.ngayky.localeCompare(b.ngayky)));
      this.setState({
        hdlds: hdld,
        sortNgayky: 0,
      })
      console.log("sort", this.state);
    }

    sortByNgaykyDesc() {
      let hdld = this.state.hdlds.sort((a, b) => (b.ngayky.localeCompare(a.ngayky)));
      this.setState({
        hdlds: hdld,
        sortNgayky: 1,
      })
    }

    sortByNgayhethanAsc() {
      let hdld = this.state.hdlds.sort((a,b) => (a.ngayhethan.localeCompare(b.ngayhethan)));
      this.setState({
        hdlds: hdld,
        sortNgayhethan: 0,
      })
      console.log("sort", this.state);
    }

    sortByNgayhethanDesc() {
      let hdld = this.state.hdlds.sort((a, b) => (b.ngayhethan.localeCompare(a.ngayhethan)));
      this.setState({
        hdlds: hdld,
        sortNgayhethan: 1,
      })
    }

     async remove(id) {
        await fetch(`/gvnhanh/hopdongdk/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
           let updateHdlaodong = [...this.state.hdlds].filter(i => i.idhddk !== id);
           this.setState({hdlds: updateHdlaodong});
        });
    }

    async handleClick(id){
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
          month: "numeric",
          day: "2-digit"
        });

	render(){

		const {hdlds, isLoading, nhanViens, ngvs, sortNgayky, sortNgayhethan} = this.state;

		if (isLoading) {
            return <p className="text-primary align-middle text-center">
                    <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
                    Loading...
                  </p>;
        }

        const hdldList = hdlds.map((hddk, index) => {
	          return <tr key={hddk.idhddk}>
	          	<td scope="row" className="text-center">{hddk.idhddk}</td>
	            <td className="text-center">
		            {ngvs.map((ngv,index)=>{
		            	if(ngv.idnguoigv===hddk.idnguoigv)
		            		return ngv.hoten
		            })}
	            </td>
	            <td className="text-center">
	            	 {nhanViens.map((nv,index)=>{
		            	if(nv.idnv===hddk.idnv)
		            		return nv.hoten
		            })}
	            </td>
	            <td className="text-center">{this.formatter.format(Date.parse(hddk.ngayky))}</td>
	            <td className="text-center">{this.formatter.format(Date.parse(hddk.ngayhethan))}</td>
	            <td className="text-center">{hddk.phantramluong}</td>
	            <td className="text-center">

	            	<div className="btn-group" role="group" aria-label="Basic example">
	                	<Link to={"/hdlaodong/"+hddk.idhddk}>
						  <button type="button" className="btn btn-outline-primary" title="Cập nhật">
						  	<i className="fas fa-pencil-alt" />
						  </button>
						</Link>

						{/*<button type="button" className="btn btn-outline-danger" onClick={this.handleClick.bind(this,ngv.idnguoigv)} title="Xóa">
							<i className="fas fa-trash" />
						</button>*/}
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
		                <h1 className="m-0">Danh sách hợp đồng lao động</h1>
		              </div>{/* /.col */}
		              
		            </div>{/* /.row */}

		            <div className="mb-4 pb-4">
						<Link to = "/hdlaodong/themhdlaodong">
							<button className="btn btn-success float-right">Thêm hợp đồng</button>
						</Link>
					</div>

		          </div>{/* /.container-fluid */}
		        </div>

				{/* Page Heading */}
				<div className="content">
					<div className="container-fluid">
						<table className="table table-bordered table-hover table-inverse table-striped">
							<thead className="thead-dark">
								<tr className="">
									<th className="text-center" scope="col">Mã số</th>
									<th className="text-center">Họ tên NGV</th>
									<th className="text-center">Họ tên NV</th>
									<th className="text-center">Ngày ký {''}
										{sortNgayky===1?
					                      <i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByNgaykyAsc}/>
					                      :<i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByNgaykyDesc}/>
					                    }
									</th>
									<th className="text-center">Ngày hết hạn {''}
										{sortNgayhethan===1?
					                      <i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByNgayhethanAsc}/>
					                      :<i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByNgayhethanDesc}/>
					                    }
									</th>
									<th className="text-center">% lương</th>
									<th className="text-center"></th>
								</tr>
							</thead>
							<tbody>
								{hdldList}
							</tbody>
						</table>
					</div>
				</div>
				
			</div>
		);
	}
}
export default listhdlaodong;
