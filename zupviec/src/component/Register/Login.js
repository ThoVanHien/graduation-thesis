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

class Login extends Component {

    emptyItem = {
        email: '',
        pass: ''
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
        let dn=null;
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name= target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item},async()=>{
            dn = await (await fetch(`/gvnhanh/khachhang/${item["email"]}/${item["pass"]}`)).json();

            console.log("dn", dn);
            if(dn===0){
                alert("Sai user hoặc password");
                this.nameInput.focus();
                // this.setState({
                //   item:{
                //     pass:''
                //   } 
                // });
            }
            else{
                this.props.history.push("/home")
            }
        });
        //const {item} = this.state;
        // let dn = await (await fetch(`/gvnhanh/khachhang/${item["email"]}/${item["pass"]}`)).json();
          

        // console.log("dn",`/gvnhanh/khachhang/${item["email"]}/${item["pass"]}`)

        //this.props.history.push('/nhanvien');
        //window.confirm("Bạn đã yêu cầu dịch vụ thành công. Nhân viên công ty sẽ liên lạc với bạn trong 24h");
        // confirmAlert({
        //   title: 'Tạo tài khoản thành công!',
        //   message: 'Quay lại trang chủ để đăng nhập',
        //   buttons: [
        //     {
        //       label: 'OK',
        //       onClick: () => this.props.history.push("/dangnhap")
           
        //     }
        //   ],
        //    childrenElement: () => null,
        //     closeOnClickOutside: true,
        //     closeOnEscape: true,
        //     willUnmount: () => null,
        //     onClickOutside: () => null,
        //     onKeypressEscape: () => null
        // });

        //this.props.history.push(`/dichvu/${this.props.match.params.id}`);
        //window.location.reload(false);
    }

    render() {

        const {item} = this.state;

        return (
            <div>
                <div className="container">
                    <div className="card bg-light">
                        <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
                        <h4 className="card-title mt-3 text-center">Đăng nhập khách hàng 
                            <br />
                            <span style={{color: '#881A7C', width: '50px', fontWeight: 1000}}>
                            GiupViecNhanh.com
                            </span>
                        </h4>
                    
                        <p className="divider-text" style={{textAlign: 'center'}} >
                            <span className="bg-light" >Tài khoản Giupviecnhanh.com</span>
                        </p>
                       {/* <p className="divider-text">
                            <span className="bg-light">OR Tài khoản Giupviecnhanh.com</span>
                        </p>*/}

                        <form  className="mt-5 mb-5" onSubmit={this.handleSubmit}>
                            <div className="form-group input-group" >
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                </div>
                                <input name="email" id="email" value={item.email || ''} onChange={this.handleChange}
                                className="form-control" placeholder="Email" type="email" required/>
                            </div>
                            <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                            </div>
                                <input name="pass" id="pass" value={item.pass || ''} onChange={this.handleChange}
                                className="form-control" placeholder="Mật khẩu" type="password" required
                                ref={(input) => { this.nameInput = input; }} />
                            </div>
                            {/* form-group// */}
                            <div className="form-group mt-4 mb-4">
                            <button type="submit" className="btn btn-primary btn-block">Đăng nhập</button>
                            </div>
                            {/* form-group// */}
                            <p className="text-center mb-5 mb-5">Quên mật khẩu ? <a href>Lấy lại mật khẩu</a> </p>
                        </form>
                        </article>
                    </div>
                    
                </div>
            </div>        
        );
    }
}

export default withRouter(Login);