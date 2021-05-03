import React, {Component} from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";

class listhdlaodong extends Component{

	
	render(){
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
									<th className="col-1 text-center" scope="col">Mã số</th>
									<th className="col-2 text-center">Họ tên NGV</th>
									<th className="col-2 text-center">Họ tên NV</th>
									<th className="text-center">Ngày ký</th>
									<th className="text-center">Ngày hết hạn</th>
									<th className="col-3 text-center">% lương</th>
								</tr>
							</thead>
							<tbody>
								<tr className="">
									<th className=" text-center">1</th>
									<th className=" text-center">2</th>
									<th className=" text-center">3</th>
									<th className=" text-center">4</th>
									<th className=" text-center">5</th>
									<th className=" text-center">6</th>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				
			</div>
		);
	}
}
export default listhdlaodong;
