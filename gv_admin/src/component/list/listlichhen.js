import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Link,
  withRouter
} from "react-router-dom";

class listlichhen extends Component{

	constructor(props){
		super(props);
		this.state = {
			lhs:[],
			isLoading: true,
			nvs:[],
			ycs:[],
			hdthues: [],
			sortNgay: 0,
		};
		this.remove = this.remove.bind(this);
		this.sortByNgayAsc = this.sortByNgayAsc.bind(this);
		this.sortByNgayDesc = this.sortByNgayDesc.bind(this);
	}

	async componentDidMount(){
		this.setState({isLoading: true});

		const lh = await (await fetch('gvnhanh/lichhen')).json();
		const nv = await (await fetch('gvnhanh/nhanvien')).json();
		const yc = await (await fetch('gvnhanh/yeucau')).json();
		const hdthue = await (await fetch('gvnhanh/hdthue')).json();

		this.setState({
			lhs: lh,
			isLoading: false,
			nvs: nv,
			ycs: yc,
			hdthues: hdthue,
		})

		console.log("state", this.state)
	}

	sortByNgayAsc() {
      let lh = this.state.lhs.sort((a,b) => (a.ngay.localeCompare(b.ngay)));
      this.setState({
        lhs: lh,
        sortNgay: 0,
      })
      console.log("sort", this.state);
    }

    sortByNgayDesc() {
      let lh = this.state.lhs.sort((a, b) => (b.ngay.localeCompare(a.ngay)));
      this.setState({
        lhs: lh,
        sortNgay: 1,
      })
       console.log("sort", this.state);
    }

	async remove(id){

		await fetch(`/gvnhanh/lichhen/${id}`,{
			method: 'DELETE',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(() =>{
			let updateLichhen = [...this.state.lhs].filter(i => i.idlichhen !== id);
			this.setState({lhs: updateLichhen});
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
          month: "numeric",
          day: "2-digit"
        });	

	render(){

		const {lhs, isLoading, nvs, ycs, hdthues, sortNgay} = this.state;

		if (isLoading) {
            return <p className="text-primary align-middle text-center">
                    <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
                    Loading...
           

                  </p>;
        }

        const lhList = lhs.map((lh, index)=>{
	        return <tr key={index}>
	        			<td className=" text-center">{lh.idlichhen}</td>
						<td className=" text-center">
							{ycs.map((yc,index)=>{
								if(yc.idyc===lh.idkh)
									return yc.hoten
							})}
						</td>
						<td className=" text-center">
							{nvs.map((nv,index)=>{
								if(nv.idnv===lh.idnv)
									return nv.hoten
							})}
						</td>
						<td className=" text-center">{lh.gio}</td>
						<td className=" text-center">{this.formatter.format(Date.parse(lh.ngay))}</td>
						<td className=" text-center">{lh.diachihen}</td>
						<td className=" text-center">
							<div class="btn-group" role="group" aria-label="Basic example">

		                    	<Link to={"/lichhen/"+lh.idlichhen}>
								  <button type="button" class="btn btn-outline-primary" title="Cập nhật">
								  	<i className="fas fa-pencil-alt" />
								  </button>	</Link>
								  
								

								{lh.hopdong===0?<Link to={"/hdthue/"+lh.idlichhen+`_new`}>
								  <button type="button" class="btn btn-outline-success" title="Ký hợp đồng">
								  	<i className="fas fa-calendar-check" />
								  </button>	</Link>
								  :null}

								<button type="button" class="btn btn-outline-danger" onClick={this.handleClick.bind(this,lh.idlichhen)} title="Xóa">
								  	<i className="fas fa-trash" />
								</button>
							</div> 
						</td>
					</tr>
        })

		return(
			<div className="content-wrapper">

				<div className="content-header">
		          <div className="container-fluid">
		            <div className="row mb-2">
		              <div className="col-sm-6">
		                <h1 className="m-0">Danh sách lịch hẹn</h1>
		              </div>{/* /.col */}
		              
		            </div>{/* /.row */}

		           

		          </div>{/* /.container-fluid */}
		        </div>

				{/* Page Heading */}
				<div className="content">
					<div className="container-fluid">
						<table className="table table-bordered table-hover table-inverse table-striped">
							<thead className="thead-dark">
								<tr className="">
									<th className="text-center" scope="col">Mã số</th>
									<th className="text-center">Họ tên KH</th>
									<th className="text-center">Họ tên NV</th>
									<th className="text-center">Giờ hẹn</th>
									<th className="text-center">Ngày hẹn {' '}
										{sortNgay===1?
					                      <i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByNgayAsc}/>
					                      :<i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByNgayDesc}/>
					                    }
									</th>
									<th className="text-center">Địa điểm</th>
									<th className="text-center"></th>
								</tr>
							</thead>
							<tbody>
								{lhList}
							</tbody>
						</table>
					</div>
				</div>
				
			</div>
		);
	}
}
export default listlichhen;
