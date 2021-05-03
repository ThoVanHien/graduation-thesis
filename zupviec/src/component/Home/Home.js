import React, { Component } from 'react';

import {
  Link
} from "react-router-dom";

class Home extends Component {

  state = {
    isLoading: true,
    iddv: '',
  };

  async componentDidMount() {
    const response = await fetch('/gvnhanh/bangphidv');
    const body = await response.json();
    this.setState({ iddv: body[0].iddv, isLoading: false });
    console.log("body", this.state);
    window.scrollTo(0, 0);
  }

  render() {

    const { iddv } = this.state;

    return (
      <div>

      <div className="content-wrapper">
        <div id="carouselExampleControls" className="carousel slide crs-mr mt-4 " data-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img className="d-block w-100 img-fluid" src="/image/panel2.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 img-fluid" src="/image/panel1.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="crs_img" src="/image/panel3.jpg" alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="container">

            

        <h1 className="my-1" style={{ padding: '0px', textAlign: 'center' }}>
          <span style={{ color: '#858484' }} className="mr-2 ">
            Hãy để
                </span>
          <span style={{ color: '#fc9e26' }} className="mr-2">
            cuộc sống của bạn
                </span>
          <span style={{ color: '#fb8533' }}>
            thảnh thơi hơn!
                </span>
        </h1>
        {/* Marketing Icons Section */}
        <div className="row mb-3">
          <div className="col-sm-4 pricing">
            <div className="card mb-5 mb-lg-0">

                

              <div className="card-body">
                <h1 className="card-title text-center namepk1">Chuyên nghiệp <br /> Tận tâm</h1>
                <img src="image/info1.png" className="rounded mx-auto d-block" alt="Chuyên nghiệp - Tận tâm" />
                <hr />
                <ul className="fa-ul">
                  <li>
                    Với đội ngũ chăm sóc khách hàng tận tình chu đáo 24/7
                  </li>
                  <li>
                   Giải quyết nhanh mọi thắc mắc, yêu cầu, phản hồi của khách hàng nhanh nhất có thể
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4 pricing">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-center namepk2">Giá cả rõ ràng minh bạch</h5>
                <img src="image/info2.jpg" className="rounded mx-auto d-block" alt="Chuyên nghiệp - Tận tâm" style={{ width: '77px', height: '80px' }} />
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li"><i className="fas fa-check" />
                        Chi phí rõ ràng, hiển thị đầy đủ các khoản tiền ngay trên website
                      </span>
                  </li>
                  <li>
                    <span className="fa-li"><i className="fas fa-check" />
                        Luôn cập nhật chi phí hằng ngày, giá cả phù hợp
                      </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4 pricing">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-center namepk3">Đa dạng các <br /> dịch vụ</h5>
                <img src="image/info3.jpg" className="rounded mx-auto d-block" alt="Chuyên nghiệp - Tận tâm" style={{ width: '77px', height: '80px' }} />
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li"><i className="fas fa-check" />
                        Cung cấp các loại dịch vụ từ vệ sinh nhà cửa cho đến chăm sóc người bệnh ...
                      </span>
                  </li>
                  <li>
                    <span className="fa-li"><i className="fas fa-check" />
                        Trang bị các loại dụng cụ giúp việc hiện đại
                      </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
        {/* Portfolio Section */}
        <h2 className="my-4">
          <span style={{ color: '#fc9e26' }}>
            Các loại
                </span>
          <span style={{ color: '#fb8533' }}>
            &nbsp;dịch vụ
                </span>
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3">
                <img className="img-fluid rounded mb-3 mb-md-0" src="image/gvgd.jpg" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
              <div className="col-md-9">
                <span style={{ fontWeight: 500, color: '#FD0948' }}>
                  GIÚP VIỆC GIA ĐÌNH
                      </span>
                <br />
                <p style={{ textAlign: 'justify' }}><strong>Giúp việc gia đình</strong> là dịch vụ không thể thiếu cho các ông bố, bà mẹ trong xã hội hiên đại ngày nay.
                      </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <img className="img-fluid rounded mb-3 mb-md-0" src="image/csmvb.jpg" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
              <div className="col-md-9">
                <span style={{ fontWeight: 500, color: '#FD0948' }}>
                  GIÚP VIỆC TRÔNG TRẺ
                      </span>
                <br />
                <p style={{ textAlign: 'justify' }}><strong>Tìm việc làm trông trẻ</strong> hiện nay được nhiều người biết đến với mong muốn cải thiện cuộc sống và tìm một công việc ổn định.
                      </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <img className="img-fluid rounded mb-3 mb-md-0" src="image/csng.jpg" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
              <div className="col-md-9">
                <span style={{ fontWeight: 500, color: '#FD0948' }}>
                  CHĂM SÓC NGƯỜI GIÀ
                      </span>
                <br />
                <p style={{ textAlign: 'justify' }}><strong>Dịch vụ chăm sóc người già</strong> là việc rất hệ trọng trong mỗi gia đình. Công việc đòi hỏi người chăm sóc vừa phải có lòng kính trọng đối với người già, vừa phải có thời gian, am hiểu tâm lý người già mới có thể làm tốt việc chăm sóc, phụng dưỡng.
                      </p>
              </div>
            </div>
            <br />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3">
                <img className="img-fluid rounded mb-3 mb-md-0" src="image/gvnt.jpg" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
              <div className="col-md-9">
                <span style={{ fontWeight: 500, color: '#FD0948' }}>
                  GIÚP VIỆC NGÀY TẾT
                      </span>
                <br />
                <p style={{ textAlign: 'justify' }}><strong>Giúp việc Tết</strong> từ lâu đã trở thành nhu cầu của nhiều gia đình hiện đại. Bởi vì khối lượng công việc dọn nhà ngày Tết, mua sắm, nấu ăn… là quá nhiều.
                      </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <img className="img-fluid rounded mb-3 mb-md-0" src="image/csng.jpg" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
              <div className="col-md-9">
                <span style={{ fontWeight: 500, color: '#FD0948' }}>
                  CHĂM SÓC NGƯỜI BỆNH
                      </span>
                <br />
                <p style={{ textAlign: 'justify' }}><strong>Chăm sóc bệnh nhân</strong> giữa cuộc sống quá nhiều việc phải lo toan, áp lực là điều không phải ai cũng làm được.
                      </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
        {/* Features Section */}
        <div className="row">
          <div className="col-lg-6">
            <h2 className="my-4">
              <span style={{ color: '#fc9e26' }}>
                Đặc biệt <span></span>
              </span>
              <span style={{ color: '#fb8533' }}>
                dịch vụ tổng vệ sinh
                    </span>
            </h2>
            <p>Đội ngũ nhân viên Tổng vệ sinh sẽ tiến hành các công việc sau:</p>
            <ul>
              <li>
                <strong>Hút, quét bụi và lau sàn</strong>
              </li>
              <li>Quét bụi, quét mạng nhện trần nhà</li>
              <li>Vệ sinh tường nhà (quét bụi hoặc lau)</li>
              <li>Phủi bụi rèm cửa, vệ sinh cửa ra vào, cửa sổ</li>
              <li>Phủi bụi, lau chùi bề mặt bàn ghế, tủ kệ, các vật dụng, đồ trang trí... </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid rounded" src="image/allService.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <Link to={"/dichvu/" + iddv} className="btn btn-lg btn-secondary btn-block ">Đặt ngay</Link>
          </div>
        </div>
        {/* Call to Action Section */}
        <hr />
      </div>
      </div>
    );
  }
}

export default Home;