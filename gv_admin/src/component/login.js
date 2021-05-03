import React, {Component} from 'react';
import style from './login.css';
import {
 BrowserRouter as Router,
  Link,
  withRouter
} from "react-router-dom";
import { withGlobalState } from 'react-globally';

class login extends Component{
   emptyItem = {
        sdt: '',
        pass: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        const rmb = localStorage.getItem("login");
        if(rmb === 'true'){
          console.log("ok")
        }
        console.log("st", localStorage.getItem("login"))
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
        //console.log("link", `/gvnhanh/taikhoan/${item["sdt"]}/${item["pass"]}`);
        if(item["sdt"]=='' || item["pass"]==''){
            alert("Sai user hoặc password");
                this.nameInput.focus();
        }
        else{
          this.setState({item},async()=>{
              dn = await (await fetch(`/gvnhanh/taikhoan/check/${item["sdt"]}/${item["pass"]}`)).json();

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
                  this.props.setGlobalState({ 
                    counter: dn,
                    sdt: item["sdt"]
                  });
                  localStorage.setItem("login", dn);
                  localStorage.setItem("sdt", item["sdt"])
                  console.log("log", localStorage.getItem("login"))
                  console.log("props", this.props)
                  //this.props.history.push("/dashboard");
                  //window.location.reload();
              }
          });
        }
    }
    handleClick(){
        this.props.setGlobalState({ counter: 1 });
        console.log("props",this.props)
        this.props.history.push("/dashboard");
    }

  render(){

    const {item} = this.state;

    return(
      <div className="container fadeInDown">
        {/*<div className=" wrapper-center fadeInDown">
           <div id="formContent">
            
             <div className="fadeIn first mb-2">
               <img src="user-login.png" id="icon" alt="User Icon" className="img-size-40 mr-3 img-circle"/>
             </div>

             <form>
               <input type="text" id="login" className="fadeIn second mb-2 login-input" name="login" placeholder="Username"/>
               <input type="password" id="password" className="fadeIn third mb-2 login-input"  name="login" placeholder="Password"/>
               <button onClick={this.handleClick} className="fadeIn fourth login-btn" value="Log In">Login</button>
             </form>

             <div id="formFooter">
               <a className="underlineHover" href="#">Forgot Password?</a>
             </div>

           </div>
         </div>*/}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* Nested Row within Card Body */}
                  <div className="row">
                   {/* <div className="col-lg-6 d-none d-lg-block bg-login-image" />*/}
                   <img src="user-login.png" className="img-fluid "/>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <form className="user" onSubmit={this.handleSubmit}>
                          <div className="form-group"  >
                            <input type="text" name="sdt" id="sdt" value={item.sdt || ''} onChange={this.handleChange}
                            className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Username..." />
                          </div>
                          <div className="form-group">
                            <input type="password" name="pass" id="pass" value={item.pass || ''} onChange={this.handleChange}
                            className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" 
                            ref={(input) => { this.nameInput = input; }}/>
                          </div>
                         {/* <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input type="checkbox" className="custom-control-input" id="customCheck" />
                              <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                            </div>
                          </div>*/}
                          <button type="submit" className="btn btn-primary btn-user btn-block">
                            Login
                          </button>
                        </form>

                        
                        <hr />
                        <div className="text-center">
                          <a className="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>   
    );
  }
}

export default withGlobalState(withRouter(login));
