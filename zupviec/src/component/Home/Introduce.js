import React, { Component } from 'react';
import { AvForm, AvField, ValidatingFormGroup } from 'availity-reactstrap-validation';


class Introduce extends Component {

  async componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <div className="container">
        {/* Page Heading/Breadcrumbs */}
        <h1 className="mt-4" style={{ padding: '20px', textAlign: 'center' }}>
          <span style={{ color: '#fc9e26' }}>
            Giới thiệu {' '}
          </span>
          <small>
            <span style={{ color: '#fb8533' }}>
              VỀ CHÚNG TÔI
                </span>
          </small>
        </h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Trang chủ</a>
          </li>
          <li className="breadcrumb-item active">Giới thiệu về chúng tôi</li>
        </ol>
        {/* Intro Content */}
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid rounded mb-4" src="image/aboutUs1.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <h2>
              <span style={{ color: '#36AD7F' }}>
                Giới thiệu về {' '}
              </span>
              <span style={{ fontWeight: 1000, width: '10px' }}>Giupviecnhanh.com</span>
            </h2>
            <p className="font-italic">
              "Chúng tôi mong muốn tạo ra cuộc sống tốt đẹp hơn cho phụ nữ Việt, bao gồm cả những người phụ nữ thành thị hiện đại bận rộn và những người phụ nữ tại các làng quê Việt Nam."
                </p>
            <p className="font-weight-normal">
              - Phụ nữ nông thôn nghèo sẽ có công việc và thu nhập tốt.
                </p>
            <p className="font-weight-normal">
              - Phụ nữ thành thị sẽ có thêm thời gian rảnh rỗi chăm lo cho gia đình và tạo ra nhiều giá trị hơn cho xã hội.
                </p>
          </div>
        </div>
        {/* /.row */}
        {/* Team Members */}
        <h2>

        </h2>

        {/* /.row */}
        {/* Our Customers */}
        <h2>
          <span style={{ color: '#36AD7F' }}>
            Một số hoạt động của {' '}
          </span>
          <span style={{ color: '#F4A814', fontWeight: 1000 }}>
            chúng tôi<i />
          </span>
        </h2>
        <div className="row">
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="/image/hd1.jpg" alt="" style={{ height: '100px' }} />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="/image/hd2.jpg" alt="" style={{ height: '100px' }} />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="/image/hd3.jpg" alt="" style={{ height: '100px' }} />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="/image/hd4.jpg" alt="" style={{ height: '100px' }} />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="/image/hd5.jpg" alt="" style={{ height: '100px' }} />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="/image/hd6.jpg" alt="" style={{ height: '100px' }} />
          </div>
        </div>
        {/* /.row */}
      </div>
    );
  }
}

export default Introduce;