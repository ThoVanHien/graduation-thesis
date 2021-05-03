import React, { Component } from 'react';
//import { AvForm, AvField, ValidatingFormGroup } from 'availity-reactstrap-validation';

import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';

import {
    Link,
    withRouter
} from "react-router-dom";

// import { 
//     Button, 
//     Container, 
//     Form, FormGroup, 
//     Input, 
//     Label, 
//     FormFeedback, FormText, 
//     InputGroup, InputGroupAddon } from 'reactstrap';

class RegisterServiceContain extends Component {

    emptyItem = {
        hoten: '',
        sdt: '',
        diachi: '',
        ngaylam: '',
        ngayketthuc: '',
        congviec: '',
        trangthai: 'Chưa duyệt',
        iddv: '',
        giolamviec:'',
        gioketthuc: '',
        lat: '',
        lng: '',
        thoigian: 1
    };

    emptyKh = {
        hoten: '',
        sdt: '',
        diachi: '',
        trangthai: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            dichVus: [],
            khachhang: this.emptyKh,
            loaiDVs: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const dv = await (await fetch(`/gvnhanh/bangphidv/${this.props.match.params.id}`)).json();
        const loaidv = await (await fetch(`/gvnhanh/loaidv/bpdv/${this.props.match.params.id}`)).json();
        this.setState({
            dichVus: dv,
            loaiDVs: loaidv,
        })

        console.log("this", this.state);
        window.scrollTo(0, 0);
    }

    async handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });

        var months = ["01", "02", "03", "04", "05", "06", "07",
            "08", "09", "10", "11", "12"];
        var d = new Date();
        var namedMonth = months[d.getMonth()];
        let ng;
        if (d.getDate() < 10) {
            ng = `${d.getFullYear()}-${namedMonth}-0${d.getDate()}`;
        }
        else {
            ng = `${d.getFullYear()}-${namedMonth}-${d.getDate()}`;
        }

        this.setState({ item }, async () => {
            if (this.state.item["ngaylam"] && this.state.item["ngaylam"] < ng) {
                alert("Không được chọn ngày đã qua!");
                this.setState({
                    item: {
                        hoten: this.state.item["hoten"],
                        sdt: this.state.item["sdt"],
                        diachi: this.state.item["diachi"],
                        ngaylam: '',
                        ngayketthuc: this.state.item["ngayketthuc"],
                        congviec: this.state.item["congviec"],
                        trangthai: 'Chưa duyệt',
                        iddv: this.state.item["iddv"],
                    }
                })
            }
            // if (this.state.item["ngayketthuc"] && this.state.item["ngayketthuc"] < ng) {
            //         alert("Không được chọn ngày đã qua!");
            //         this.setState({
            //             item: {
            //                 hoten: this.state.item["hoten"],
            //                 sdt: this.state.item["sdt"],
            //                 diachi: this.state.item["diachi"],
            //                 ngaylam: this.state.item["ngaylam"],
            //                 ngayketthuc: '',
            //                 congviec: this.state.item["congviec"],
            //                 trangthai: 'Chưa duyệt',
            //                 iddv: this.state.item["iddv"],
            //             }
            //         })
            //     }

            // if (this.state.item["ngaylam"] && this.state.item["ngayketthuc"] && this.state.item["ngaylam"]>this.state.item["ngayketthuc"]) {
            //         alert("Không được chọn ngày đã qua!");
            //         this.setState({
            //             item: {
            //                 hoten: this.state.item["hoten"],
            //                 sdt: this.state.item["sdt"],
            //                 diachi: this.state.item["diachi"],
            //                 ngaylam: this.state.item["ngaylam"],
            //                 ngayketthuc: this.state.item["ngaylam"],
            //                 congviec: this.state.item["congviec"],
            //                 trangthai: 'Chưa duyệt',
            //                 iddv: this.state.item["iddv"],
            //             }
            //         })
            //     }
        });
    }

    laytoado = () => {
        const {item} = this.state;
        const geocoder = new window.google.maps.Geocoder();
        const address = item['diachi'];
        geocoder.geocode({ address: address }, (results, status) => {
          if (status === "OK") {
              console.log(results[0].geometry.location.toJSON());
             
            this.state.item.lat = results[0].geometry.location.toJSON().lat;
            this.state.item.lng = results[0].geometry.location.toJSON().lng;
 
            } else {
            alert(
              "Geocode was not successful for the following reason: " + status
            );
          }
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;
        const { khachhang } = this.state;
        const {dichVus} = this.state;

        // var months = ["01", "02", "03", "04", "05", "06", "07",
        //     "08", "09", "10", "11", "12"];

        var d = new Date(item['ngaylam']);
        // var namedMonth = months[d.getMonth()];
        // let ng;
        // if (d.getDate() < 10) {
        //     ng = `${d.getFullYear()}-${namedMonth}-0${d.getDate()}`;
        // }
        // else {
        //     ng = `${d.getFullYear()}-${namedMonth}-${d.getDate()}`;
        // }

        if(dichVus.donvitinh==='Tháng'){ 
            let year = d.getFullYear();
            let month = d.getMonth()+1+ parseInt(item['thoigian']);
            console.log("date", month);
            if(month>12){
                month = month-12;
                year = year + 1;
            }
            this.state.item.ngayketthuc =   new Date(`${year}-${month}-${d.getDate()}`)
            console.log("tháng")
        }

        if(dichVus.donvitinh==='Ngày'){
            console.log("ngày", d.getDate()-1);
            console.log(typeof item['thoigian'])
            let day = d.getDate()+parseInt(item['thoigian'])-1;
            let month = d.getMonth()+1;
            if(day>31){
                day=day-31;
                month = month+1
            }
            this.state.item.ngayketthuc =  new Date(`${d.getFullYear()}-${month}-${day}`)
        }

        console.log("time", this.state.item)

        const sv = await (await fetch(`/gvnhanh/khachhang/sdt/${item["sdt"]}`)).json();
        console.log("sv", sv.length)
        if (sv.length !== 0) {
            confirmAlert({
                title: 'Cảnh báo!',
                message: 'Khách hàng không được đặt dịch vụ do đã vi phạm quy định. Liên hệ với công ty để biết thêm chi tiết!',
                buttons: [
                    {
                        label: 'OK',
                        onClick: () => this.props.history.push("/contact")

                    }
                ],
                childrenElement: () => null,
                closeOnClickOutside: true,
                closeOnEscape: true,
                willUnmount: () => null,
                onClickOutside: () => null,
                onKeypressEscape: () => null
            });
        }
        else {

            // this.setState({
            //     khachhang:{
            //         hoten: this.state.item["hoten"],
            //         sdt: this.state.item["sdt"],
            //         diachi: this.state.item["diachilamviec"],
            //         trangthai: false,
            //     }
            // })

            // this.state.khachhang.hoten = item["hoten"];
            // this.state.khachhang.sdt = item["sdt"];
            // this.state.khachhang.diachi = item["diachi"];
            // this.state.khachhang.trangthai = 1;
            // console.log("kh", khachhang);

            // await fetch('/gvnhanh/khachhang', {
            // method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(khachhang),

            // });

            await fetch('/gvnhanh/yeucau', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });

            confirmAlert({
                title: 'Yêu cầu thành công!',
                message: 'Nhân viên công ty sẽ liên lạc với bạn trong 24h.',
                buttons: [
                    {
                        label: 'OK',
                        onClick: () => window.location.reload(false)

                    }
                ],
                childrenElement: () => null,
                closeOnClickOutside: true,
                closeOnEscape: true,
                willUnmount: () => null,
                onClickOutside: () => null,
                onKeypressEscape: () => null
            });
        }

    }
    render() {


        const { item } = this.state;
        const { dichVus } = this.state;
        this.state.item.iddv = this.state.dichVus.iddv;
        const { loaiDVs } = this.state;
        return (
            <div>
                <div className="container">
                    <h1 className="mt-4" style={{ padding: '20px', textAlign: 'center' }}>
                        <span style={{ color: '#fc9e26' }}>
                            Đặt lịch
                    </span>
                        <small>
                            {/*<span style={{color: '#fb8533'}}>
                        {dichVus.tenloai}
                    </span>*/}
                        </small>
                    </h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to=""><a>Trang chủ</a></Link>
                        </li>
                        <li className="breadcrumb-item active"> {dichVus.tendv}</li>
                    </ol>
                    <div className="row">
                        <div className="col-md-5">

                            <img style={{ height: '500px',marginTop:'10px' }} className="img-fluid rounded mx-auto d-block " src={loaiDVs.anh} alt="ảnh" />

                        </div>
                        <div className="col-md-7">
                            <form onSubmit={this.handleSubmit}>
                                {/* form-khachhang */}
                                <div className="title-form-service">
                                    <span style={{ fontWeight: 700 }}>
                                        Tên khách hàng
                            <label htmlFor style={{ color: 'red' }}>*</label>
                                    </span>
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    </div>
                                    <input name="hoten" id="hoten" value={item.hoten || ''} className="form-control"
                                        placeholder="Nhập tên khách hàng" type="text" onChange={this.handleChange} required />
                                </div>
                                {/* ket thuc form-khách hàng */} {/* form-sodienthoai */}
                                <div className="title-form-service">
                                    <span style={{ fontWeight: 700 }}>
                                        Số điện thoại
                            <label htmlFor style={{ color: 'red' }}>*</label>
                                    </span>
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    </div>
                                    <input name="sdt" id="sdt" value={item.sdt || ''} className="form-control"
                                        placeholder="Nhập số điện thoại " type="text" onChange={this.handleChange}
                                        title="Hãy nhập đúng 10 chữ số điện thoại" pattern="[0-9]{10}" required />
                                </div>
                                {/* ket thuc form-khách hàng */} {/* form-dia chi */}
                                <div className="title-form-service">
                                    <span style={{ fontWeight: 700 }}>
                                        Địa chỉ
                            <label htmlFor style={{ color: 'red' }}>*</label>
                                    </span>
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    </div>
                                    <input name="diachi" id="diachi" value={item.diachi || ''} className="form-control"
                                        placeholder="Nhập địa chỉ" type="text" onChange={this.handleChange} onBlur={this.laytoado} required />
                                </div>
                                {/* ket thuc form-diachi */} {/* form-thoigian */}
                                <div className="row">
                                    <div class="col">
                                          <div className="title-form-service">
                                            <span style={{ fontWeight: 700 }}>
                                                        Chọn ngày bắt đầu
                                            <label htmlFor style={{ color: 'red' }}>*</label>
                                                    </span>
                                                </div>
                                                <div className="form-group input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                                    </div>
                                                    <input name="ngaylam" id="ngaylam" value={item.ngaylam || ''} className="form-control"
                                                        placeholder="Đặt dịch vụ" type="date" onChange={this.handleChange} required />
                                                </div>
                                    </div>
                                    <div class="col">
                                           {/* ket thuc form-diachi */} {/* form-thoigian */}
                                        <div className="title-form-service">
                                            <span style={{ fontWeight: 700 }}>
                                                Chọn thời gian làm
                                    <label htmlFor style={{ color: 'red' }}>*</label>
                                            </span>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                            </div>
                                            <input name="thoigian" id="thoigian" value={item.thoigian || ''} className="form-control text-center"
                                                type="number" min="0" onChange={this.handleChange} required />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> {dichVus.donvitinh} </span>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>

                                 <div className="title-form-service">
                                    <span style={{ fontWeight: 700 }}>
                                            Giờ làm
                                <label htmlFor style={{ color: 'red' }}>*</label>
                                        </span>
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                        </div>
                                        <input name="giolamviec" id="giolamviec" value={item.giolamviec || ''} className="form-control col-md-5"
                                        placeholder="Nhập địa chỉ" type="time" onChange={this.handleChange} required />
                                </div>
                                
                                
                                {/* ket thuc form-tgian */} {/* form-mota */}
                                <div className="title-form-service">
                                    <span style={{ fontWeight: 700 }}>
                                        Chi tiết công việc
                            <label htmlFor style={{ color: 'red' }}></label>
                                    </span>
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    </div>
                                    <textarea className="form-control" rows={3} name="congviec" id="congviec"
                                        value={item.congviec || ''} onChange={this.handleChange} />
                                </div>

                                {/* ket thuc form-mota */} {/* form-submit// */}
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> Đặt dịch vụ</button>
                                </div>
                            </form>
                        </div>
                        {/* /.row */}
                        <hr /> {/* card.// */}
                    </div>
                    {/* /.container */}
                </div>
            </div>
        );
    }
}

export default withRouter(RegisterServiceContain);