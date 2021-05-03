import React, {Component} from 'react';
class menu extends Component {
  render() 
  {
    
    return (
   <div>
  {/* Navigation */}
  <nav className="navbar fixed-top navbar-expand-lg navbar-white bg-white fixed-top">
    <div className="container">
      <a className="navbar-brand" href="index.html" style={{borderRadius: '20px', color: 'red'}}>
        <span>
          <img src="https://lh3.googleusercontent.com/EfcnMJLP8BTYXNJ6Li2LYvHi3G9MuUY__jQIFRkxMIqPtSiFOA-Fq_Suy4KRKgMLf4I" alt="" style={{width: '50px', height: '50px'}} />
        </span>
        <span style={{color: '#881A7C', width: '50px'}}>   
          GiupViecNhanh.com
        </span>
        <i className="fa fa-flag" />
      </a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="about.html">Giới thiệu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Liên hệ</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Các loại DV
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
              <a className="dropdown-item" href="portfolio-1-col.html">Giúp việc nhà theo giờ</a>
              <a className="dropdown-item" href="portfolio-2-col.html">Giúp việc nhà theo gói</a>
              <a className="dropdown-item" href="portfolio-3-col.html">Nấu ăn gia đình</a>
              <a className="dropdown-item" href="portfolio-4-col.html">Dọn dẹp phòng</a>
              <a className="dropdown-item" href="portfolio-item.html">Vệ sinh máy lạnh</a>
              <a className="dropdown-item" href="portfolio-item.html">Giặt ủi</a>
              <a className="dropdown-item" href="portfolio-item.html">Tổng vệ sinh</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Blog
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a className="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
              <a className="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
              <a className="dropdown-item" href="blog-post.html">Blog Post</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Other Pages
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a className="dropdown-item" href="full-width.html">Full Width Page</a>
              <a className="dropdown-item" href="sidebar.html">Sidebar Page</a>
              <a className="dropdown-item" href="faq.html">FAQ</a>
              <a className="dropdown-item" href="404.html">404</a>
              <a className="dropdown-item" href="pricing.html">Pricing Table</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">Đăng ký</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner" role="listbox">
        {/* Slide One - Set the background image for this slide in the line below */}
        <div className="carousel-item active" style={{backgroundImage: 'url("https://media.jupviec.vn/files/slide/2019/10/04/-171536.jpg")'}}>
          <div className="carousel-caption d-none d-md-block">
            {/* <h3>First Slide</h3>
      <p>This is a description for the first slide.</p> */}
          </div>
        </div>
        {/* Slide Two - Set the background image  for this slide in the line below */}
        <div className="carousel-item" style={{backgroundImage: 'url("https://media.jupviec.vn/files/slide/2019/10/10/-172839.jpg")'}}>
          <div className="carousel-caption d-none d-md-block">
            {/* <h3>Second Slide</h3>
      <p>This is a description for the second slide.</p> */}
          </div>
        </div>
        {/* Slide Three - Set the background image for this slide in the line below */}
        <div className="carousel-item" style={{backgroundImage: 'url("https://media.jupviec.vn/files/slide/2019/10/16/-170628.jpg")'}}>
          <div className="carousel-caption d-none d-md-block">
            {/* <h3>Third Slide</h3>
      <p>This is a description for the third slide.</p> */}
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </header>
  {/* Page Content */}
  <div className="container">
    <h1 className="my-4">
      <span style={{color: '#858484'}}>
        Hãy để
      </span>
      <br />
      <span style={{color: '#fc9e26'}}>
        cuộc sống của bạn
      </span>
      <br />
      <span style={{color: '#fb8533'}}>
        thảnh thơi hơn!
      </span>
    </h1>
    {/* Marketing Icons Section */}
    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">
            <a data-toggle="modal" data-target="#myModal">Chuyên nghiệp - Tận tâm</a>
          </h4>
          <div className="card-body">
            <p className="card-text">bTaskee là công ty tiên phong ứng dụng nền tảng công nghệ vào ngành giúp việc gia đình ở Việt Nam, cho phép bạn cùng người giúp việc chủ động đăng và nhận việc trực tiếp trên ứng dụng.</p>
            <img src="https://media.jupviec.vn/resize/77x89/files/channel/2019/01/28/chuyen-nghiep--tan-tam-173933.png" className="rounded mx-auto d-block" alt="Chuyên nghiệp - Tận tâm" />
          </div>
          <div className="card-footer">
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">
            <a data-toggle="modal" data-target="#myModal">Giá cả rõ ràng</a>
          </h4>
          <div className="card-body">
            <p className="card-text">Giá dịch vụ được hiển thị rõ ràng trên ứng dụng. Bạn không phải trả thêm bất kỳ khoản chi phí nào.
            </p>
            <img src="https://www.btaskee.com/wp-content/uploads/2018/11/vsml-gia-ca-ro-rang.jpg" style={{width: '68px', height: '68px', marginTop: '70px'}} className="rounded mx-auto d-block" alt="" />
          </div>
          <div className="card-footer">
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Đa dạng dịch vụ</h4>
          <div className="card-body">
            <p className="card-text">Bạn có thể đặt lịch dọn dẹp nhà bất cứ khi nào hoặc sử dụng. "Gói cố định" để đảm bảo luôn có người đến dọn dẹp nhà.
            </p>
            <img src="https://www.btaskee.com/wp-content/uploads/2018/11/dam-bao-quyen-loi-lao-dong.jpg" style={{width: '68px', height: '68px', marginTop: '80px'}} className="rounded mx-auto d-block" alt="" />
          </div>
          <div className="card-footer">
          </div>
        </div>
      </div>
    </div>
    {/* /.row */}
    {/* Portfolio Section */}
    <h2 className="my-4">
      <span style={{color: '#fc9e26'}}>
        Lựa chọn
      </span>
      <span style={{color: '#fb8533'}}>
        dịch vụ
      </span>
    </h2>  
    <div className="row">
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Giúp việc nhà theo giờ</a>
            </h4>
            <p className="card-text">Bạn có thể chăm sóc ngôi nhà của mình một cách hoàn hảo khi đặt lịch dọn dẹp nhà trên ứng dụng bTaskee – Nhanh chóng, Tiện lợi và Tiết kiệm chi phí. Nay đã có mặt tại Tp. Hồ Chí Minh, Hà Nội, Đà Nẵng, Hải Phòng, Nha Trang, Đà Lạt, Biên Hòa, Cần Thơ và Bình Dương.
              Trải nghiệm ứng dụng giúp việc nhà theo giờ và thảnh thơi tận hưởng những điều tốt đẹp nhất trong cuộc sống.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Giúp việc nhà theo gói</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Nấu ăn gia đình</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Dọn dẹp phòng</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Vệ sinh máy lạnh</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Giặt ủi</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
          </div>
        </div>
      </div>
    </div>
    {/* /.row */}
    {/* Features Section */}
    <div className="row">
      <div className="col-lg-6">
        <h2 className="my-4">
          <span style={{color: '#fc9e26'}}>
            Đặc biệt
          </span>
          <span style={{color: '#fb8533'}}>
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
        <p>• Riêng khu vực quận 2, 7, 9, Nhà Bè và quận Bình Thạnh, giá dịch vụ tăng 20% (không bao gồm phí dụng cụ).<br />
          • Đối với Khung giờ cao điểm (trước 8h00 và sau 19h00) và Thứ 7, Chủ Nhật giá dịch vụ tăng 20% (không bao gồm phí dụng cụ). <br />
          • Giá mang tính chất tham khảo ở thời điểm hiện tại. Giá dịch vụ có thể tự động điều chỉnh tùy vào khu vực, giờ cao điểm, lễ tết.</p>
      </div>
      <div className="col-lg-6">
        <img className="img-fluid rounded" src="http://placehold.it/700x450" alt="" />
      </div>
    </div>
    {/* /.row */}
    <hr />
    {/* Call to Action Section */}
    <div className="row mb-4">
      <div className="col-md-8">
        <p>Tất cả những nhân viên Tổng vệ sinh đều là những người giúp việc có kinh nghiệm và có đầy đủ dụng cụ làm việc.</p>
        <p>Chi phí dọn dẹp và số lượng nhân viên sẽ thay đổi tùy thuộc vào diện tích cần vệ sinh.</p>
      </div>
      <div className="col-md-4">
        <a className="btn btn-lg btn-secondary btn-block" href="#">Đặt ngay</a>
      </div>
    </div>
  </div>
  {/* /.container */}
  {/* Footer */}
  <footer className="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">Copyright © Your Website 2019</p>
    </div>
    {/* /.container */}
  </footer>
  {/* Bootstrap core JavaScript */}
</div>

    );
  }
}
export default menu;
