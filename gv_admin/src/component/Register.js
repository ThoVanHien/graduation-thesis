// import React, { useState } from "react";

// const Register = () => {
//   const [picture, setPicture] = useState('');

//   const onChangePicture = e => {
//     console.log('picture: ', picture);
//     setPicture(URL.createObjectURL(e.target.files[0]));

//   };

//   return (
//     <div className="content-wrapper">
//       <div className="register_player_column_layout_one">
//         <div className="register_player_Twocolumn_layout_two">
//           <form className="myForm">
//             <div className="formInstructionsDiv formElement">
//               <h2 className="formTitle" >Sign Up</h2>
//               <p className="instructionsText"></p>
//               <div className="register_profile_image">
//                  <input id="profilePic" type="file" onChange={onChangePicture}/>
//               </div>
//               <div className="previewProfilePic" >
//                 <img className="playerProfilePic_home_tile w-25 h-25"   src={picture}></img>
//               </div>
//             </div>
//             <div className="fillContentDiv formElement">
//               <div className="names formContentElement">
//                 <input className="inputRequest " type="text" placeholder="First Name" />
//                 <input className="inputRequest " type="text" placeholder="Last Name" />
//               </div>
//             </div>
//             <div className="submitButtonDiv formElement">
//               <button className="submitButton">Register</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    //this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });

    }
  };

  render() {
    const {image} = this.state;
    console.log("img", image)
    return (
      <div className = "content-wrapper">
        <div>
          <div>
            <img src={this.state.image} className="img-fluid img-thumbnail"/>
            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
          
        </div>
      </div>
    );
  }
}
export default Register;