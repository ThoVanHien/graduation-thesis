import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, useRouteMatch, Redirect } from 'react-router-dom';
import { withGlobalState } from 'react-globally';
import './App.css';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar';
import Dashboard from './component/dashboard';
import Footer from './component/footer';
import Effect from './component/effect';
import Listloaidv from './component/list/listloaidv';
import Listbangphidv from './component/list/listbangphidv';
import Listnguoigv from './component/list/listnguoigv';
import Listtuyendung from './component/list/listtuyendung';
import Listhdlaodong from './component/list/listhdlaodong';
import Listkhachhang from './component/list/listkhachhang';
import Listyeucau from './component/list/listyeucau';
import Listlichhen from './component/list/listlichhen';
import Listhdthue from './component/list/listhdthue';
import Listnhanvien from './component/list/listnhanvien';
import Listtaikhoan from './component/list/listtaikhoan';
import Themloaidv from './component/new/themloaidv';
import Thembangphidv from './component/new/thembangphidv';
import Themhdlaodong from "./component/new/themhdlaodong";
import Themnhanvien from "./component/new/themnhanvien";
import Themtaikhoan from "./component/new/themtaikhoan";
import Themnguoigv from "./component/new/themnguoigv";
import Themlichhen from "./component/new/themlichhen";
import Themhdthue from "./component/new/themhdthue";
import Login from "./component/login";
import Danhgia from "./component//list/danhgia";
import Nguoigiupviec from "./component/new/nguoigiupviec";

import Upload from "./component/Register.js";
import Main from "./component/main";

const CounterInfo = withGlobalState(({ globalState }) => {
    console.log(globalState)
    return (
        <div>{globalState.counter}</div>
    )
 })

class App extends Component {

  async componentDidMount(){     
      
  }
  
  render(){
      var log = 1;
      return (
          <Router>
       {/* <CounterInfo/>*/}

         <Switch>
              <Route exact path="/">
                {localStorage.getItem("login")==null?<Login/>:<Redirect to="/dashboard" />}
              </Route>
          </Switch>
        
        {(localStorage.getItem("login")==1||localStorage.getItem("login")==2)? 
        <body className="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            
            {/*navbar*/}
            <Navbar />

           {/* <!-- Main Sidebar Container -->*/}
           <Sidebar />

            <Switch>
                {/*Dashboard*/}
                <Route path="/main" component={Main} exact />
            </Switch> 
                     
            <Switch>
                {/*Dashboard*/}
                <Route path="/dashboard" component={Dashboard} exact />
            </Switch> 

            <Switch>
                {/*Loại dịch vụ*/}
                <Route path="/loaidv" component={Listloaidv} exact />
           </Switch>

            <Switch>
                {/*Loại dịch vụ*/}
                <Route path="/loaidv/:id" component={Themloaidv} exact />
           </Switch>

           <Switch>
                {/*Bảng phí dịch vụ*/}
                <Route path="/bangphidv" component={Listbangphidv} exact />
           </Switch>

           <Switch>
                {/*Thêm bảng phí dịch vụ*/}
                <Route path="/bangphidv/:id" component={Thembangphidv} exact />
           </Switch>

           <Switch>
                {/*Người giúp việc*/}
                <Route path="/nguoigv" component={Listnguoigv} exact />
           </Switch>

           <Switch>
                {/*Thêm người giúp việc*/}
                <Route path="/nguoigv/:id" component={Nguoigiupviec} exact />
           </Switch>

           <Switch>
                {/*Danh sách tuyển dụng*/}
                <Route path="/tuyendung" component={Listtuyendung} exact />
           </Switch>

           {/*Danh sách đánh giá người giúp việc*/}
           <Switch>
                <Route path="/danhgia/:id" component={Danhgia} exact/>
           </Switch>

           {/*Danh sách hợp đồng lao động*/}
           {/*<Switch>
                <Route path="/hdlaodong" component={Listhdlaodong} exact />
           </Switch>*/}

           {/*Thêm hợp đồng lao động*/}
           {/*<Switch> 
                <Route path="/hdlaodong/:id" component={Themhdlaodong} exact />
           </Switch>*/}

           <Switch>
                {/*Danh sách khách hàng*/}
                <Route path="/khachhang" component={Listkhachhang} exact />
           </Switch>

           <Switch>
                {/*Danh sách yêu cầu*/}
                <Route path="/yeucau" component={Listyeucau} exact />
           </Switch>

            {/*Danh sách lịch hẹn*/}
           {/*<Switch>      
                <Route path="/lichhen" component={Listlichhen} exact />
           </Switch>*/}

            {/*Thêm lịch hẹn*/}
            {/*<Switch>   
                <Route path="/lichhen/:id" component={Themlichhen} exact />
           </Switch>*/}

           <Switch>
                {/*Danh sách hợp đồng thuê dịch vụ*/}
                <Route path="/hdthue" component={Listhdthue} exact />
           </Switch>

            <Switch>
                {/*Danh sách hợp đồng thuê dịch vụ*/}
                <Route path="/hdthue/:id" component={Themhdthue} exact />
           </Switch>

           <Switch>
                {/*Danh sách nhân viên*/}
                <Route path="/nhanvien" component={Listnhanvien} exact />
           </Switch>

           <Switch>
                {/*Thêm nhân viên*/}
                <Route path="/nhanvien/:id" component={Themnhanvien} exact />
           </Switch>

           <Switch>
                {/*Danh sách tài khoản*/}
                <Route path="/taikhoan" component={Listtaikhoan} exact />
           </Switch>

            <Switch>
                {/*Thêm tài khoản*/}
                <Route path="/taikhoan/:id" component={Themtaikhoan} exact />
           </Switch>

           {/*Footer*/}
           <Footer />
           <Effect />

        </div>
        </body>:null}
        </Router>
      );
  }
  
}

export default withGlobalState(App);
