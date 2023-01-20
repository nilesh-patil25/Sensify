import React,{useState,useEffect} from "react";
import styled from "styled-components";
import logoutIcon from '../assets/logout.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer.jsx";




const UserProfile = () => {

    var LoginEmail = localStorage.getItem("Current_Login_user");
    console.log(LoginEmail);


    const [userData,setUserData] = useState([]);

    const navigate = useNavigate();

    var obj={};
    useEffect(() => {
        getUserDetails();
    } , []);

    const getUserDetails =async (event) => {

             obj={
                "Url":"/get-user-profile",
                "EmailAddress":LoginEmail
            }

            const res = await axios.post("https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/get-user-profile",obj)
               //console.log(res?.data);
               setUserData(res.data.userProfile);
               
      }

      const handleClickout=()=>{
        navigate('/');
        console.log("clicked");
        window.localStorage.clear();
       // window.localStorage.remove("local_id_store");
        window.location.reload();
        
      }

      const ClickLogout =()=>{
        if(localStorage.getItem("local_id_store")>0){
             Swal.fire({
              icon: 'danger',
            //   title: 'Sorry!',
              text: `Are you sure you want to logout?`,
              showConfirmButton: true,
              confirmButtonText: "Logout",
              showCancelButton: true,
          }).then((result) => {
            
              if(result['isConfirmed'])
             
              {
                  handleClickout();
                 
                  
              }
              else{
                  console.log("cancelled");
                  
              }
          }
          
          );
         
          }
      }


    return (
        <>

        <Wrapper>
            <div className="container">
                <div className="row outer-row">
                    {/* <div style={{position:'absolute',}} > */}
                
                  {/* </div> */}
                    {/* <div className="col-xs-12 col-md-4">
                        <div className="Profile-pic-div">
                            <img src={image} id="photo" />
                            <input type='file' id='file' />
                        </div>
                    </div> */}
                    <div className="col-xs-6 col-md-4 Profile-name" >
                        <h4 style={{width:'max-content'}}>Hello, {userData.UserName}</h4>
                        <br />
                        <h6 className="Personal-detail">Personal Details</h6>

                        <br />
                        <h6 className="firstName">First name :</h6>

                        <br />
                        <h6 className="lastName">Last name :</h6>

                        <br />
                        <h6 className="email">Email :</h6>

                        <br />
                        <h5 className="shopping-detail">Shopping Details</h5>
                        <br />
                        <h6 className="address">Address :</h6>
                        <br />
                        <h5 className="login-security">Login/Security</h5>

                        <br />
                        <h6 className="security-email">Email :</h6>

                        <br />
                        <h6 className="password">Password :</h6>
                        <br />
                        
                                <button className="btn-order" type="submit" value="Submit">

                                    Reset password

                                </button>
                                <br/><br/><br/><br/>
                                {/* {load?<h1 className={load?'loading-spinner':'LoginBtn'} disabled={load} style={{color:'blue', margin:"10px 0 150px 120px"}}></h1>:''} */}
                            
                    </div>

                    <div className="col-xs-6 col-md-4 ">
                       
                        <button onClick={(e)=>{navigate("/yourOrders")}} className="btn-yourOrders">Your orders</button>
                       
                        
                        <br />
                        <div className="personal-line">

                        </div>
                        <br />
                        <h6 className="firstName-Api">{userData.UserName}</h6>

                        <br />
                        <h6 className="lastName-Api">{userData.UserName}</h6>

                        <br />
                        <h6 className="email-api">{userData.Email}</h6>
                        <br />
                        <div className="shoppingDetail-line">

                        </div>
                        <br />
                        <h6 className="address-Api">Lahore</h6>

                        <br />
                        <h6 className="securityEmail-Api">{userData.Email}</h6>

                        <br />
                        <h6 className="password-Api">************</h6>

                        <div class="alignment-order">
                 <div class="col continue1">
                   <button onClick={ClickLogout} type="submit" value="Submit" className='SignupBtn'>
                     <a
                      style={{ textDecoration: "none", color: "#26649d", textAlign: "center"}}
                    >
                      Log out
                    </a>
                  </button>
                  
                </div>
              </div>

                    </div>

                    <br/>



                </div>


            </div>
            
      
      
        </Wrapper>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      
        <Footer />
        </>
        
    );
}

export default UserProfile;


const Wrapper = styled.section`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.outer-row{
    position: absolute;
    top:200px
    width: 55%
    height: auto;
}


img {
    height: 120px;
    position: absolute;
}

body {
    height: 100vh;
    width: 100%;
}

.Profile-pic-div {
    position: absolute;
    width: 144px;
    height: 144px;
    left: 403px;
    top: 160px;
    
}

.Profile-name{
    position: absolute;
width: auto;
height: 28px;
left: 567px;
top: 218px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;

color: #4E4E4E;

}

.firstName {
    position: absolute;
width: 143px;
height: 21px;
// left: 567px;
top: 136px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}

.lastName {
position: absolute;
width: 143px;
height: 21px;
// left: 567px;
top: 185px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;

}

.email{
    position: absolute;
width: 143px;
height: 21px;
// left: 567px;
top: 232px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}



.btn-yourOrders {
    position: absolute;
height: 48px;
left: 893px;
top: 208px;
    border: 1px solid #f4f4f4;
    border-radius: 50px;
    padding: 8px;
    width: 137px;
    background: white;


}

.Personal-detail{
    position: absolute;
width: 225px;
height: 21px;
// left: 567px;
top: 86px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}

.shopping-detail{
    position: absolute;
width: 225px;
height: 21px;
// left: 567px;
top: 282px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}

.address {
    position: absolute;
width: 143px;
height: 21px;
// left: 567px;
top: 330px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}

.login-security{
    position: absolute;
width: 225px;
height: 21px;
// left: 567px;
top: 374px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;

}
.security-email{
    position: absolute;
    width: 143px;
    height: 21px;
    // left: 567px;
    top: 430px;
    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    
    color: #4E4E4E;
}

.password{
    position: absolute;
width: 143px;
height: 21px;
// left: 567px;
top: 478px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}

.personal-line{
    position: absolute;
width: 225px;
height: 0px;
left: 730px;
top: 315px;

border: 1px solid rgba(38, 100, 157, 0.5);
}

.firstName-Api{
    position: absolute;
width: 143px;
height: 21px;
left: 730px;
top: 353px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}

.lastName-Api{
    position: absolute;
width: 143px;
height: 21px;
left: 730px;
top: 402px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}

.email-api{
    position: absolute;
width: 307px;
height: 21px;
left: 730px;
top: 448px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}

.shoppingDetail-line{
    position: absolute;
width: 225px;
height: 0px;
left: 730px;
top: 510px;

border: 1px solid rgba(38, 100, 157, 0.5);
}

.address-Api{
    position: absolute;
width: 225px;
height: 38px;
left: 730px;
top: 550px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;

color: #4E4E4E;

}

.securityEmail-Api{
    position: absolute;
width: 307px;
height: 21px;
left: 730px;
top: 646px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;

}

.password-Api{
    position: absolute;
width: 307px;
height: 21px;
left: 730px;
top: 700px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}


#file {
    display: none;
}

#uploadBtn {
    height: 40px;
    width: 100%;
    transform: translate(-50%);
    text-align: center;
    position: absolute;
}

.alignment-order {
    
    padding-bottom: 50px;
    
}



.btn-order{
    position: absolute;
    padding: 5px;
    top:548px;
    background-color: #22669c;
    width: 210px;
    font-size: large;
    color: white;
    border: 1px solid #22669c;
    border-radius: 8px;
}

.continue1 {
    position: absolute;
    top: 763px;
    left: 800px;
      
      }
      .continue1 button {
        background-color: white;
         box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); 
        
        border: none;
        padding: 10px 0px;
        color: white;
        width:100px;
      }





`