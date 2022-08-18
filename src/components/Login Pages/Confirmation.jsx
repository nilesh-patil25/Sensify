import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import outline from "../../assets/outline.svg";
import { useState } from 'react';
import art1 from '../../assets/art.png';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';


function Confirmation() {

    const [Number,setNumber]=useState("");
    const [load,setLoad]=useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    function handleClickSignIn(){
        var stat;
           var obj={
            "EmailAddress":"xaidi.zaidi.ali@gmail.com",
            "Url":"/confirmsignup",
            "UserId":5,
            "ConfirmationCode":"881932"
        }

        obj["ConfirmationCode"]=Number;
        var newuserid=parseInt(location.state.userid);
        obj["EmailAddress"]=location.state.email;
        obj["UserId"]=newuserid;

        console.log("obj",obj);
       
        var api='https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/confirm-user'
        setLoad(true);
        Axios.post(api,obj).then(res=>{
            console.log("Axios Response Confirmation: ",res.data);
            stat=res.data;
            console.log("stat",stat["StatusCode"]);
            if(stat["StatusCode"]===0){
                Swal.fire({
                icon: 'success',
                title: 'Confirmed!',
                text: `${location.state.email} has been Confirmed.`,
                showConfirmButton: false,
                timer: 3500,
            });
            var useridval=stat.Data.UserId;
            console.log("userid",useridval);
            setLoad(false);
            navigate('/Signin');
            }
            else{
                Swal.fire({
                  icon: 'warning',
                  title: 'Confirmation Failed',
                  text: "Invalid Code, Please Enter Again!",
                  showCancelButton: false,
                  confirmButtonText: 'Try Again!',
              });
              setLoad(false);
              }


        })



        //navigate('/Signup');
    }

   const Clickback = () => {
    navigate('/Signup');
  
   }
  return (
    <Wrapper>
       
    <div>
        <div className="row container">
        <section  className='col-md-6 new'> 
        <img src={art1} alt="Cart_icon" className='img-here'/>
        </section>


         <section className='col-md-6 pad-right'>
            <div className="row">
            <div class="col yourcart">
                  <img
                    src={outline}
                    class="arrowHide"
                    alt=""
                    style={{ position: "relative", left: "-25px" }}
                    onClick={Clickback}
                  />
                  Confirmation Code
                </div>
                </div>
                <br/>
                <br/>
                <div class="row">
                <div class="col">
                
                </div>
              </div>


              <section class="shipping">
             
             <form>
             
               {/* <PaymentElement /> */}

             <div class="col">
             
               <div class="row">
                 <div class="col-lg-4 col-sm-12">
                   <label for="number" class="label-align word">
                     Code:
                   </label>
                 </div>
              </div>
                 <div class="row">
                 <div class="col-lg-6 col-sm-12">
                   <input
                     type="text"
                     name="number"
                     placeholder="Enter Code"
                     value={Number}
                     onChange={(e)=>setNumber(e.target.value)}
                   />
                    {/* <div style={{color:'red',fontsize:'12px'}}>{addresserror}</div> */}
                 </div>
                 </div>
               

               <br></br>

             
               </div>
            </form>
    </section>

    

    <div class="alignment-order">
                <div class="col continue">
                  <button onClick={handleClickSignIn} type="submit" value="Submit">
                    <a
                      style={{ textDecoration: "none", color: "white",textAlign:"center" }}
                    >
                      Confirm
                    </a>
                  </button>
                  {load?<h1 className={load?'loading-spinner':'LoginBtn'} disabled={load} style={{color:'blue', margin:"10px 0 170px 130px"}}></h1>:''}
                </div>
              </div>

        </section>   
            </div>

    </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`

.new{
    background-color: #26649d;
    margin-left: -15px;
    padding-bottom:1000px;
    padding-right: 0px;
    overflow: hidden;
    height: 100vh;
}

.pad-right{
    padding-right: 10px;
    padding-left: 100px;
    margin-top: 120px;
    background-color: white;
    overflow: hidden;
    height: 100vh;

}

.img-here {
  //height: 10%;
  margin-left: 0px;
  width: 100%;
  margin-top: 0px;
  //margin-bottom: 0px;
}


.word{

    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */


    color: #4E4E4E;

}


.yourcart {
    padding-top: 68px;
    font-size: var(--font-size-24px);
    font-weight: var(--font-weight-500);
    line-height: 28px;
  }
  input[type="text"] {
    box-sizing: border-box;
   // position: absolute;
    width: 388px;
    height: 48px;
    left: 730px;
    top: 385px;
    background: #FFFFFF;
    border: 1px solid #26649D;
    border-radius: 8px;
    margin-right: 30px;
  }

  .col-lg-4{
    width: 0%;
  }
  input[type="email"] {
    box-sizing: border-box;
//    position: absolute;
    width: 388px;
    height: 48px;
    left: 730px;
    top: 385px;
    background: #FFFFFF;
    border: 1px solid #26649D;
    border-radius: 8px;
  }

  input[type="password"] {
    box-sizing: border-box;
  //  position: absolute;
    width: 388px;
    height: 48px;
    left: 730px;
    top: 385px;
    background: #FFFFFF;
    border: 1px solid #26649D;
    border-radius: 8px;
  }

  .shipping p {
    font-family: Work Sans;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
  }


  .continue {
    margin-top: 40px;
    margin-left:40px;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
    border: none;
    padding: 10px 0px;
    color: white;
    width:100%;
  }

  .continue1 {
    margin-top: 10px;
    margin-left:40px;
  }
  .continue1 button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
    border: none;
    padding: 10px 0px;
    color: white;
    width:100%;
  }

  .Remove{
    margin-left:300px;
  }

  .Remove:hover{
    cursor: pointer;
  }

  .label-align {
    padding-top: 22px;
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
  
  .alignment-order {
    padding-bottom: 10px;
    margin-right: 180px;
  }


  .container {
    height: 100vh;
    overflow: hidden;
}


`

export default Confirmation