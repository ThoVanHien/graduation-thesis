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
                {/*Lo???i d???ch v???*/}
                <Route path="/loaidv" component={Listloaidv} exact />
           </Switch>

            <Switch>
                {/*Lo???i d???ch v???*/}
                <Route path="/loaidv/:id" component={Themloaidv} exact />
           </Switch>

           <Switch>
                {/*B???ng ph?? d???ch v???*/}
                <Route path="/bangphidv" component={Listbangphidv} exact />
           </Switch>

           <Switch>
                {/*Th??m b???ng ph?? d???ch v???*/}
                <Route path="/bangphidv/:id" component={Thembangphidv} exact />
           </Switch>

           <Switch>
                {/*Ng?????i gi??p vi???c*/}
                <Route path="/nguoigv" component={Listnguoigv} exact />
           </Switch>

           <Switch>
                {/*Th??m ng?????i gi??p vi???c*/}
                <Route path="/nguoigv/:id" component={Nguoigiupviec} exact />
           </Switch>

           <Switch>
                {/*Danh s??ch tuy???n d???ng*/}
                <Route path="/tuyendung" component={Listtuyendung} exact />
           </Switch>

           {/*Danh s??ch ????nh gi?? ng?????i gi??p vi???c*/}
           <Switch>
                <Route path="/danhgia/:id" component={Danhgia} exact/>
           </Switch>

           {/*Danh s??ch h???p ?????ng lao ?????ng*/}
           {/*<Switch>
                <Route path="/hdlaodong" component={Listhdlaodong} exact />
           </Switch>*/}

           {/*Th??m h???p ?????ng lao ?????ng*/}
           {/*<Switch> 
                <Route path="/hdlaodong/:id" component={Themhdlaodong} exact />
           </Switch>*/}

           <Switch>
                {/*Danh s??ch kh??ch h??ng*/}
                <Route path="/khachhang" component={Listkhachhang} exact />
           </Switch>

           <Switch>
                {/*Danh s??ch y??u c???u*/}
                <Route path="/yeucau" component={Listyeucau} exact />
           </Switch>

            {/*Danh s??ch l???ch h???n*/}
           {/*<Switch>      
                <Route path="/lichhen" component={Listlichhen} exact />
           </Switch>*/}

            {/*Th??m l???ch h???n*/}
            {/*<Switch>   
                <Route path="/lichhen/:id" component={Themlichhen} exact />
           </Switch>*/}

           <Switch>
                {/*Danh s??ch h???p ?????ng thu?? d???ch v???*/}
                <Route path="/hdthue" component={Listhdthue} exact />
           </Switch>

            <Switch>
                {/*Danh s??ch h???p ?????ng thu?? d???ch v???*/}
                <Route path="/hdthue/:id" component={Themhdthue} exact />
           </Switch>

           <Switch>
                {/*Danh s??ch nh??n vi??n*/}
                <Route path="/nhanvien" component={Listnhanvien} exact />
           </Switch>

           <Switch>
                {/*Th??m nh??n vi??n*/}
                <Route path="/nhanvien/:id" component={Themnhanvien} exact />
           </Switch>

           <Switch>
                {/*Danh s??ch t??i kho???n*/}
                <Route path="/taikhoan" component={Listtaikhoan} exact />
           </Switch>

            <Switch>
                {/*Th??m t??i kho???n*/}
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
