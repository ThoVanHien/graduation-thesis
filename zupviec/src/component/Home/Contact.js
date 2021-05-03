import React, { Component } from 'react';
import { AvForm, AvField, ValidatingFormGroup } from 'availity-reactstrap-validation';


class Contact extends Component {

    constructor(props) {
      super(props)
    }

    async componentDidMount() {
        window.scrollTo(0, 0); 
    }

    render() {

        return (
            <div className="container">
              {/* Page Heading/Breadcrumbs */}
              <h1 className="mt-4 mb-3">
                <span style={{color: '#fc9e26'}}>
                  Liên hệ {' '}
                </span>
                <small>
                  <span style={{color: '#fb8533'}}>
                    VỚI CHÚNG TÔI
                  </span>
                </small>
              </h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Trang chủ</a>
                </li>
                <li className="breadcrumb-item active">Giới thiệu về chúng tôi</li>
              </ol>
              {/* Content Row */}
              <div className="row">
                {/* Map Column */}
                <div className="col-lg-8 mb-4">
                  {/* Embedded Google Map */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4765140289724!2d106.75338911480142!3d10.851315392270747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bd80c66b4f%3A0x1243c8a70dc5d2e0!2zMSBWw7UgVsSDbiBOZ8OibiwgTGluaCBDaGnhu4N1LCBUaOG7pyDEkOG7qWMsIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1572056149532!5m2!1svi!2s" width="100%" height="400px" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
                  </iframe>
                </div>
                {/* Contact Details Column */}
                <div className="col-lg-4 mb-4">
                  <h3>Chi Tiết Liên Hệ</h3>
                  <p>
                    <span style={{fontWeight: 'bold'}}>Địa chỉ: </span>
                    1 Võ Văn Ngân, Linh Chiểu, Thủ Đức, Hồ Chí Minh
                  </p>
                  <p>
                    <abbr title="Phone">P</abbr>: 0945374857
                  </p>
                  <p>
                    <abbr title="Email">E</abbr>: 
                    <a href="mailto:name@example.com">{' '}contact@gvnhanh.com
                    </a>
                  </p>
                  <p>
                    <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
                  </p>
                </div>
              </div>
              {/* /.row */}
              {/* Contact Form */}
              {/* In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. */}
             {/* <div className="row">
                <div className="col-lg-8 mb-4">
                  <h3>
                    <span style={{color: '#36AD7F'}}>
                      Góp ý {' '}
                    </span>
                    <span style={{color: '#F4A814', fontWeight: 1000}}>
                      về chúng tôi<i /> 
                    </span>
                  </h3>
                  <form name="sentMessage" id="contactForm" noValidate>
                    <div className="control-group form-group">
                      <div className="controls">
                        <label>Tên :</label>
                        <input type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
                        <p className="help-block" />
                      </div>
                    </div>
                    <div className="control-group form-group">
                      <div className="controls">
                        <label>Số điện thoại :</label>
                        <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
                      </div>
                    </div>
                    <div className="control-group form-group">
                      <div className="controls">
                        <label>Email :</label>
                        <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
                      </div>
                    </div>
                    <div className="control-group form-group">
                      <div className="controls">
                        <label>Góp ý:</label>
                        <textarea rows={10} cols={100} className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength={999} style={{resize: 'none'}} defaultValue={""} />
                      </div>
                    </div>
                    <div id="success" />
                  
                    <button type="submit" className="btn btn-primary" id="sendMessageButton">Gửi phản hồi</button>
                  </form>
                </div>
              </div>*/}
              {/* /.row */}
            </div>     
        );
    }
}

export default Contact;