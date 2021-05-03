import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import { withGlobalState } from 'react-globally';

class navbar extends Component{


  constructor(props){
    super(props);
    this.state = {
      ycs: [{hoten: 'A'}],
      count: 0,
      nvs: '',
      isLoading: true,
    }
    this.timer = this.timer.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  // async componentWillReceiveProps (newProps){
  //   const yc = await(await fetch('gvnhanh/yeucau/chuaduyet')).json();

  //   this.setState({
  //     ycs: yc,
  //     count: yc.length,
  //     isLoading: false,
  //   })
  // }

  async timer() {
    this.setState({isLoading: true});

    const yc = await(await fetch('http://localhost:3100/gvnhanh/yeucau/chuaduyet')).json();

    if(yc){
      this.setState({
        ycs: yc,
        count: yc.length,
        isLoading: false,
      })
    }
  }

  async componentDidMount(){
    // this.setState({isLoading: true});

    // const yc = await(await fetch('gvnhanh/yeucau/chuaduyet')).json();

    // this.setState({
    //   ycs: yc,
    //   count: yc.length,
    //   isLoading: false,
    // })

    this.intervalId = setInterval(this.timer.bind(this), 2000);

    const nv = await(await fetch(`gvnhanh/nhanvien/phone/${localStorage.getItem("sdt")}`)).json();
    this.setState({
      nvs: nv
    })

    console.log("nav", this.props.globalState.sdt)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  onLogout(){
    this.props.setGlobalState({ counter: 0 });
    this.props.history.push("/");
    localStorage.clear();
  }
   
	render(){

    const {ycs, count, nvs} = this.state;

    const list = ycs.map((yc, index) =>{
      return <div><a  className="dropdown-item pointer">
                <Link to = "/yeucau" className="text-color"> 
                  <i className="fas fa-exclamation-circle mr-2 text-success" /><strong> {yc.hoten}</strong> đã gửi yêu cầu
                </Link>
                {/*<span className="float-right text-muted text-sm">3 mins</span>*/}
               
              </a>
              <div className="dropdown-divider" />
              </div>
    })

		return(
			<nav className="main-header navbar navbar-expand navbar-white navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></a>
                </li>
                {/*<li className="nav-item d-none d-sm-inline-block">
                  <a className="nav-link pointer">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a className="nav-link pointer">Contact</a>
                </li>*/}
              </ul>
              {/* SEARCH FORM */}
              {/*<form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>*/}
              
              {/* Right navbar links */}
              <ul className="navbar-nav ml-auto">
                {/* Messages Dropdown Menu */}
               {/* <li className="nav-item dropdown">
                  <a className="nav-link pointer" data-toggle="dropdown" >
                    <i className="far fa-comments" />
                    <span className="badge badge-danger navbar-badge">{count}</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a className="dropdown-item pointer">
                      
                      <div className="media">
                        <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                          </h3>
                          <p className="text-sm">Call me whenever you can...</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                      </div>
                      
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item pointer">
                      
                      <div className="media">
                        <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                          </h3>
                          <p className="text-sm">I got your message bro</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                      </div>
                      
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item pointer">
                      
                      <div className="media">
                        <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                          </h3>
                          <p className="text-sm">The subject goes here</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                      </div>
                      
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item dropdown-footer pointer">See All Messages</a>
                  </div>
                </li>*/}
                {/* Notifications Dropdown Menu */}
                <li className="nav-item dropdown">
                  <a className="nav-link pointer" data-toggle="dropdown" >
                    <i className="far fa-bell text-gray-400" />
                    <span className="badge badge-warning navbar-badge">{count}</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right shadow animated--grow-in">
                    <span className="dropdown-item dropdown-header bg-secondary font-weight-bold" >{count} thông báo mới</span>
                    <div className="dropdown-divider" />
                   {/* <a  className="dropdown-item pointer">
                      <i className="fas fa-envelope mr-2" /> 4 new messages
                      <span className="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a  className="dropdown-item pointer">
                      <i className="fas fa-users mr-2" /> 8 friend requests
                      <span className="float-right text-muted text-sm">12 hours</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a  className="dropdown-item pointer">
                      <i className="fas fa-file mr-2" /> 3 new reports
                      <span className="float-right text-muted text-sm">2 days</span>
                    </a>*/}
                    {list}
                    {/*<div className="dropdown-divider" />
                    <a  className="dropdown-item dropdown-footer pointer">See All Notifications</a>*/}
                  </div>
                </li>

                <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{nvs.hoten}</span>
                    <img className="img-profile rounded-circle image-size" src={nvs.hinhanh} />
                  </a>
                  {/* Dropdown - User Information */}
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <Link to ={"/nhanvien/"+nvs.idnv} ><a className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                      Thông tin tài khoản
                    </a>
                    </Link>
                    {/*<a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Cài đặt
                    </a>*/}
                    <div className="dropdown-divider" />
                    <button className="dropdown-item" onClick={this.onLogout}>
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                      Đăng xuất
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link pointer" data-widget="fullscreen"  role="button">
                    <i className="fas fa-expand-arrows-alt" />
                  </a>
                </li>
              </ul>
            </nav>
		);
	}
}
export default withGlobalState(withRouter(navbar));
