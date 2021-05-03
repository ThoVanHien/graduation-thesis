import React, {Component} from 'react';
import {Line, Pie, Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ],
}

const state2 = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}
class dashboard extends Component{

  emptyDichvu = {
    labels: [],
    datasets: [],
  };

  constructor(props) {
      super(props);
      this.state = {
          chartDV: [],
          chartLine: [],
          countLuotDV: 0,
          countLuotDVMoi: 0,
          countKH: 0,
          countNGV: 0,
          isLoading: true,
          

        }
      this.createDay = this.createDay.bind(this);
    }

  async componentDidMount(){
        this.setState({isLoading: true});

        const dv = await(await fetch('gvnhanh/phieuthudv/count')).json();

        //Biểu đồ tròn tỉ lệ dịch vụ
        const bieudo = {
            labels: [],
            datasets: [
            {
              label: 'Dịch vụ đăng ký',
              backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4',
                '#0515F5',
                '#EFAA2A',
                '#0E7C6B',
                '#3E107B',
                '#EC6064'
              ],
              hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              '#003350',
              '#35014F',
              '#0515F5',
              '#EFAA2A',
              '#0E7C6B',
              '#3E107B',
              '#EC6064'
              ],
              data: []
            }
          ]
        }

        dv.map((dv, index)=>{
          bieudo['labels'].push(dv['tendv']);
          bieudo['datasets'][0]['data'].push(dv['soluong']);
        })

        //Biểu đồ dọc
        const bieudoDuong = {
          labels: [],
          datasets: [
            {
              label: 'Số dịch vụ',
              fill: false,
              lineTension: 0.5,
              backgroundColor: 'rgba(227, 185, 0, 1)',
              borderColor: 'rgba(29, 93, 255, 1)',
              borderWidth: 2,
              data: []
            }
          ],
        }

        //Lấy ngày
        let day = new Date();

        day.setDate(day.getDate()+1);
        for(let i=0; i<=6;i++){
            day.setDate(day.getDate()-1);
            let month = day.getMonth()+1;
            bieudoDuong['labels'].unshift(day.getDate() +'-'+month);

            //Định dạng ngày
            let d = this.createDay(day);
            let count = await(await fetch(`/gvnhanh/hdthue/count/${d}`)).json();
            bieudoDuong['datasets'][0]['data'].unshift(count);
        }

        const totalDVmoi = await(await fetch('/gvnhanh/yeucau/chuaduyet')).json();
        const totalDV = await(await fetch('gvnhanh/hdthue/count')).json();
        const totalKH = await(await fetch('gvnhanh/khachhang/count')).json();
        const totalNGV = await(await fetch('gvnhanh/nguoigv/count')).json();

        this.setState({
          chartDV: bieudo,
          chartLine: bieudoDuong,
          countLuotDVMoi: totalDVmoi.length,
          countLuotDV: totalDV,
          countKH: totalKH,
          countNGV: totalNGV,
          isLoading: false,
        })

        // let day = new Date()
        // day.setDate(day.()-6)
        // console.log("day", day)
    }

  createDay(date){
    var months = ["01", "02", "03", "04", "05", "06", "07",
         "08", "09", "10", "11", "12"];

    var d = new Date(date);

    var namedMonth = months[d.getMonth()];
    let ng;
    if(d.getDate()<10){
      ng = `${d.getFullYear()}-${namedMonth}-0${d.getDate()}`;
    }
    else{
      ng = `${d.getFullYear()}-${namedMonth}-${d.getDate()}`;
    }

    return ng;
  }
	
	render(){

    const {chartDV, chartLine, countLuotDVMoi, countLuotDV, countKH, countNGV} = this.state;

		return(
		    <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
               {/* <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a >Home</a></li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>*/}
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{countLuotDVMoi}</h3>
                    <p>Lượt đặt dịch vụ mới</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-shopping-bag" />
                  </div>
                  {/*<a  className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>*/}
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    {/*<h3>{countLuotDV}<sup style={{fontSize: '20px'}}>%</sup></h3>*/}
                    <h3>{countLuotDV}</h3>
                    <p>Lượt đặt dịch vụ</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-plus-circle" />
                  </div>
                  {/*<a  className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>*/}
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{countKH}</h3>
                    <p>Khách hàng</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-handshake" />
                  </div>
                  {/*<a  className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>*/}
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>{countNGV}</h3>
                    <p>Người giúp việc</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-plus" />
                  </div>
                  {/*<a  className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>*/}
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <section className="col-lg-6">
                {/* Custom tabs (Charts with tabs)*/}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-chart-pie mr-1" />
                      Lượt đăng ký
                    </h3>
                    <div className="card-tools">
                      <ul className="nav nav-pills ml-auto">
                        {/*<li className="nav-item">
                          <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                        </li>*/}
                      </ul>
                    </div>
                  </div>{/* /.card-header */}
                  <div className="card-body">
                    <div>
                      <Line
                        data={chartLine}
                        options={{
                          title:{
                            display:true,
                            text:'Lượt đăng ký dịch vụ trong tuần',
                            fontSize:20
                          },
                          legend:{
                            display:true,
                            position:'right'
                          },
                          scales: {
                            xAxes: [{
                              gridLines: {
                                display: false,
                              },
                            }],
                            yAxes: [{
                              // stacked: true,
                              gridLines: {
                                display: true,
                              },
                               ticks: {
                                beginAtZero: true,
                                stepSize: 1
                              }
                            }],
                          },
                          tooltips: {
                            enabled: true,
                          },
                        }}
                      />
                    </div>
                  </div>{/* /.card-body */}
                </div>
                
               
                {/* /.card */}
              </section>
              {/* /.Left col */}
              {/* right col (We are only adding the ID to make the widgets sortable)*/}
              <section className="col-lg-6">
                {/* Custom tabs (Charts with tabs)*/}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-chart-pie mr-1" />
                      Dịch vụ đăng ký
                    </h3>
                    <div className="card-tools">
                      <ul className="nav nav-pills ml-auto">
                        {/*<li className="nav-item">
                          <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                        </li>*/}
                      </ul>
                    </div>
                  </div>{/* /.card-header */}
                  <div className="card-body">
                    <div>
                      <Pie
                        data={chartDV}
                        options={{
                          title:{
                            display:true,
                            text:'Tỉ lệ đặt dịch vụ',
                            fontSize:20
                          },
                          legend:{
                            display:true,
                            position:'right'
                          },
                          tooltips:{
                                callbacks: {
                                    label: function(tooltipItem, data) {
                                        let dataset = data.datasets[tooltipItem.datasetIndex];
                                        let meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                        let total = meta.total;
                                        let currentValue = dataset.data[tooltipItem.index];
                                        let percentage = parseFloat((currentValue/total*100).toFixed(1));
                                        return currentValue + ' (' + percentage + '%)';
                                    },
                                    title: function(tooltipItem, data) {
                                        return data.labels[tooltipItem[0].index];
                                    }
                                }
                          }
                        }}
                      />
                    </div>
                  </div>{/* /.card-body */}
                </div>
                
               
                {/* /.card */}
              </section>
              {/* right col */}
            </div>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>

		);
	}
}
export default dashboard;
