import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import outline from "../../assets/outline.svg";
import { useState } from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';
import art1 from '../../assets/art.png';
import '../spinner.css';
import config from '../../config';
import resetPasswordLeft from '../../assets/resetPasswordLeft.svg';

function Signup() {

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const[firstnameerror,setFirstNameerror]=useState("");
    const[lastnameerror,setLastNameerror]=useState("");
    const[emailerror,setEmailerror]=useState("");
    const[passworderror,setPassworderror]=useState("");
    const[confirmpassworderror,setConfirmPassworderror]=useState("");

    

    const [load,setLoad]=useState(false);
    var obj={};
    const navigate = useNavigate();
    function handleClickSignup(){
        navigate('/Signup');
    }

    function validate ()  {
        let firstnameerror="";
        let lastnameerror="";
         let emailerror="";
         let passworderror="";
         let confirmpassworderror="";
         

          ///VALIDATION CHECKS
         if(Email.includes("@")===false){
          emailerror="Email is not valid";
         }


         if(firstName==="" || firstName.length<3 || firstName.length>30){
          firstnameerror="Invalid firstName";
         }

         if(lastName==="" || lastName.length<3 || lastName.length>30){
          lastnameerror="Invalid lastName";
         }
        
          // var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

          if(Password==="" || Password.length < 7  ){
            passworderror="please enter strong password";
        }


        if( Password !== confirmPassword){
          confirmpassworderror='Password does not match'
        }

          if(firstnameerror !=="" || lastnameerror!=="" || emailerror!=="" || passworderror!=="" || confirmpassworderror!=="" ){
            setFirstNameerror(firstnameerror)
            setLastNameerror(lastnameerror)
            setEmailerror(emailerror);
            setPassworderror(passworderror);
            setConfirmPassworderror(confirmpassworderror);
            return false;
          }

//////////////////////////////////////////////////////////////////

          if(firstnameerror){
            console.log("firstName error",firstnameerror);
            setFirstNameerror(firstnameerror);
            return false;
          }

          if(lastnameerror){
            console.log("lastName error",lastnameerror);
            setLastNameerror(lastnameerror);
            return false;
          }
          
          

         if(emailerror){
          console.log("Email error",emailerror);
          setEmailerror(emailerror);
          return false;
         }

         if(passworderror){
          console.log("Password error",passworderror);
          setPassworderror(passworderror);
          return false;
         }

         if(confirmpassworderror){
          console.log("Password error",confirmpassworderror);
          setPassworderror(confirmpassworderror);
          return false;
         }

         return true;
}

    const Clickback=()=>{
        //closemodel(false);
        navigate('/Signin');
    }

    const handleClick = (event) => {
        // 👇️ navigate programmatically

        var checkin=false;

        event.preventDefault();

        const isValid=validate();
        console.log("isValid",validate());

        if(isValid){
             obj={
                "EmailAddress":"myemail121@gmail.com",
                "Password":"PAin77@!",
                "confirmPassword":"PAin77@!",
                // "UserName":"Ali Hamza",
                "FirstName":"Ali",
                "LastName":"Hamza",
                "PhoneNumber":"+923214186535",
                "Url":"/signup",
                 "Gender":"male",
                 "IsStuffyNose":false,
                 "IsThereLossOfMemory":false,
                  "Medication":"",
                  "Age":24
            }
             obj["EmailAddress"]=Email;
             obj["Password"]=Password;
             obj["confirmPassword"]=confirmPassword;
            //  obj["UserName"]=firstName+','+ lastName   //Name
              obj["FirstName"]=firstName;
              obj["LastName"]=lastName;

            //  console.log(obj["UserName"]);

            var stat;
            var api=`${config.BASE_URL}/signup`;
            setLoad(true);
            Axios.post(api,obj).then(res=>{
                console.log("Axios Response: ",res.data);
                stat=res.data;
                
                console.log("stat",stat["StatusCode"]);
                
                if(stat["StatusCode"]===200){
                    checkin=true;
                    Swal.fire({
                    icon: 'success',
                    title: 'Added!',
                    text: `${firstName} has been Signed Up. Kindly Confirm your Email Address.`,
                    showConfirmButton: false,
                    timer: 3500,
                });
                var useridval=stat.Data.UserId;
                console.log("userid",useridval);
                setLoad(false);
                navigate('/Confirmation',{state:{userid:useridval,email:Email}});
    
                }
                else{
                    Swal.fire({
                      icon: 'warning',
                      title: 'Invalid!',
                      text: stat["Message"],
                      showCancelButton: false,
                      confirmButtonText: 'Try Again!',
                  })
                  setLoad(false);
                  }
              })
        }
      }

  return (
    // <Wrapper>
       
    // <div className=''>
    //     <div className="row container">
    //     <section  className='col-md-6 new'> 
    //     <img src={art1} alt="Cart_icon" className='img-here'/>
    //     </section>


    //      <section className='col-md-6 pad-right'>
    //         <div className="row">
    //         <div class="col yourcart">
    //               <img
    //                 src={outline}
    //                 class="arrowHide"
    //                 alt=""
    //                 style={{ position: "relative", left: "-25px" }}
    //                 onClick={Clickback}
    //               />
    //               Sign Up
    //             </div>
    //             </div>
    //             <div class="row">
    //             <div class="col">
    //               <br />
               
                
    //             </div>
    //           </div>


    //           <section class="shipping">
             
    //          <form>
             
    //            {/* <PaymentElement /> */}

    //          <div class="col">

    //           <div className='row'>


    //           <div className="col-lg-4 col-sm-6">
               
    //              <div>
    //                <label for="fname" class="label-align word">
    //                  First name :
    //                </label>
    //              </div>
    //              <div class="row1">
    //                <input
    //                  type="text"
    //                  value={firstName}
    //                  name="firstName"
    //                  placeholder=""
    //                  onChange={(e)=>setFirstName(e.target.value)}
    //                /> </div>
    //                <div style={{color:'red',marginTop:'40px',marginLeft:'16px'}}>{firstnameerror}</div>
                 
    //              </div>

    //              <div className="col-lg-4 col-sm-6">
               
    //              <div style={{marginLeft:'6px'}}>
    //                <label for="fname" class="label-align word">
    //                  Last name :
    //                </label>
    //              </div>
    //              <div class="row1">
    //                <input
    //                  type="text"
    //                  style={{marginLeft:'6px'}}
    //                  value={lastName}
    //                  name="lastName"
    //                  placeholder=""
    //                  onChange={(e)=>setLastName(e.target.value)}
    //                /></div> 
    //                <div style={{color:'red',marginTop:'40px',marginLeft:'16px'}}>{lastnameerror}</div>
                 
    //              </div>

                 
    //           </div>


    //             <div class="row">

    //              <div class="col-lg-4 col-sm-12">
    //                <label for="Email" class="label-align word">
    //                E-mail :
    //                </label>
    //              </div>
    //              <div class="row1">
    //                <input
    //                  type="email"
    //                  name="Email"
    //                  placeholder=""
    //                  value={Email}
    //                  onChange={(e)=>setEmail(e.target.value)}
    //                /></div>
    //                 <div style={{color:'red',marginTop:'40px',marginLeft:'16px'}}>{emailerror}</div>
                 


    //            </div>

               

    //            <div class="row">
    //              <div class="col-lg-4 col-sm-12">
    //                <label for="Password" class="label-align word">
    //                  Password :
    //                </label>
    //              </div>
    //              <div class="row1">
    //                <input
    //                  type="password"
    //                  name="Password"
    //                  placeholder=""
    //                  value={Password}
    //                  onChange={(e)=>setPassword(e.target.value)}
    //                />
    //                </div>
    //                {/* <span class="input-group-text">
    //         <i class="far fa-eye-slash" id="togglePassword"
    //         style="cursor: pointer"></i>
    //     </span> */}
                   
    //                 <div style={{color:'red',marginTop:'40px',marginLeft:'16px'}}>{passworderror}</div>
                 
    //            </div>

    //            <div class="row">
    //              <div class="col-lg-4 col-sm-12">
    //                <label for="Password" class="label-align word">
    //                 Confirm Password :
    //                </label>
    //              </div>
    //              <div class="row1">
    //                <input
    //                  type="password"
    //                  name="confirmPassword"
    //                  placeholder=""
    //                  value={confirmPassword}
    //                  onChange={(e)=>setConfirmPassword(e.target.value)}
    //                />
    //                </div>
    //                 <div style={{color:'red',marginTop:'40px',marginLeft:'16px'}}>{confirmpassworderror}</div>
                 
    //            </div>
    //            </div>
    //         </form>
    // </section>

    

    // <div class="alignment-order">
    //             <div class="col continue">
    //               <button onClick={handleClick} type="submit" value="Submit">
    //                 <a
    //                   style={{ textDecoration: "none", color: "white",textAlign:"center" }}
    //                 >
    //                   Sign Up
    //                 </a>
    //               </button>
    //               {load?<h1 className={load?'loading-spinner':'LoginBtn'} disabled={load} style={{color:'blue', margin:"10px 0 150px 120px"}}></h1>:''}
    //             </div>
    //           </div>
    //     </section>   
    //         </div>

    // </div>
    // </Wrapper>

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
                 {/* <img
                    src={outline}
                    class="arrowHide"
                    alt=""
                    style={{ position: "relative", left: "-25px",curso: "pointer" }}
                    onClick={(e)=>{navigate("/signin")}}
                  /> */}
                  Sign up
                </div>
              </div>

              <section class="shipping">

                 <form>

                   {/* <PaymentElement /> */}

                  

           <div className='row'>


           <div className="col-lg-4 col-sm-6">
           
              <div>
                <label for="fname" class="label-align-first word">
                 First name :
               </label>
             </div>
             <div class="row1">
                <input
                 type="text"
                 value={firstName}
                 name="firstName"
                 placeholder=""
                 onChange={(e)=>setFirstName(e.target.value)}
               /> </div>
               <div style={{color:'red',position:'absolute',top:'204px',left:'104px'}}>{firstnameerror}</div>
             
             </div>

             <div className="col-lg-4 col-sm-6">
           
             <div style={{marginLeft:'6px'}}>
               <label for="fname" class="label-align-last word">
                 Last name :
               </label>
             </div>
             <div class="row input-Lname">
               <input
                 type="text"
                //  style={{marginLeft:'6px'}}
                 value={lastName}
                 name="lastName"
                 placeholder=""
                 onChange={(e)=>setLastName(e.target.value)}
               /></div> 
               <div style={{color:'red',position:'absolute',top:'204px',left:'278'}}>{lastnameerror}</div>
             
             </div>

             
          </div>


            <div class="row">

             <div class="col-lg-4 col-sm-12">
               <label for="Email" class="label-align-email word">
               E-mail :
               </label>
             </div>
             <div class="row1">
               <input
                 type="email"
                 name="Email"
                 placeholder=""
                 value={Email}
                 onChange={(e)=>setEmail(e.target.value)}
               /></div>
                <div style={{color:'red',position:'absolute',left:'92px',top:'296'}}>{emailerror}</div>
             


           </div>

           

           <div class="row">
             <div class="col-lg-4 col-sm-12">
               <label for="Password" class="label-align-password word">
                 Password :
               </label>
             </div>
             <div class="row1">
               <input
                 type="password"
                 name="Password"
                 placeholder=""
                 value={Password}
                 onChange={(e)=>setPassword(e.target.value)}
               />
               </div>
               {/* <span class="input-group-text">
        <i class="far fa-eye-slash" id="togglePassword"
        style="cursor: pointer"></i>
    </span> */}
               
                <div style={{color:'red',position:'absolute',top:'386px',left:'92'}}>{passworderror}</div>
             
           </div>

           <div class="row">
             <div class="col-lg-4 col-sm-12">
               <label for="Password" class="label-align-Cpassword word">
                Confirm Password :
               </label>
             </div>
             <div class="row input-CPassword">
               <input
                 type="password"
                 name="confirmPassword"
                 placeholder=""
                 value={confirmPassword}
                 onChange={(e)=>setConfirmPassword(e.target.value)}
               />
               </div>
                <div style={{color:'red',position:'absolute',top:'479px',left:'96px'}}>{confirmpassworderror}</div>
             
           </div>
           
                     

                </form>
              </section>

              <div class="alignment-order">
                 <div class="col continue">
                   <button onClick={handleClick} type="submit" value="Submit">
                     <a
                      style={{ textDecoration: "none", color: "white",textAlign:"center" }}
                    >
                      Sign Up
                    </a>
                  </button>
                  {load?<h1 className={load?'loading-spinner':'LoginBtn'} disabled={load} style={{color:'blue', margin:"10px 0 150px 120px"}}></h1>:''}
                </div>
              </div>

          </div>
          </div>

        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


.left_Container {
  position: absolute;
width: 628px;
height: 781px;
left: 0px;
top: 0px;

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
  left: 628px;
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

input[type="text"] {
      box-sizing: border-box;
     position: absolute;
      width: 152px;
      height: 48px;
      left: 100px;
      top: 150px;
      background: #FFFFFF;
      border: 1px solid #26649D;
      border-radius: 8px;
      margin-top: 7px;
    }

    .input-Lname{
      box-sizing: border-box;
     position: absolute;
      width: 152px;
      left: 185px;
      top: 0px;
      background: #FFFFFF;
      border-radius: 8px;
    }
  
    input[type="email"] {
      box-sizing: border-box;
     position: absolute;
      width: 328px;
      height: 48px;
      left: 100px;
      top: 240px;
      background: #FFFFFF;
      border: 1px solid #26649D;
      border-radius: 8px;
      margin-top: 10px;
      margin-bottom:15px;
      padding-left:20px;
    }
  
    input[type="password"] {
      box-sizing: border-box;
      position: absolute;
      width: 328px;
      margin-top: 10px;
      height: 48px;
      left: 100px;
      top: 330px;
      background: #FFFFFF;
      border: 1px solid #26649D;
      border-radius: 8px;
      padding-left:20px;
    }

    .input-CPassword{
      box-sizing: border-box;
      position: absolute;
      width: 328px;
      left: 12px;
      top: 96px;
      background: #FFFFFF;
      border-radius: 8px;
      padding-left:20px;
    }

    .row1{
              margin-left: 15px;
              height: 18px;
        }

        .label-align-first {
          position: absolute;
          top:132px;
            left:100px;
              font-family: Work Sans;
              font-size: 16px;
              font-weight: 500;
              line-height: 19px;
              
            }
            .label-align-last {
              position: absolute;
              top:132px;
                left:278px;
                  font-family: Work Sans;
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 19px;
                  
                }
                .label-align-email {
                  position: absolute;
                  top:226px;
                    left:100px;
                      font-family: Work Sans;
                      font-size: 16px;
                      font-weight: 500;
                      line-height: 19px;
                      
                    }

                    .label-align-password {
                      position: absolute;
                      top:316px;
                        left:100px;
                          font-family: Work Sans;
                          font-size: 16px;
                          font-weight: 500;
                          line-height: 19px;
                          
                        }
                        .label-align-Cpassword {
                          position: absolute;
                          top:408px;
                            left:100px;
                              font-family: Work Sans;
                              font-size: 16px;
                              font-weight: 500;
                              line-height: 19px;
                              
                            }
                            
                            .continue {
                              position: absolute;
                              top: 500px;
                              left: 100px;
                                }
                                .continue button {
                                  background-color: #22669c;
                                  border: none;
                                  padding: 10px 0px;
                                  color: white;
                                  width:328px;
                                }






// .Modalback{
//     // width:500vw;
//     // height:100vh;
//     // background-color:white;
//     // position:fixed;
//     // display: flex;
//     // justify-content: center;
//     // align-items: center;
// }

// .img-here {
//     height: 100%;
//     width: 100%;
//     margin-left: 0px;
//     margin-top: 0px;
//   }

// .new{
//     background-color: #26649d;
//     margin-left: -15px;
//     padding-bottom:1000px;
//     padding-right: 0px;
// }

// .pad-right{
//     padding-right: 10px;
//     padding-left: 100px;
//     margin-top: 120px;
//     background: white;

// }

// .word{

    
//     font-family: 'Work Sans';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 19px;
//     /* identical to box height */


//     color: #4E4E4E;

// }


// .yourcart {
//     padding-top: 68px;
//     font-size: var(--font-size-24px);
//     font-weight: var(--font-weight-500);
//     line-height: 28px;
//   }
//   input[type="text"] {
//     box-sizing: border-box;
//    // position: absolute;
//     width: 152px;
//     height: 48px;
//     left: 730px;
//     top: 385px;
//     background: #FFFFFF;
//     border: 1px solid #26649D;
//     border-radius: 8px;
//     margin-top: 7px;
//   }

//   input[type="email"] {
//     box-sizing: border-box;
// //    position: absolute;
//     width: 328px;
//     height: 48px;
//     left: 730px;
//     top: 385px;
//     background: #FFFFFF;
//     border: 1px solid #26649D;
//     border-radius: 8px;
//     margin-top: 10px;
//     margin-bottom:15px;
//     padding-left:20px;
//   }

//   input[type="password"] {
//     box-sizing: border-box;
//   //   position: absolute;
//     width: 328px;
//     margin-top: 10px;
//     height: 48px;
//     left: 730px;
//     top: 385px;
//     background: #FFFFFF;
//     border: 1px solid #26649D;
//     border-radius: 8px;
//     padding-left:20px;
//   }

//   .shipping p {
//     font-family: Work Sans;
//     font-size: 12px;
//     font-weight: 300;
//     line-height: 14px;
//   }
  
// .row1{
//         margin-left: 15px;
//         height: 18px;
//   }

//   .continue {
//     margin-top: 40px;
//     margin-left:40px;
//   }
//   .continue button {
//     background-color: #22669c;
//     /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
//     border: none;
//     padding: 10px 0px;
//     color: white;
//     width:100%;
//   }

//   .label-align {
//     font-family: Work Sans;
//     font-size: 16px;
//     font-weight: 500;
//     line-height: 19px;
//     margin-left: 14px;
//     margin-top:-18px
//   }
  
//   .alignment-order {
//     padding-bottom: 10px;
//     margin-top: 40px;
//     margin-right: 170px;
//   }


// .container {
//     height: 100vh;
//     overflow: hidden;
// }


`

export default Signup