import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import RegisterServiceContain from '../RegisterService/RegisterServiceContain';
import Register from '../Register/Register';
import Login from '../Register/Login';
import RegisterStaff from '../Register/RegisterStaff';
import InfService from '../Register/infService';
import Contact from '../Home/Contact';
import Introduce from '../Home/Introduce';

class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Nav></Nav>
          
          <Switch>
            <Route exact path="/">
              <Home/>
               
            </Route>

            <Route exact path="/home">
              <Home/>
               
            </Route>

             <Route exact path="/chitiet/:id" render={props => <InfService {...props} />} />


             <Route exact path="/dichvu/:id">
               <RegisterServiceContain/>
          </Route>

          <Route exact path="/contact">
              <Contact />   
            </Route>
          <Route exact path="/intro">
              <Introduce />  
          </Route>
            

            <Route exact path="/dangky">
              <Register/>   
            </Route>

            <Route exact path="/dangnhap">
              <Login/>   
            </Route>

            <Route exact path="/dangkynguoigv">
              <RegisterStaff/>   
            </Route>


          </Switch>

          <Footer/>
          
        </div>
      </Router>
      
    );
  }
}

export default App;