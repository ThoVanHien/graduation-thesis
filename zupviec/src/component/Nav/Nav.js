import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom"
class Nav extends Component {

  state = {
    isLoading: true,
    loaiDVs: [],
  };

  async componentDidMount() {
    const response = await fetch('/gvnhanh/loaidv');
    const body = await response.json();
    this.setState({ loaiDVs: body, isLoading: false });
    console.log("loaidv", this.state.loaiDVs)
  }

  // clickContact = () =>{
  //   this.props.history.push('/contact')
  // }

  render() {
    const { loaiDVs, isLoading } = this.state;
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-nav">
          <div className="container">
            <Link to="/" className="navbar-brand" style={{ borderRadius: '20px', color: 'red' }}>
              <span>
                <img src="../image/logo.png" alt="" style={{ width: '50px', height: '50px' }} />
              </span>
              <span style={{ color: '#04B404', width: '50px', fontWeight: 1000 }}>
                GiupViecNhanh.com
              </span>
              <i className="fa fa-flag" />
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive" style={{ color: 'Window' }}>
              <ul className="navbar-nav ml-auto mt-3" >
                <li className="nav-item">
                  <Link to="/intro" className="nav-link txt_color" href="">
                    <p className="font-weight-bold " >Giới thiệu</p>
                  </Link>
                </li>

                <li className="nav-item dropdown" >
                  <a className="font-weight-bold" className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="font-weight-bold txt_color">Các loại DV</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                    {/* <div onClick={() => window.location.reload(false)}> */}
                    <div>
                      {loaiDVs.map((dv, idx) =>
                        <Link key={idx} to={"/chitiet/" + dv.idloaidv} className="dropdown-item">{dv.tenloai}</Link>
                      )}
                    </div>
                    {/*<Link to="/dichvu/1" className="dropdown-item">Giúp việc gia đình</Link>
                    <Link to="/dichvu/2" className="dropdown-item">Giúp việc trông trẻ</Link>
                    <Link to="/dichvu/3" className="dropdown-item" >Giúp việc trông ông bà</Link>
                    <Link to="/dichvu/4" className="dropdown-item" >Giúp việc chăm người bệnh</Link>
                    <Link to="/dichvu/5" className="dropdown-item" >GIÚP VIỆC TẾT NGUYÊN ĐÁN</Link>
                    <Link to="/dichvu/6" className="dropdown-item" >Giúp việc hành chính, theo giờ</Link>
                    <Link to="/dichvu/7" className="dropdown-item" >Cung ứng lao động phổ thông</Link>*/}
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link txt_color" href="" ><p className="font-weight-bold" >Liên hệ</p></Link>
                </li>
                <li className="nav-item">
                  <Link to="/dangkynguoigv" className="nav-link txt_color" href="" ><p className="font-weight-bold" >Đăng ký đi làm</p></Link>
                </li>


              </ul>
              <ul className="navbar-nav mt-0 ml-2">

                <li className="nav-item ml-2">
                  {/* <Link to="/dangky">
                    <button type="button" className="btn btn-danger">Đăng ký</button>
                  </Link>
                </li>
                <li className="nav-item ml-2">
                  <Link to="/dangnhap">
                    <button type="button" className="btn btn-success">Đăng nhập</button>
                  </Link>*/}
                </li>

                {/*<li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                    <img className="img-profile rounded-circle" src="../img/user.png" />
                  </a>
                 
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                      Thông tin tài khoản
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Cài đặt
                    </a>
                    <div className="dropdown-divider" />
                    <Link to="/login" className="dropdown-item" >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                      Đăng xuất
                    </Link>
                  </div>
                </li>*/}

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);