import React, {Component} from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";
import {loadTree} from "./treeviewhelper.js";
import { withGlobalState } from 'react-globally';

class sidebar extends Component{

  async componentDidMount(){
    loadTree();
  }

	render(){

		return(

			<aside className="main-sidebar sidebar-dark-primary elevation-4">
              {/* Brand Logo */}
              <Link to ="/dashboard"><a className="brand-link pointer">
                <img src="logo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-normal text-success">GV NHANH</span>
              </a></Link>
              {/* Sidebar */}
              <div className="sidebar">
                {/* Sidebar user panel (optional) */}
               {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                  </div>
                  <div className="info">
                    <a className="d-block pointer">Salemtim</a>
                  </div>
                </div>*/}
               
                {/* Sidebar Menu */}
                <nav className="mt-2">
                  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" id="pills-tab" role="tablist" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library */}
                    <li className="nav-item menu-open">
                    <Link to = "/dashboard" className="nav-link active pointer" data-toggle="pill">
                      <a>                    
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                          Dashboard       
                        </p>
                      </a>
                    </Link>
                    </li>                  
                    
                    <li className="nav-header">D???CH V???</li>

                      <li className="nav-item">
                       <Link to ="/loaidv"  className="nav-link pointer" data-toggle="pill" >
                        <a>
                          <i className="nav-icon far fa-calendar-plus" />
                         <p>
                            Lo???i d???ch v???
                          </p>
                        </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                      <Link to="/bangphidv" className="nav-link pointer" data-toggle="pill">
                        <a >
                          <i className="nav-icon far fa-list-alt" />
                          <p>
                            B???ng ph?? d???ch v???
                          </p>
                        </a>
                      </Link>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link pointer" data-toggle="pill">
                         <i className="nav-icon fas fa-chalkboard-teacher" />
                          <p>
                            Ng?????i gi??p vi???c
                          </p>
                          <i className="right fas fa-angle-left" />
                        </a>

                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                          <Link to="/nguoigv" className="nav-link pointer">
                            <a >                            
                                <i className="far fa-circle nav-icon text-primary" />
                                <p>Th??ng tin ng?????i GV</p>                          
                            </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                          <Link to = "/tuyendung" className="nav-link pointer">
                            <a >
                              <i className="far fa-circle nav-icon text-danger" />
                              <p>DS tuy???n d???ng</p>
                            </a>
                          </Link>
                          </li>
                         {/* <li className="nav-item">
                          <Link to="/hdlaodong" className="nav-link pointer">
                            <a>
                              <i className="far fa-circle nav-icon text-success" />
                              <p>H???p ?????ng lao ?????ng</p>
                            </a>
                          </Link>
                          </li>*/}
                        </ul>
                      </li>

                    <li className="nav-header">KH??CH H??NG</li>
                    <li className="nav-item">
                    <Link to="/khachhang" className="nav-link pointer" data-toggle="pill" >
                      <a >
                        <i className="nav-icon fas fa-users" />
                        <p>Kh??ch h??ng</p>
                      </a>
                    </Link>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link pointer" data-toggle="pill">
                        <i className="nav-icon fas fa-box-open" />
                        <p>?????t d???ch v???</p>
                        <i className="fas fa-angle-left right" />
                      </a>

                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <Link to="/yeucau" className="nav-link pointer">
                          <a>
                            <i className="far fa-circle nav-icon text-primary" />
                            <p>Y??u c???u</p>
                          </a>
                        </Link>
                        </li>
                       {/* <li className="nav-item">
                        <Link to="/lichhen" className="nav-link pointer">
                          <a >                         
                            <i className="far fa-circle nav-icon text-danger" />
                            <p>L???ch h???n</p>                     
                          </a>
                         </Link>
                        </li>*/}
                        <li className="nav-item">
                        <Link to="/hdthue" className="nav-link pointer">
                          <a >                         
                            <i className="far fa-circle nav-icon text-success" />
                            <p>H???p ?????ng thu?? DV</p>                         
                          </a>
                        </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-header">NH??N VI??N</li>
                  {localStorage.getItem("login")==1?
                    <li className="nav-item">
                     <Link to="/nhanvien" className="nav-link pointer" data-toggle="pill" >
                      <a >
                        <i className="nav-icon far fa-id-card" />
                        <p className="text">Nh??n vi??n</p>
                      </a>
                      </Link>
                    </li>
                  :null}
                  {localStorage.getItem("login")==1?
                    <li className="nav-item">
                     
                        <Link to="/taikhoan" className="nav-link pointer" data-toggle="pill">
                           <a >
                          <i className="nav-icon far fa-user-circle" />
                          <p>T??i kho???n</p>
                          </a>
                        </Link>
                      
                    </li>
                  :null}

                    
                  </ul>

                </nav>
                {/* /.sidebar-menu */}
              </div>
              {/* /.sidebar */}
            </aside>
		);
	}
}
export default withGlobalState(withRouter(sidebar));
