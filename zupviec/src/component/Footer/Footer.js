import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
           <div className="mt-5 pt-5 pb-5 footer">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-xs-12 about-company">
                    <h2>GIUPVIECNHANH.COM</h2>
                    <p className="pr-5 text-white-50">GIÚP VIỆC NHANH - CHO NGÀY THẢNH THƠI</p>
                    <p><a href="#"><i className="fa fa-facebook-square mr-1" /></a><a href="#"><i className="fa fa-linkedin-square" /></a></p>
                  </div>
                  <div className="col-lg-3 col-xs-12 links">
                    <h4 className="mt-lg-0 mt-sm-3">CÁC DỊCH VỤ</h4>
                    <ul className="m-0 p-0">
                      <li>- <a >Giúp việc ngày tết</a></li>
                      <li>- <a >Giúp việc gia đình</a></li>
                      <li>- <a >Việc làm trông trẻ</a></li>
                      <li>- <a >Dịch vụ chăm sóc người già</a></li>
                      <li>- <a >Chăm sóc bệnh nhân</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-xs-12 location">
                    <h4 className="mt-lg-0 mt-sm-4">ĐỊA CHỈ</h4>
                    <p>1, Võ Văn Ngân, Quận 9, TP.HCM</p>
                    <p className="mb-0"><i className="fa fa-phone mr-3" />(+84) 1613131313</p>
                    <p><i className="fa fa-envelope-o mr-3" />GIUPVIECNHANH@info.com</p>
                  </div>
                </div>
              
              </div>
              <div className="fb-customerchat" page_id="<PAGE_ID>"></div>
            </div>

        );
    }
}

export default Footer;