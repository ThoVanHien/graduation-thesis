import React, {Component} from 'react';
import { useState } from "react";
import {
  Link,
  withRouter
} from "react-router-dom";
// import CurrencyFormat from 'react-currency-format';
import CurrencyInput from 'react-currency-input-field';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class danhgia extends Component{

	emptyDanhgia = {
		idnguoigv: '',
		thoigian: '',
		noidung: '',
	};

	constructor(props) {
		super(props);
		this.state = {
			danhgia: this.emptyDanhgia,
			ngv:'',
			listDanhgia: [],
			diem:'',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.diemChange  = this.diemChange.bind(this);
		this.them = this.them.bind(this);
	}

	async componentDidMount() {
		const dg = await (await fetch(`/gvnhanh/danhgia/getid/${this.props.match.params.id}`)).json();
		const nguoigv = await (await fetch(`/gvnhanh/nguoigv/${this.props.match.params.id}`)).json();
		this.setState({
			listDanhgia: dg,
			ngv: nguoigv,
			diem: nguoigv.diem
		});
		
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let danhgia = {...this.state.danhgia};
		danhgia[name] = value;
		this.setState({danhgia});

		//console.log("state", this.state)

		// this.setState({[event.target.id]: event.target.value});
		
		 // this.setState({
	  //     input: event.target.value
	  //   });
	}

	diemChange(event){
		const target = event.target;
		const value = target.value;
		let diem = {...this.state.diem};
		diem = value;
		this.setState({
			diem
		})
		console.log("diem", this.state.diem)
	}

	async handleSubmit() {
		const {diem} = this.state;
		await fetch(`/gvnhanh/nguoigv/updiem/${this.props.match.params.id}/${diem}`, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		});
		this.props.history.push('/nguoigv');		
	}

	async them(){
		const {danhgia} = this.state;
		this.state.danhgia["idnguoigv"] = this.props.match.params.id;
		let today = new Date();
		let year = today.getFullYear();
		let month = today.getMonth()+1;
		let date = today.getDate();
		if (month < 10) 
	        month = '0' + month;
	    if (date < 10) 
	        date = '0' + date;
		this.state.danhgia["thoigian"] = year+'-'+month+'-'+date;
		//console.log("danhgia", this.state.danhgia)
		await fetch('/gvnhanh/danhgia', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(danhgia),
		});
		this.setState({
			danhgia:{
				noidung:''
			}
		})
		this.componentDidMount();
	}

	formatter = new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        });

	async remove(id) {
        await fetch(`/gvnhanh/danhgia/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
           let updateDanhGia = [...this.state.listDanhgia].filter(i => i.iddg !== id);
           this.setState({listDanhgia: updateDanhGia});
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

	render(){

		const {listDanhgia, danhgia, ngv, diem} = this.state;
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">Đánh giá</h1>;
		const listdg = listDanhgia.map((dg, index)=>{
			return <tr key={dg.iddg}>
	            <th scope="row" className="text-center">{index+1}</th>
	            <td className="text-center">{this.formatter.format(Date.parse(dg.thoigian))}</td>
	            <td className="">{dg.noidung}</td>
	            <td className="text-center">
	            	<div className="btn-group" role="group" aria-label="Basic example">
						<button type="button" className="btn btn-outline-danger" onClick={this.handleClick.bind(this,dg.iddg)} title="Xóa">
							<i className="fas fa-trash" />
						</button>
					</div> 
	            </td>
	          </tr>
		});
		//console.log("item", item.hinhanh)
		
		return(
			<div className="content-wrapper">
				<div className="content-header">
		          <div className="container-fluid">
		            <div className="row ">
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
				          <div className="card-header">
				                <h3 className="card-title">{ngv.hoten}</h3>
				            </div>

				           
				             
				             <div>
				                <div className="card-body">

				                 <div className="row">
				                		<div className="input-group mb-3">
										  <div className="input-group-prepend">
										    <span className="input-group-text" id="basic-addon1">Điểm</span>
										  </div>
										  <input type="number" min="0" step="0.5" max="10" className="form-control col-md-2 text-center" value={diem || ''}
										  onChange = {this.diemChange}/>
										</div>
				                	</div>

				                  <div className="row">
						                <div className="input-group mb-3">    	
										    <input type="text" className="form-control col-md-8" placeholder="Nội dung đánh giá" aria-label="Recipient's username" aria-describedby="basic-addon2"
										    name="noidung" id="noidung" value={danhgia.noidung || ''} onChange={this.handleChange}/>
										 	<div className="input-group-append">
											    <button className="btn btn-success " id="basic-addon2" onClick={this.them}>Thêm</button>
											</div>
										</div>				             
				                  </div>
				                
				                <table className="table table-bordered table-hover table-inverse table-striped">
									<thead className="thead-light">
										<tr className="">
											<th className="text-center" scope="col">STT</th>
											<th className="text-center">Thời gian</th>
											<th className="text-center">Nội dung</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{listdg}
									</tbody>
								</table>

				                </div>
				                <div className="card-footer d-flex justify-content-center">
				                  <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
				                  <Link to="/nguoigv"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>
				                </div>
				              </div>
				            </div>
					</div>
				</div>
			
			</div>
		);
	}
}
export default withRouter(danhgia);
