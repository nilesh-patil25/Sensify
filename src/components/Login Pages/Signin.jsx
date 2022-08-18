import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import resetPasswordLeft from '../../assets/resetPasswordLeft.svg';
import outline from "../../assets/outline.svg";
import { useState } from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';
import art1 from '../../assets/art.png';
import Signup from './Signup';


function Signin() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  var obj = {}
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [user,setUser]=useState();
  const [load,setLoad]=useState(false);

  

  const navigate = useNavigate();

  function validate() {

    let emailerror = "";
    let passworderror = "";


    ///VALIDATION CHECKS

    
    if (Email.includes("@") === false) {
      emailerror = "Email is not valid";
    }

    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (Password === null || Password.length <7 || !Password.match(passw)) {
      passworderror = "Invalid Password";
    }

    if (emailerror !== "" || passworderror !== "") {
      setEmailerror(emailerror);
      setPassworderror(passworderror);
      return false;
    }

    //////////////////////////////////////////////////////////////////


    if (emailerror) {
      console.log("Email error", emailerror);
      setEmailerror(emailerror);
      return false;
    }

    if (passworderror) {
      console.log("Password error", passworderror);
      setPassworderror(passworderror);
      return false;
    }
    return true;
  }





  function handleClickSignIn(event) {


    event.preventDefault();

    const isValid = validate();
    console.log("isValid", validate());


    if (isValid) {
      setLoad(true);
      obj = {
        "emailaddress": "Haroonahmad@highbitsol.com",
        "Password": "Harr77@!",
        "Url": "/login"
      }

      obj["emailAddress"] = Email;
      obj["Password"] = Password;

      //localStorage.setItem("Check_User_Login", 0);
      var stat;
      var api = 'https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/signin';
     
      Axios.post(api, obj).then(res => {
        
        
        console.log("Axios Response: ", res.data);
        stat = res.data;
        

        console.log("stat", stat["StatusCode"]);
        if (stat["StatusCode"] === 0) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: `Logged In...`,
            showConfirmButton: false,
            timer: 3500,
          });
        
          var obj_local={userid:stat.Data.UserId,email:Email,password:Password};

          localStorage.setItem("userid-local_storage", JSON.stringify(obj_local));
          localStorage.setItem("local_id_store", stat.Data.UserId);
          localStorage.setItem("Check_User_Login", res.data);
          localStorage.setItem("Current_Login_user",Email);
          let data=localStorage.getItem("Check_User_Login");
          console.log("data local",data);
          localStorage.setItem("Check_User_Login", "true");


          setLoad(false);
          //setUser("Check_User_Login");
          navigate('/');
        }
        else {
          
          Swal.fire({
            icon: 'warning',
            title: 'Invalid Credentials',
            text: "Invalid Details Added, Please Enter Again!",
            showCancelButton: false,
            confirmButtonText: 'Try Again!',
          });
          setLoad(false);
        }
      }).catch(e =>{
        Swal.fire({
          icon: 'warning',
          title: 'Error!',
          text: e.Message,
          showCancelButton: false,
          confirmButtonText: 'Try Again!',
      }) 
      }).finally(()=>{
        setLoad(false);
      })
    }
  }

  

  const handleClickbtn = () => {
    // // 👇️ navigate programmatically
    navigate('/forget_Password');
  }
  const Clickback = () => {
    // // 👇️ navigate programmatically
    navigate('/');
  }


  return (
    // <>
//     <Wrapper> 
//       <div>
//         <section className='login-content'>
//           <div className="row container">
//             <section className='col-md-6 new'>
//             <img src={art1} alt="Cart_icon" className='img-here'/>
//             </section>

//             <div className="col-md-6 pad-right">
//             <div className="row">
//             <div class="col yourcart">
//                   <img
//                     src={outline}
//                     class="arrowHide"
//                     alt=""
//                     style={{ position: "relative", left: "-25px" }}
//                     onClick={Clickback}
//                   />
//                   Log in
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="col">
//                   <hr />
//                 </div>
//               </div>


//               <section class="shipping">

//                 <form>

//                   {/* <PaymentElement /> */}

//                   <div class="col">

//                     <div class="row">

//                       <label for="Email" class="label-align word">
//                         Email :
//                       </label>
//                     </div>
//                     <div class="row">
//                       <input
//                         type="email"
//                         name="Email"
//                         placeholder=""
//                         value={Email}
//                         onChange={(e) => setEmail(e.target.value)}
//                       />
//                       <div style={{color:'red',fontsize:'12px'}}>{emailerror}</div>
//                     </div>


//                     <div class="row">

//                       <label for="Password" class="label-align word">
//                         Password :
//                       </label>
//                     </div>
//                     <div class="row">
//                       <input
//                         type="password"
//                         name="Password"
//                         placeholder=""
//                         value={Password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                       <div style={{color:'red',fontsize:'12px'}}>{passworderror}</div>
//                       {/* <div style={{color:'red',fontsize:'12px'}}>{addresserror}</div> */}
//                     </div>


//                   </div>
//                 </form>
//               </section>

//               <div class="frgtdiv">
//                 <span>
//                   <br />
//                   <a onClick={handleClickbtn} style={{ color: "black" }} className="Remove">
//                     Forgot your password?
//                   </a>
//                   &emsp;&emsp;
//                 </span>
//               </div>


//               <div class="alignment-order">
//                 <div class="col continue">

                  
//                   <button onClick={handleClickSignIn} type="submit" value="Submit" className='LoginBtn'>
      
//                   {/* {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                 
//                     <a
//                       style={{ textDecoration: "none", color: "white", textAlign: "center" }}
//                     >
//                       {/* Login   {load?<LoadingSpinner />:''} */}Login
//                     </a>
//                   </button>
//                   {load?<h1 className={load?'loading-spinner':'LoginBtn'} disabled={load} style={{color:'blue', margin:"10px 0 170px 130px"}}></h1>:''}
//                 </div>
               
//               </div>

//               <div class="alignment-order">
//                 <div class="col continue1">
//                   <button onClick={(e)=>{navigate('/Signup')}} type="submit" value="Submit" className='SignupBtn'>
//                     <a
//                       style={{ textDecoration: "none", color: "#26649d", textAlign: "center"}}
//                     >
//                       Signup
//                     </a>
//                   </button>
//                 </div>
//               </div>

//      {/* {load?load:<Signup />} */}


//             {/* {load?<Backdrop
//               sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//                 open
 
//         >
//   <CircularProgress color="inherit" />
// </Backdrop>:''}
// <Backdrop
//               sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//                 open
 
//         >
//   <CircularProgress color="inherit" />
// </Backdrop> */}

//             </div>
//           </div>
//         </section>
//       </div>
//     </Wrapper>

  <Wrapper>
     <div className="row">
        <div className="col left_Container">
          <div className="left-card">
            <section className='col-md-6 new'>
              <img src={resetPasswordLeft} alt="Cart_icon" className='img-resetPasswordLeft' />
            </section>
          </div>
        </div>


        <div className="col right_Container">
          <div className="right-card">
          <div className="row">
            <div class="col yourcart">
                 <img
                    src={outline}
                    class="arrowHide"
                    alt=""
                    style={{ position: "relative", left: "-25px" }}
                    onClick={Clickback}
                  />
                  Log in
                </div>
              </div>

              <section class="shipping">

                 <form>

                   {/* <PaymentElement /> */}

                     <div class="row">

                       <label for="Email" class="label-align word">
                         Email :
                       </label>
                     </div>
                    <div class="row">
                       <input
                        type="email"
                        name="Email"
                        placeholder=""
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div style={{color:'red',fontsize:'12px',position:'absolute',top:'240px',left:'122px'}}>{emailerror}</div>
                    </div>


                    <div class="row">

                      <label for="Password" class="label-align-password word">
                        Password :
                      </label>
                    </div>
                    <div class="row">
                      <input
                        type="password"
                        name="Password"
                        placeholder=""
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div style={{color:'red',fontsize:'12px',position:'absolute',top:'350px',left:'122px'}}>{passworderror}</div>
                      
                    </div>

                </form>
              </section>

              <div class="forget-password">
                 <span>
                   <br />
                   <a onClick={handleClickbtn} style={{ color: "black",cursor:'pointer' }} className="Remove">
                     Forgot your password?
                   </a>
                   &emsp;&emsp;
                 </span>
               </div>

               <div class="alignment-order">
                 <div class="col continue">

                   <button onClick={handleClickSignIn} type="submit" value="Submit" className='LoginBtn'>
      
                   {/* {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                 
                     <a
                      style={{ textDecoration: "none", color: "white", textAlign: "center" }}
                    >
                      {/* Login   {load?<LoadingSpinner />:''} */}Login
                    </a>
                  </button>
                  {/* {load?<h1 className={load?'loading-spinner':'LoginBtn'} disabled={load} style={{color:'blue', margin:"10px 0 170px 130px"}}></h1>:''} */}
                </div>
              </div>

              <div class="alignment-order">
                 <div class="col continue1">
                   <button onClick={(e)=>{navigate('/Signup')}} type="submit" value="Submit" className='SignupBtn'>
                     <a
                      style={{ textDecoration: "none", color: "#26649d", textAlign: "center"}}
                    >
                      Signup
                    </a>
                  </button>
                  {load?<h1 className={load?'loading-spinner':'LoginBtn'} disabled={load} style={{color:'blue', margin:"10px 0 170px 180px"}}></h1>:''}
                </div>
              </div>

          </div>
          </div>

        </div>
  </Wrapper>
    
    // </>
 )
}
const Wrapper = styled.section`

.left_Container {
    position: absolute;
// width: 628px;
// height: 781px;
// left: 0px;
// top: 0px;

background: #26649D;
}

.left-card {
  position: absolute;
width: 360px;
height: 580px;
left: 270px;
top: 151px;

background: #26649D;
box-shadow: 0px 4px 32px 16px rgba(30, 30, 30, 0.25);
border-radius: 8px;
}

.right-card {
    position: relative;
    width: 612px;
    height: 580px;
    left: 618px;
    top: 151px;

background: #FFFFFF;
box-shadow: 0px 4px 32px 16px rgba(30, 30, 30, 0.25);
border-radius: 8px;
}
.img-resetPasswordLeft {
  position: absolute;
width: 347.59px;
height: 499.96px;
left: 0px;
top: 42px;
}

.yourcart {
  position: absolute;
  width: 225px;
  height: 28px;
  left: 84px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #4E4E4E;
}

.label-align {
  position: absolute;
  top:130px;
  left:110px;
      padding-top: 22px;
      font-family: Work Sans;
      font-size: 16px;
      font-weight: 500;
      line-height: 40px;
    }

    .label-align-password{
      position: absolute;
  top:240px;
  left:110px;
      padding-top: 22px;
      font-family: Work Sans;
      font-size: 16px;
      font-weight: 500;
      line-height: 40px;
    }

    input[type="email"] {
          box-sizing: border-box;
         position: absolute;
          width: 388px;
          height: 48px;
          left: 122px;
          top: 190px;
          background: #FFFFFF;
          border: 1px solid #26649D;
          border-radius: 8px;
        }
      
        input[type="password"] {
          box-sizing: border-box;
         position: absolute;
          width: 388px;
          height: 48px;
          left: 122px;
          top: 300px;
          background: #FFFFFF;
          border: 1px solid #26649D;
          border-radius: 8px;
        }

  .forget-password{
    position:absolute;
    left:350px;
    top:328px;
  }

  .continue {
    position: absolute;
    top: 400px;
    left: 122px;
      }
      .continue button {
        background-color: #22669c;
        border: none;
        padding: 10px 0px;
        color: white;
        width:390px;
      }

      .continue1 {
        position: absolute;
        top: 460px;
        left: 122px;
          
          }
          .continue1 button {
            background-color: white;
             box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); 
            
            border: none;
            padding: 10px 0px;
            color: white;
            width:390px;
          }

.body{
  height: 100vh
  width: 100%
}








// .spinner-border {
//   color: #fff;

// }

// .login-content { 
//   color: var(--font-color-for-content);
//   font-weight: var(--font-weight-300);
//   font-size: var(--font-size-16px);
//   color: var(--color-white);
//   line-height: 19px;
//   height: 100vh;
//   overflow: hidden;
// }
// .login-content p {
  
// }


// .img-here {
//   height: 100%;
//   width: 100%;
//   margin-left: 0px;
//   margin-top: 0px;
// }
// .new{
//     background-color: #26649d;
//     margin-left: -15px;
//     padding-bottom:1000px;
//     padding-right: 0px;
// }

// .frgtdiv{
// text-align: right;
// margin-right:90px;
// }

// .pad-right{
//      margin-right: 10px;
//     padding-left: 10%;
//     margin-top: 120px;
//     display items: center;
//     background-color: white;

// }

// .LoginBtn{
//   width: 388px;
//   height: 48px;
//   left: 730px;
//   top: 548px;
//   filter: drop-shadow(0px 4px 8px rgba(38, 100, 157, 0.25));
// }

// .LoadBtn{
//   width: 388px;
//   height: 48px;
//   left: 730px;
//   top: 548px;
//   filter: drop-shadow(0px 4px 8px rgba(38, 100, 157, 0.25));
//   background-color: grey;
// }

// .SignupBtn{
//   width: 388px;
//   height: 48px;
//   left: 730px;
//   top: 548px;
//   filter: drop-shadow(0px 4px 8px rgba(38, 100, 157, 0.25));
//   //background-color: var(--color-white);
// }

// .word{

    
//   width: 225px;
//   //height: 19px;
//  // left: 730px;
//   top: 283px;
  
//   font-family: 'Work Sans';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 19px;
  
//   color: #4E4E4E;

// }

// .forgt_pw{

// }

// .yourcart {
//     padding-top: 80px;
//     padding-left: -10px;
//     margin-bottom: 10px;

//     font-size: var(--font-size-24px);
//     font-weight: var(--font-weight-500);
//     line-height: 28px;
//     color: black;
//   }
//   input[type="text"] {
//     box-sizing: border-box;
//    // position: absolute;
//     width: 388px;
//     height: 48px;
//     left: 730px;
//     top: 385px;
//     background: #FFFFFF;
//     border: 1px solid #26649D;
//     border-radius: 8px;
//   }

//   input[type="email"] {
//     box-sizing: border-box;
// //    position: absolute;
//     width: 388px;
//     height: 48px;
//     left: 730px;
//     top: 385px;
//     background: #FFFFFF;
//     border: 1px solid #26649D;
//     border-radius: 8px;
//   }

//   input[type="password"] {
//     box-sizing: border-box;
//   //  position: absolute;
//     width: 388px;
//     height: 48px;
//     left: 730px;
//     top: 385px;
//     background: #FFFFFF;
//     border: 1px solid #26649D;
//     border-radius: 8px;
//   }

//   .shipping p {
//     font-family: Work Sans;
//     font-size: 12px;
//     font-weight: 300;
//     line-height: 14px;
//   }


//   .continue {
//     margin-top: 10%;
//     margin-left:10%;
//     margin-right:10%;
//   }
//   .continue button {
//     background-color: #22669c;
//     /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
//     border: none;
//     padding: 10px 0px;
//     color: white;
//     width:100%;
//   }

//   .continue1 {
//     margin-top: 5%;
//     margin-left:10%;
//     margin-right:10%;
//   }
//   .continue1 button {
//     background-color: white;
//     /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
//     border: none;
//     padding: 10px 0px;
//     color: white;
//     width:100%;
//   }

//   .Remove{
    
//     //margin-right:20px;
//     width: 225px;
//   height: 19px;
//   left: 893px;
//   top: 473px;

// font-family: 'Work Sans';
// font-style: normal;
// font-weight: 500;
// font-size: 16px;
// line-height: 19px;
// /* identical to box height */

// text-align: right;
// text-decoration-line: underline;

// color: #4E4E4E;
//   }

//   .Remove:hover{
//     cursor: pointer;
//   }

//   .label-align {
//     padding-top: 22px;
//     font-family: Work Sans;
//     font-size: 16px;
//     font-weight: 500;
//     line-height: 40px;
//   }
  
//   .alignment-order {
//     padding-bottom: 10px;
//     margin-right: 100px;
//   }





`

export default Signin