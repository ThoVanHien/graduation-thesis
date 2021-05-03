import React, { Component, useEffect } from 'react';
import { AvForm, AvField, ValidatingFormGroup } from 'availity-reactstrap-validation';

import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';

import {
 BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import { 
    Button, 
    Container, 
    Form, FormGroup, 
    Input, 
    Label, 
    FormFeedback, FormText, 
    InputGroup, InputGroupAddon } from 'reactstrap';

class RegisterStaff extends Component {

    emptyItem = {
        hoten: '',
        gioitinh: '',
        ngaysinh: '',
        sdt: '',
        cmnd: '',
        quequan:'',
        hinhanh: '',
        del: '',
        hopdong: '',
        ungtuyen: '',
        idloaidv: '',
        lat: '',
        lng: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            dichVus: []
        };
        this.map = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showmap = this.showmap.bind(this);
        this.log = this.log.bind(this);
        //this.initMap = this.initMap.bind(this);
    }

    async componentDidMount(){
        window.scrollTo(0, 0);
        const dv = await (await fetch('/gvnhanh/loaidv')).json();
        this.setState({
           dichVus:dv      
        });
        // this.showmap();

        // console.log("dv", this.state.dichVus[0].tenloai);
    }

    showmap(){
        const map = new window.google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: { lat: -34.397, lng: 150.644 }, //tọa độ ban đầu
          });
    }

    laytoado = () => {
        const {item} = this.state;
        const geocoder = new window.google.maps.Geocoder();
        const address = item['quequan'];
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

    log(){
        console.log("ok")
    }
   
    // initMap(){
    //     const map = new window.google.maps.Map(this.refs.map?.getDOMNode(), {
    //       zoom: 12,
    //       center: { lat: -34.397, lng: 150.644 },
    //     });
    //     const geocoder = new window. google.maps.Geocoder();
    //     console.log("map", map)
    //     // document.getElementById("submit").addEventListener("click", () => {
    //     //   geocodeAddress(geocoder, map);
    //     // });
    //   }

    // geocodeAddress(geocoder, resultsMap) {
    //     // const address = document.getElementById("sonha").value + "," + document.getElementById("duong").value + "," + document.getElementById("phuong").value + "," + document.getElementById("quan").value + "," + document.getElementById("quan").value ;
    //     // geocoder.geocode({ address: address }, (results, status) => {
    //     //   if (status === "OK") {
        
    //     //     resultsMap.setCenter(results[0].geometry.location);
    //     //     new google.maps.Marker({
    //     //       map: resultsMap,
    //     //       position: results[0].geometry.location,
    //     //     });

    //     // const LatLng = results[0].geometry.location.toJSON();
    //     // console.log(LatLng);
    //     // $("#txtLat").val(LatLng.lat);
    //     //         $("#txtLng").val(LatLng.lng);
    //     // $("#InputToaDo").val(LatLng.lat + "," + LatLng.lng);
    //     //         $("#InputBanDo").val(`https://maps.google.com/maps?q=${LatLng.lat.toFixed(6)},${LatLng.lng.toFixed(6)}&z=15&output=embed&hl=vi`);
    //     //   } else {
    //     //     alert(
    //     //       "Geocode was not successful for the following reason: " + status
    //     //     );
    //     //   }
    //     // });
    //   }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name= target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        const {dichVus} = this.state;
        this.state.item.del='0';
        this.state.item.hopdong='0';
        this.state.item.ungtuyen='1';

        if(this.state.item.idloaidv===''){
            //alert("loi")
            this.state.item.idloaidv= this.state.dichVus[0].idloaidv;
        }
        //console.log("item", item);

        

        await fetch('/gvnhanh/nguoigv', {
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

        console.log("item", item)

        //this.props.history.push('/home');
        //window.location.reload(false);
    }

    render() {

        const {item} = this.state;
        const {dichVus} = this.state;

        return (

            <div className="container">

                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{maxWidth: '500px'}}>
                    <h4 className="card-title mt-3 text-center">Đăng ký trở thành NHÂN VIÊN 
                    <br />
                        <span style={{color: '#881A7C', width: '50px', fontWeight: 1000}}>
                        GiupViecNhanh.com
                        </span>
                    </h4>
                    <p className="text-center">Các bước chuẩn bị đăng ký</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user" /> </span>
                        </div>
                            <input name="hoten" id="hoten" value={item.hoten ||''} type="text" onChange={this.handleChange}
                            className="form-control" placeholder="Họ tên" type="text" required/>
                        </div>
                        {/* form-group// */}
                        
                        {/* form-group// */}
                        <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                        </div>
                           <input name="quequan" id="quequan" value={item.quequan ||''} onChange={this.handleChange}
                            onBlur = {this.laytoado}className="form-control" placeholder="Địa chỉ" type="text" required/>
                            
                            </div>
                        {/* form-group// */}
                        {/* form-group// */} 
                        <div className="title-form-service mb-1">
                        <span>
                            Ngày sinh
                        </span>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user" /> </span>
                            </div>
                            <input name="ngaysinh" id="ngaysinh" value={item.ngaysinh ||''} type="text"onChange={this.handleChange}
                             className="form-control" placeholder="Đặt dịch vụ" type="date" required/>
                        </div> 
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                            </div>
                           
                            <input name="sdt" id="sdt" value={item.sdt ||''} type="text"onChange={this.handleChange}
                             className="form-control" placeholder="Số điện thoại" type="text" 
                             title="Hãy nhập đúng 10 chữ số điện thoại" pattern="[0-9]{10}" required/>
                        </div>
                        {/* form-group// */}
                        <span>
                            Công việc
                        </span>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-building" /> </span>
                            </div>
                            <Input type="select" className="form-control" name="idloaidv" id="idloaidv" value={item.idloaidv ||''} 
                            onChange={this.handleChange} required>
                                {this.state.dichVus.map((dv, index) => (
                                    <option value={dv.idloaidv}>{dv.tenloai}</option>
                                ))}*
                            </Input>
                        </div>
                       
                       

                        {/* form-group end.// */}
                       
                        {/* form-group// */}
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">GỬI ĐĂNG KÝ</button>
                        </div>
                        {/* form-group// */}

                        
                       {/*<div id="map" style={{height: 500}}></div>*/}
                    </form>
                    </article>

                    {/*<input ref="diachi" type="text"/>
                <button onClick={() => this.laytoado()}>lay toa do</button>*/}

                </div>
            </div>

        );
   
    }
}

export default withRouter(RegisterStaff);