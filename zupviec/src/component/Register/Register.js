import React, { Component } from 'react';
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

class Register extends Component {

    emptyItem = {
        hoten: '',
        sdt: '',
        email: '',
        pass: '',
        repass:''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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

        if(item["pass"]!==item["repass"]){
            alert("Password nhập lại không giống nhau!")
        }
        else{

            await fetch('/gvnhanh/khachhang', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });

        //this.props.history.push('/nhanvien');
        //window.confirm("Bạn đã yêu cầu dịch vụ thành công. Nhân viên công ty sẽ liên lạc với bạn trong 24h");
        
            confirmAlert({
              title: 'Tạo tài khoản thành công!',
              message: 'Hãy đăng nhập tài khoản đã đăng ký!',
              buttons: [
                {
                  label: 'OK',
                  onClick: () => this.props.history.push("/dangnhap")
               
                }
              ],
               childrenElement: () => null,
                closeOnClickOutside: true,
                closeOnEscape: true,
                willUnmount: () => null,
                onClickOutside: () => null,
                onKeypressEscape: () => null
            });

        //this.props.history.push(`/dichvu/${this.props.match.params.id}`);
        //window.location.reload(false);
        }
    }

    render() {

        const {item} = this.state;

        return (
            <div className="container">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
                    <h4 className="card-title mt-3 text-center">Đăng ký trở thành khách hàng
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
                            <input name="hoten" id="hoten" value={item.hoten || ''} className="form-control" 
                            placeholder="Tên khách hàng" onChange={this.handleChange} type="text" required/>
                            </div>
                        {/* form-group// */}
                        <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                        </div>
                            <input name="email" id="email" value={item.email || ''} className="form-control" 
                            placeholder="Email" type="email" onChange={this.handleChange} required/>
                        </div>
                        {/* form-group// */}
                       
                        {/* form-group// */}
                        <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                        </div>
                            <select className="custom-select" style={{maxWidth: '120px'}}>
                                <option selected>+84</option>
                                <option value={1}>+972</option>
                                <option value={2}>+198</option>
                                <option value={3}>+701</option>
                            </select>
                            <input name="sdt" id="sdt" value={item.sdt || ''} className="form-control" 
                            placeholder="Phone number" onChange={this.handleChange} type="text" required/>
                        </div>
                        {/* form-group// */}
                       
                        {/* form-group end.// */}
                        <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                        </div>
                            <input name="pass" id="pass" value={item.pass || ''} className="form-control" 
                            placeholder="Mật khẩu" onChange={this.handleChange} type="password" required/>
                        </div>
                        {/* form-group// */}
                        <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                        </div>
                            <input name="repass" id="repass" value={item.repass || ''} className="form-control" 
                            placeholder="Nhập lại mật khẩu" onChange={this.handleChange} type="password" />
                        </div>
                        {/* form-group// */}
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Create Account </button>
                        </div>
                        {/* form-group// */}
                        <p className="text-center">Đã có tài khoản ? <Link to="/dangnhap">Đăng nhập</Link> </p>
                    </form>
                    </article>
                </div>
            </div>

        );
    }
}

export default withRouter(Register);