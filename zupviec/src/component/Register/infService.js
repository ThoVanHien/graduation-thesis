import React, { Component } from 'react';
import ReactDOM from "react-dom";
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
  InputGroup, InputGroupAddon
} from 'reactstrap';


class infService extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dichVus: [],
      chiTiets: [],
      link: '',
    };
  }

  async componentWillReceiveProps(newProps) {
    console.log("newProps", newProps)
    const dv = await (await fetch(`/gvnhanh/loaidv/${newProps.match.params.id}`)).json();
    const ct = await (await fetch(`/gvnhanh/bangphidv/loaidv/${newProps.match.params.id}`)).json();
    this.setState({
      dichVus: dv,
      chiTiets: ct,
      link: ct[0].iddv,
    })
    window.scrollTo(0, 0);
  }

  async componentDidMount() {
    const dv = await (await fetch(`/gvnhanh/loaidv/${this.props.match.params.id}`)).json();
    const ct = await (await fetch(`/gvnhanh/bangphidv/loaidv/${this.props.match.params.id}`)).json();
    console.log("dv", this.props.match.params.id);

    this.setState({
      dichVus: dv,
      chiTiets: ct,
      link: ct[0].iddv,
    })

    if (window.FB) {
      var el = this.refs.fbplugins;
      window.FB.XFBML.parse(el);
    }

    window.scrollTo(0, 0);

    //  const script = document.createElement("script");

    // script.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v5.0&appId=462649174443590&autoLogAppEvents=1";
    // script.async = true;

    // document.body.appendChild(script);
  }

  currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  render() {

    const { dichVus } = this.state;
    const { chiTiets } = this.state;
    const { link } = this.state;

    const chiTietList = chiTiets.map((ct, idx) => {
      return <div key={idx} className="col-sm-4 pricing text-center mt-2">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body mt-2">
            <h1 className="card-title text-center namepk1">{ct.tendv}</h1>
            <h6 className="card-price text-center ">{ct.donvitinh==="Tháng"?<span className="period">Từ </span>:null}{this.currencyFormat(ct.gia)}<span className="period">VNĐ/{ct.donvitinh}</span></h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li"><i className="fas fa-check" />
                  {ct.mota}
                </span>
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check" />
                      Công cụ làm sạch cơ bản : Không
                    </span>
              </li>
            </ul>
            <Link to={`/dichvu/${ct.iddv}`} className="btn btn-block btn-primary text-uppercase">Đặt lịch ngay</Link>
          </div>
        </div>
      </div>
    });

    return (
      <div className="container">
        {/* Page Heading/Breadcrumbs */}
        <h1 className="mt-4 mb-3 text-center">
          <small>
            <span style={{ color: '#fb8533' }}>
              {dichVus.tenloai}
            </span>
          </small>
        </h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Trang chủ</a>
          </li>
          <li className="breadcrumb-item active">{dichVus.tenloai}</li>
        </ol>
        {/* Project One */}
        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={dichVus.anh} alt="" />
            </a>
          </div>
          <div className="col-md-5">
            <h3>
              <span style={{ color: '#36AD7F' }}>
                Thông tin &nbsp;
              </span>
              <span style={{ color: '#F4A814', fontWeight: 1000 }}>
                đến bạn !
              </span>
            </h3>
            <p style={{ fontWeight: 600 }} className="text-justify">
              {dichVus.gioithieu}
            </p>
            <Link to={`/dichvu/${link}`} className="btn btn-primary" href="#">Đặt lịch ngay
              <span className="glyphicon glyphicon-chevron-right" />
            </Link>
          </div>
        </div>
        {/* /.row */}
        <hr />
        {/* Project Two */}
        <div className="row">
          <div className="col-md-6">
            <h3>
              <span style={{ color: '#36AD7F' }}>
                Bạn được gì ở
              </span>
              <br />
              <span style={{ color: '#F4A814', fontWeight: 1000 }}>
                GIUPVIECNHANH.COM
              </span>
            </h3>
            <div className="row">
              <div className="col-md-3">
                <img className="img-fluid rounded mb-3 mb-md-0" src="/image/show24hService2.png" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
              <div className="col-md-9">
                <span style={{ fontWeight: 500, color: '#FD0948' }}>
                  TIỆN ÍCH !
                </span>
                <br />
                <p style={{ fontWeight: 300 }} className="text-justify">
                  {dichVus.gioithieu}
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <img className="img-fluid rounded mb-3 mb-md-0" src="/image/show24hService3.png" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
              <div className="col-md-9">
                <span style={{ fontWeight: 500, color: '#FD0948' }}>
                  CAM KẾT !
                </span>
                <br />
                <p style={{ fontWeight: 300 }} className="text-justify">
                  {dichVus.camket}
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <img className="img-fluid rounded mb-3 mb-md-0" src="/image/show24hService4.png" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
              <div className="col-md-9">
                <span style={{ fontWeight: 500, color: '#FD0948' }}>
                  MÔ TẢ CÔNG VIỆC !
                </span>
                <br />
                <p style={{ fontWeight: 300 }} className="text-justify">
                  {dichVus.kynang}
                </p>
              </div>
            </div>

          </div>
          <div className="col-md-6">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src="/image/show24hService6.png" alt="" />
            </a>
          </div>
        </div>
        {/* /.row */}
        <hr />
        {/* Project Three */}
        <div className="row">
          <br />
        </div>
        {/* /.row */}
        {/* Project price */}
        <div className="text-center">
          <div className="row mb-3 d-flex justify-content-center">
            {chiTietList}
          </div>
        </div>
        <div>
          <br />
          <h3>
            <span style={{ color: '#36AD7F' }}>
              Đánh giá dịch vụ
              </span>
          </h3>
          <div >
            <div class="fb-comments" data-href={"https://localhost:3000/chitiet/" + dichVus.idloaidv} data-width="900" data-numposts="5"></div>
          </div>

          {/*  <div id="fbplugins" ref="fbplugins">
          {/*<p>
            <div className="fb-like" data-href="http://localhost:3000/chitiet/1" data-layout="box_count" data-action="like" data-show-faces="true" data-share="true">
            </div>
          </p>
          <h1>Please comment on my FOOBAR</h1>
          <div className="fb-comments" data-href={"https://localhost:3000/chitiet/"+dichVus.idloaidv} data-width="600" data-numposts="5">
          </div>
        </div>*/}

        </div>

        {/* /.price */}
      </div>

    );
  }
}

export default withRouter(infService);