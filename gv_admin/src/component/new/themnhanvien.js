import React, { Component } from 'react';
import { useState } from "react";
import {
	Link,
	withRouter
} from "react-router-dom";
// import CurrencyFormat from 'react-currency-format';
import CurrencyInput from 'react-currency-input-field';
import { withGlobalState } from 'react-globally';

class themnhanvien extends Component {

	emptyItem = {
		hoten: '',
		gioitinh: '',
		ngaysinh: '',
		sdt: '',
		cmnd: '',
		luong: '',
		hinhanh: ''
	};

	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem,
			luong: '', 
			image:'',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangePhone = this.handleChangePhone.bind(this);
		this.onChangePicture = this.onChangePicture.bind(this);
		this.numberChange = this.numberChange.bind(this);
	}

	async componentDidMount() {
		if (this.props.match.params.id !== 'new') {
			const nv = await (await fetch(`/gvnhanh/nhanvien/${this.props.match.params.id}`)).json();
			this.setState({
				item: nv,
				picture: nv.hinhanh,
				luong: nv.luong
			});

		}

	}

	onChangePicture(e) {

		//    var file = e.target.files[0]
		//    let reader = new FileReader()
		//    for(let i=0;i<file.length;i++){
		//    reader.readAsDataURL(file[i]);
		// }
		//    reader.onload = () => {
		//      this.setState({
		//        Picture: reader.result
		//      })
		//    };
		//    reader.onerror = function (error) {
		//      console.log('Error: ', error);
		//    } 
		//    console.log("st", this.state)
		// binaryData.push(e.target.files[0]); 
		// image.src = URL.createObjectURL(new Blob(binaryData, {type: "application/zip"})) 
		// this.setState({
		// 	// Picture: URL.createObjectURL(e.target.files[0]),
		// })
	}

	onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			// this.setState({
			//   image: URL.createObjectURL(img)
			// });
			this.setState({
				// picture: URL.createObjectURL(img)
				picture: URL.createObjectURL(img),
				image: img
			})
			console.log("image", this.state.picture)

			
		      // this.setState({
		      // 	picture: URL.createObjectURL(img),
		      // 	image: img
		      // })
		}
	};

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		let item = { ...this.state.item };
		item[name] = value;
		this.setState({ item });

		//console.log("state", this.state)

		// this.setState({[event.target.id]: event.target.value});

		// this.setState({
		//     input: event.target.value
		//   });
	}

	numberChange(val) {
		let { luong } = this.state;
		this.setState({
			luong: val
		})
		this.state.item.luong = val;
	}

	async handleSubmit(event) {
		event.preventDefault();
		//alert('xxx');

		const { item, picture, image } = this.state;
		if (this.state.item.gioitinh === '') {
			this.state.item.gioitinh = 'Nam';

		}

		
		console.log("item", image)
		
		if(item['idnv']){
			// await fetch(`/gvnhanh/api/${this.props.match.params.id}`, {
			// 	method:'PUT',
			// 	headers: {
			// 		'Accept': 'application/json',
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify(item),
			// });
			if(image==''){
				await fetch(`/gvnhanh/nhanvien/${this.props.match.params.id}`, {
					method: 'PUT',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(item),
				});
			}
			else{
				this.state.item.hinhanh = image;
				const formData = new FormData();
				formData.append('hinhanh', item['hinhanh']);
				formData.append('hoten', item['hoten']);
				formData.append('ngaysinh', item['ngaysinh']);
				formData.append('sdt', item['sdt']);
				formData.append('cmnd', item['cmnd']);
				formData.append('luong', item['luong'])
				formData.append('gioitinh', item['gioitinh'])
				fetch(`/gvnhanh/api/${this.props.match.params.id}`, {
					method: 'PUT',
					body: formData
				})
					.then(response => response.json())
					.then(result => {
						console.log('Success:', result);
					})
					.catch(error => {
						console.error('Error:', error);
					});
			}		
		}
		else{
			this.state.item.hinhanh = image;
			const formData = new FormData();
			formData.append('hinhanh', item['hinhanh']);
			formData.append('hoten', item['hoten']);
			formData.append('ngaysinh', item['ngaysinh']);
			formData.append('sdt', item['sdt']);
			formData.append('cmnd', item['cmnd']);
			formData.append('luong', item['luong'])
			formData.append('gioitinh', item['gioitinh'])
			fetch('/gvnhanh/api', {
				method: 'POST',
				body: formData
			})
				.then(response => response.json())
				.then(result => {
					console.log('Success:', result);
				})
				.catch(error => {
					console.error('Error:', error);
				});
		}
		
		this.props.history.push('/nhanvien');
		console.log("item", item)

	}

	handleChangePhone(e) {
		if (e.target.value.match("^[a-zA-Z ]*$") != null) {
			this.setState({ item: e.target.value });
		}
	}

	// changePicture(){
	// 	const [picture, setPicture] = useState('');
	// 	  const onChangePicture = e => {
	// 	    console.log('picture: ', picture);
	// 	    setPicture(URL.createObjectURL(e.target.files[0]));
	// 	  };
	// }
	render() {

		const { item, picture, luong } = this.state;
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">{item.idnv ? 'C???p nh???t nh??n vi??n' : 'Th??m nh??n vi??n'}</h1>;
		//console.log("item", item.hinhanh)


		return (
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
									<div className="form-group">
										<label for="exampleInputEmail1">H??? t??n nh??n vi??n</label>
										<input type="text" className="form-control" name="hoten" id="hoten" value={item.hoten || ''}
											onChange={this.handleChange} placeholder="" required />
									</div>

									<div class="row">
										<div class="col">
											<div className="form-group">
												<label for="exampleInputPassword1">Gi???i t??nh</label>
												<select className="form-control col-md-8" name="gioitinh" id="gioitinh" value={item.gioitinh || ''} onChange={this.handleChange}>
													<option>Nam</option>
													<option>N???</option>
													<option>Kh??c</option>
												</select>
											</div>
										</div>

										<div class="col">
											<div className="form-group">
												<label for="exampleInputPassword1">Ng??y sinh</label>
												<input type="date" className="form-control col-md-8" name="ngaysinh" id="ngaysinh" value={item.ngaysinh || ''}
													onChange={this.handleChange} placeholder="" />
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col">
											<div className="form-group">
												<label for="exampleInputPassword1">S??? ??i???n tho???i</label>
												<input type="text" className="form-control col-md-8" name="sdt" id="sdt" value={item.sdt || ''}
													onChange={this.handleChange} pattern="[0-9]{10}" placeholder="" title="H??y nh???p ????ng 10 ch??? s??? ??i???n tho???i" />
											</div>
										</div>
										<div class="col">
											<div className="form-group">
												<label for="exampleInputPassword1">CMND</label>
												<input type="text" className="form-control col-md-8" name="cmnd" id="cmnd" value={item.cmnd || ''}
													onChange={this.handleChange} pattern="[0-9]{9}" placeholder="" title="H??y nh???p ????ng 9 ch??? s??? cmnd" />
											</div>
										</div>
									</div>
									{localStorage.getItem("login")== 1 ?
										<div className="form-group">
											<label for="exampleInputPassword1">L????ng</label>
											<div class="input-group mb-3 col-md-4">
												{/*<input type="number" className="form-control" name="luong" id="luong" min="0" value={item.luong || ''}
											onChange={this.handleChange} pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"/>*/}
												<CurrencyInput className="form-control"
													name="luong" id="luong" value={luong}
													onChange={(value, name) => this.numberChange(value)}
													decimalSeparator=","
													groupSeparator="."
												/>
												<div class="input-group-append">
													<span class="input-group-text" id="basic-addon2">VN??</span>
												</div>
											</div>
										</div>
										: <div className="form-group">
											<label for="exampleInputPassword1">L????ng</label>
											<div class="input-group mb-3 col-md-4">
												{/*<input type="number" className="form-control" name="luong" id="luong" min="0" value={item.luong || ''}
											onChange={this.handleChange} pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"/>*/}
												<CurrencyInput className="form-control"
													name="luong" id="luong" value={luong}
													onChange={(value, name) => this.numberChange(value)}
													decimalSeparator=","
													groupSeparator="." disabled
												/>
												<div class="input-group-append">
													<span class="input-group-text" id="basic-addon2">VN??</span>
												</div>
											</div>
										</div>}


									<div className="form-group">
										<label for="exampleInputPassword1">H??nh ???nh</label>
										<input type="file" className="form-control-file col-md-8"
											onChange={this.onImageChange} placeholder="" />
										<div className="previewProfilePic" >
											<img className="playerProfilePic_home_tile w-25 h-25" src={picture} alt="" />
										</div>
									</div>

								</div>
								<div className="card-footer">
									<button type="submit" className="btn btn-primary">Save</button>
									<Link to="/nhanvien"><button type="submit" className="btn btn-danger ml-4">Cancel</button></Link>
								</div>
							</form>
						</div>
					</div>
				</div>

			</div>
		);
	}
}
export default withGlobalState(withRouter(themnhanvien));