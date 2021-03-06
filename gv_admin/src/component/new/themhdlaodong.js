import React, {Component} from 'react';
import {
  Link,
  withRouter
} from "react-router-dom"; 

class themhdlaodong extends Component{

	emptyNgv = {
		hoten: '',
		gioitinh: '',
		ngaysinh: '',
		sdt: '',
		cmnd: '',
		quequan:'',
		hinhanh: '',	
		del:'',
		hopdong:'',
		ungtuyen:'',
		idloaidv:''
	};

	emptyHdong = {
		idnguoigv:'',
		idnv:'',
		suckhoe:'',
		ngayky:'',
		ngayhethan:'',
		phantramluong:'',
		kinhnghiem:'',
	}


	constructor(props) {
		super(props);
		this.state = {
			ngv: this.emptyNgv,
			nhanViens:[],
			dichVus:[],
			hopdong: this.emptyHdong,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount() {
		const [idNgv, idHddk] = this.props.match.params.id.split('_');
		if (idHddk !== 'new') {
			const hd = await (await fetch(`/gvnhanh/hopdongdk/${idNgv}`)).json();
			this.setState({hopdong: hd})

			const ngv = await (await fetch(`/gvnhanh/nguoigv/${hd.idnguoigv}`)).json();
			this.setState({ngv: ngv})
		}
		else{
			const ngv = await (await fetch(`/gvnhanh/nguoigv/${idNgv}`)).json();
			//this.setState({item: ngv});
			this.setState({
				ngv: ngv
			})
		}

		const nv = await (await fetch(`/gvnhanh/nhanvien`)).json();
		this.setState({
			nhanViens:nv
		})
		const dv = await (await fetch(`/gvnhanh/loaidv`)).json();
		this.setState({
			dichVus:dv
		})

		//console.log("state", this.state.nhanViens)

	}

	async handleChange(event) {
		const [idNgv, idHddk] = this.props.match.params.id.split('_');
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let hopdong = {...this.state.hopdong};
		hopdong[name] = value;
		this.setState({hopdong});

		//console.log("id",item);
		
		var months = ["01", "02", "03", "04", "05", "06", "07",
         "08", "09", "10", "11", "12"];

		var d = new Date();

		var namedMonth = months[d.getMonth()];
		let ng;
		if(d.getDate()<10){
			ng = `${d.getFullYear()}-${namedMonth}-0${d.getDate()}`;
		}
		else{
			ng = `${d.getFullYear()}-${namedMonth}-${d.getDate()}`;
		}

		this.setState({hopdong}, async () => {
			
			console.log(this.state.hopdong["ngay"])
			if(idHddk==='new' && this.state.hopdong["ngayky"] && this.state.hopdong["ngayky"]<ng){
				alert("Kh??ng ???????c ch???n ng??y ???? qua!");
				this.setState({
					hopdong:{
						idnguoigv: hopdong["idnguoigv"],
						idnv: hopdong["idnv"],
						suckhoe: hopdong["suckhoe"],
						ngayky: '',
						ngayhethan: hopdong["ngayhethan"],
						phantramluong: hopdong["phantramluong"],
						kinhnghiem: hopdong["kinhnghiem"]
					}
				})
			}

			if (this.state.hopdong["ngayky"] && this.state.hopdong["ngayhethan"]){
				if(this.state.hopdong["ngayhethan"] < this.state.hopdong["ngayky"]){
				alert("Ng??y h???t h???n ph???i l???n h??n ng??y k??");
				this.setState({
					hopdong:{
						idnguoigv: hopdong["idnguoigv"],
						idnv: hopdong["idnv"],
						suckhoe: hopdong["suckhoe"],
						ngayky: hopdong["ngayky"],
						ngayhethan: '',
						phantramluong: hopdong["phantramluong"],
						kinhnghiem: hopdong["kinhnghiem"]
					}			
				})
			}
		}
		});

		
	}

	async handleSubmit(event) {
		event.preventDefault();
		const {ngv} = this.state;
		const {nhanViens} = this.state;
		const {hopdong} = this.state;

		const [idNgv, idHddk] = this.props.match.params.id.split('_');
		
		if(this.state.hopdong.idnv===''){
			this.state.hopdong.idnv=this.state.nhanViens[0].idnv;
		}

		console.log("ngv", ngv)
		console.log("hopdong", hopdong)

		if(idHddk==='new'){
			this.state.hopdong.idnguoigv=idNgv;

			this.state.ngv.hopdong='1';

			await fetch('/gvnhanh/hopdongdk', {
				method:'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(hopdong),
			});
			
			await fetch(`/gvnhanh/nguoigv/${idNgv}`, {
				method:'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(ngv),
			});
		}
		else{
			console.log("hd", hopdong)
			await fetch(`/gvnhanh/hopdongdk/${idNgv}`, {
				method:'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(hopdong),
			});
		}

		this.props.history.push('/hdlaodong');
		console.log("ngv", ngv)
		console.log("hopdong", hopdong)	
	}
	
	render(){

		const {ngv} = this.state;
		const {hopdong} = this.state;
		const {nhanViens} = this.state;
		const {dichVus} = this.state;
		const [idNgv, idHddk] = this.props.match.params.id.split('_');
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">{idHddk?'T???o':'C???p nh???t'} h???p ?????ng lao ?????ng</h1>;

		let date = new Date();
		date.getDate();

		return(
			<div className="content-wrapper">

				<div className="content-header">
		          <div className="container-fluid">
		            <div className="row mb-2">
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
				           {/* <div className="card-header">
				                <h3 className="card-title">Th??m lo???i d???ch v???</h3>
				            </div>*/}
				             
				             <form onSubmit={this.handleSubmit}>				             
				                <div className="card-body">
				                	<div className="row">
				                		<div className="col">
				                			<div className="form-group">
							                    <label for="exampleInputEmail1">H??? t??n</label>
							                    <input type="text" className="form-control col-md-12" name="hoten" id="hoten" value={ngv.hoten || ''}
												onChange={this.handleChange} />
							                </div>
							                  
							                <div class="form-row">
							                  	<div className="col">
								                	<div className="form-group ">
									                    <label for="exampleInputPassword1">Ng??y sinh</label>
									                    <input type="date" className="form-control col-md-10" name="ngaysinh" id="ngaysinh" value={ngv.ngaysinh || ''}
														onChange={this.handleChange}/>
									                 </div>
									            </div>
									            <div className="col">
									                 <div className="form-group ">
									                    <label for="exampleInputPassword1">Gi???i t??nh</label>
									                    <select className="form-control col-md-10 " name="gioitinh" id="gioitinh" value={ngv.gioitinh || ''} 
									                    onChange={this.handleChange} >
													      <option>Nam</option>
													      <option>N???</option>
													      <option>Kh??c</option>
													    </select>
									                  </div>
									            </div>
							                </div>

						                    <div className="form-row">
						                      <div className="col">
						                        <div className="form-group">
								                    <label for="exampleInputPassword1">S??? ??i???n tho???i</label>
								                    <input type="text" className="form-control col-lg-10" name="sdt" id="sdt" value={ngv.sdt || ''}
													onChange={this.handleChange}/>
								                </div>
						                      </div>
						                      <div className="col">
						                         <div className="form-group">
								                    <label for="exampleInputPassword1">CMND</label>
								                    <input type="text" className="form-control col-lg-10" name="cmnd" id="cmnd" value={ngv.cmnd || ''}
													onChange={this.handleChange}/>
								                 </div>
						                      </div>
						                    </div>				              							                  							                  			
							                 
							                  <div className="form-group">
							                    <label for="exampleInputPassword1">?????a ch???</label>
							                    <input type="text" className="form-control col-lg-12" name="quequan" id="quequan" value={ngv.quequan || ''}
													onChange={this.handleChange}/>
							                  </div>

							                  <div className="form-group">
							                    <label for="exampleInputPassword1">D???ch v??? ????ng k??</label>
							                    <div type="text" className="form-control">
							               		{dichVus.map((dv,index)=>{
							               			if(dv.idloaidv===ngv.idloaidv)
							               				return dv.tenloai
							               		})} 
							               	</div>
							                  </div>

				                		</div>

				                		<div className="col">
				                			 <div className="form-group">
							                    <label for="exampleInputPassword1">H??? t??n nh??n vi??n</label>
							                    <select className="form-control" name="idnv" id="idnv" 
							                    onChange={this.handleChange} >
							                    	{nhanViens.map((nv, index)=>(
							                    		<option value={nv.idnv}>{nv.hoten}</option>
							                    	))}
							                    </select>
							                  </div>
							                  <div className="form-group">
							                    <label for="exampleInputPassword1">T??nh tr???ng s???c kh???e</label>
							                    <input type="text" className="form-control" name="suckhoe" id="suckhoe" value={hopdong.suckhoe || ''}
							                    onChange={this.handleChange}/>
							                  </div>

							                  <div className="form-group">
							                    <label for="exampleInputPassword1">Kinh nghi???m</label>
							                    <input type="text" className="form-control" name="kinhnghiem" id="kinhnghiem" value={hopdong.kinhnghiem || ''}
													onChange={this.handleChange}/>
							                  </div>
							                   
							                  <div class="form-row">
							                      <div class="col">
							                        <div className="form-group">
									                    <label for="exampleInputPassword1">Ng??y k?? h???p ?????ng</label>
									                    <input type="date" className="form-control "name="ngayky" id="ngayky" value={hopdong.ngayky || ''}
							                    onChange={this.handleChange}/>
									                </div>
							                      </div>
							                      <div class="col">
								                    <div className="form-group">
									                    <label for="exampleInputPassword1">Ng??y h???t h???n</label>
									                    <input type="date" className="form-control" name="ngayhethan" id="ngayhethan" value={hopdong.ngayhethan || ''}
							                    onChange={this.handleChange}/>
									                </div>
							                      </div>
							                    </div>							         
							                  <div className="form-group">
							                    <label for="exampleInputPassword1">Ph???n tr??m l????ng</label>
							                    <div class="input-group mb-3 col-md-6">
												  <input type="number" min="0" max="100" className="form-control" name="phantramluong" id="phantramluong" value={hopdong.phantramluong || ''}
							                    onChange={this.handleChange}/>
												  <div class="input-group-append">
												    <span class="input-group-text" id="basic-addon2">%</span>
												  </div>
												</div>
							                  </div>
							                </div>
				                		</div>
				                	</div>

				                <div className="card-footer d-flex justify-content-center">
				                  <button type="submit" className="btn btn-primary ">Save</button>
				                  {idHddk==='new'?<Link to="/nguoigv"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>
				              		: <Link to="/hdlaodong"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>}
				                </div>
				             
				              </form>
				            </div>
					</div>
				</div>
				
			</div>
		);
	}
}
export default withRouter(themhdlaodong);
