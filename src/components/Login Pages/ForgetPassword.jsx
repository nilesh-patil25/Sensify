import React, { useState } from "react";
import styled from "styled-components";
import art1 from '../../assets/forgot.svg';
import pattern1 from '../../assets/Pattern1.svg';
import pattern2 from '../../assets/pattern2.svg';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import Axios from 'axios';
import config from '../../config';



const ForgetPassword = () => {

    const navigate = useNavigate();

    const [email,setEmail] = useState('')
    const [emailerror,setEmailerror] = useState('')

    const [load,setLoad]=useState(false);
    var obj={};
    //  const handleSubmit = () => {
    //     navigate(`/Forgot_PasswordLink`)
    //  }

     function validate ()  {
       
         let emailerror="";
        
         

          ///VALIDATION CHECKS
         if(email.includes("@")===false){
          emailerror="Email is not valid";
         }

          if(emailerror!==""){
           
            setEmailerror(emailerror);
            
            return false;
          }

//////////////////////////////////////////////////////////////////

         if(emailerror){
          console.log("Email error",emailerror);
          setEmailerror(emailerror);
          return false;
         }


         return true;
    }

    const handleSubmit = (event) => {
        // 👇️ navigate programmatically

        var checkin=false;

        event.preventDefault();

        const isValid=validate();
        console.log("isValid",validate());

        if(isValid){
             obj={
                "EmailAddress":email,
                "Url":"/forget-password",
            }
             obj["EmailAddress"]=email;
            

            var stat;
            var api=`${config.BASE_URL}/forget-password`;
            setLoad(true);
            Axios.post(api,obj).then(res=>{
                console.log("Axios Response: ",res.data);
                stat=res.data;
                
                console.log("stat",stat["StatusCode"]);
                
                if(stat["StatusCode"]===200){
                    checkin=true;
                    navigate(`/Forgot_PasswordLink`,{state:{email:email}})
                    Swal.fire({
                    icon: 'success',
                    title: 'Added!',
                    text: `${email} has been Sent. Kindly Check your Email.`,
                    showConfirmButton: false,
                    timer: 3500,
                    
                });
                var useridval=stat.Data.UserId;
                console.log("userid",useridval);
                setLoad(false);
                navigate('/Confirmation',{state:{userid:useridval,email:email}});
    
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
              }).catch(e =>{
            //     Swal.fire({
            //       icon: 'warning',
            //       title: 'Error!',
            //       text: e.Message,
            //       showCancelButton: false,
            //       confirmButtonText: 'Try Again!',
            //   }) 
              }).finally(()=>{
                setLoad(false);
              })
        }
      }


    return (
        <Wrapper>
            <div className="container-fluid p-0">
    
            <div className="card">
                <div className="row">
                    <div className="col">
                        <section className='col-md-6 new'>
                            <img src={art1} alt="Cart_icon" className='img-here' />
                        </section>

                        <section className='col-md-6 new'>
                            <img src={pattern2} alt="Cart_icon" className='img-Pattern2' />
                        </section>
                    </div>
                    <div className="col">
                        <div className="title">
                            <h4>Forget Your Password?</h4>
                        </div>

                        <div className="discription">
                            No biggie, let’s fetch a new one for you. Enter your email ID below and we’ll send you a link to reset your password.
                        </div>


                        <label for="Email" class="label-align word">
                            E-mail :
                        </label>
                        <div class="row">
                            <input
                                type="email"
                                name="Email"
                                placeholder=""
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>
                        <div style={{color:'red',marginTop:'4px',marginLeft:'38px'}}>{emailerror}</div>


                        <div class="alignment-order">
                            <div class="col continue">
                                <button onClick={handleSubmit} type="submit" value="Submit">
                                    <a
                                        style={{ textDecoration: "none", color: "white", textAlign: "center" }}
                                    >
                                        Submit
                                    </a>
                                </button>
                                {load?<h1 className={load?'loading-spinner':'LoginBtn'} disabled={load} style={{color:'blue', margin:"10px 0 150px 120px"}}></h1>:''}

                            </div>
                        </div>

                        <section className='col-md-6 new'>
                            <img src={pattern1} alt="Cart_icon" className='img-Pattern1' />
                        </section>


                    </div>

                </div>
            </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

.card {
    position: absolute;
width: 968px;
height: 580px;
left: 284px;
top: 151px;

background: #FFFFFF;
box-shadow: 0px 4px 32px 16px rgba(30, 30, 30, 0.25);
border-radius: 8px;
}

.title {
    position: absolute;
width: 307px;
height: 28px;
left: 530px;
top: 50px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;

color: #4E4E4E;
}

.discription {
    position: absolute;
    width: 307px;
    height: 76px;
    left: 530px;
    top: 100px;
    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
    
    color: #4E4E4E;
}

.label-align {
    position: absolute;
width: 178px;
height: 19px;
left: 530px;
top: 220px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */
color: #4E4E4E;
}

input[type="email"] {
    box-sizing: border-box;
//    position: absolute;
    width: 320px;
    height: 48px;
    left: 530px;
    top: 375px;
    background: #FFFFFF;
    border: 1px solid #26649D;
    border-radius: 8px;
    margin-top: 270px;
    margin-left: 50px
  }

  .alignment-order {
    
    position: absolute;
width: 306px;
height: 48px;
left: 530px;
top: 350px;

filter: drop-shadow(0px 16px 24px rgba(38, 100, 157, 0.3));
  }
  .continue {
    margin-top: 10px;
    margin-left:20px;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
    border: none;
    padding: 10px 0px;
    color: white;
    width:100%;
  }

  .img-here {
    position: absolute;
width: 370px;
height: 300px;
left: 80px;
top: 100px;
  }

  .img-Pattern2 {
    position: absolute;
width: 165px;
height: 150px;
left: 2px;
top: 450px;

mix-blend-mode: normal;
border-radius: 8px 0px 0px 8px;
transform: rotate(0deg)
  }

  .img-Pattern1 {
    position: absolute;
width: 480px;
height: 148px;
left: 470px;
top: 424px;

mix-blend-mode: normal;
opacity: 0.5;
border-radius: 8px 0px 0px 8px;
transform: matrix(1, 0, 0, 1, 0, 0);
  }

`

export default ForgetPassword