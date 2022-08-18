import React,{useState} from "react";
import styled from "styled-components";
import resetPasswordLeft from '../../assets/resetPasswordLeft.svg';
import { useNavigate, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2';
import Axios from 'axios';
import config from '../../config';



const ResetPassword = () => {
  const navigate = useNavigate();
  // const param = useParams()
  const location = useLocation()
  console.log('code is', location.state.code);
  console.log('email is', location.state.email);

  const confirmationCode = location.state.code
  const email = location.state.email

  const [newPassword,setNewPassword]=useState('');
  const [newConfirmPassword,setNewConfirmPassword]=useState('');
  const [newpasswordConfirm,setNewPasswordConfirm]=useState('');
  const [load,setLoad]=useState(false);
  const [passworderror,setPassworderror] = useState("")
  const [confirmpassworderror,setConfirmPassworderror] = useState('')
    var obj={};

    function validate ()  {
       let passworderror="";
       let confirmpassworderror="";
      


       
      
        // var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        if(newPassword==="" || newPassword.length < 7  ){
          passworderror="Please Enter atleast 8 characters ";
      }


      if( newPassword !== newConfirmPassword){
        confirmpassworderror='Password does not match'
      }

      if(newPassword == newConfirmPassword){
        setNewPasswordConfirm(newConfirmPassword)
      }

        if(passworderror!=="" || confirmpassworderror!==""  ){ 
          setPassworderror(passworderror);
          setConfirmPassworderror(confirmpassworderror);
          return false;
        }

//////////////////////////////////////////////////////////////////

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


  const handleSubmit = (event) => {
    // 👇️ navigate programmatically

    var checkin=false;

    event.preventDefault();

    const isValid=validate();
    console.log("isValid",validate());

    if(isValid){
         obj={
          "Url":"/change-password",
            "EmailAddress":email,
            "ConfirmationCode":confirmationCode,
            "NewPassword":newpasswordConfirm
            
        }
         obj["EmailAddress"]=email;
         obj["ConfirmationCode"]=confirmationCode;
             obj["NewPassword"]=newPassword
        

        var stat;
        var api=`${config.BASE_URL}/change-password`;
        setLoad(true);
        Axios.post(api,obj).then(res=>{
          setLoad(false);
            console.log("Axios Response: ",res.data);
            stat=res.data;
            
            console.log("stat",stat["StatusCode"]);
            
            if(stat["StatusCode"]===200){
                checkin=true;
                navigate(`/reset_Successfully`)
                Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Password Changed Successfully',
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
          //   Swal.fire({
          //     icon: 'warning',
          //     title: 'Error!',
          //     text: e.Message,
          //     showCancelButton: false,
          //     confirmButtonText: 'Try Again!',
          // }) 
          }).finally(()=>{
            setLoad(false);
          })
    }
  }

  return (
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
          <div className="card">
            <div style={{margin:"0px 0px 0px 70px",width:"80%"}}>
              
            <div style={{marginTop:"50px",width:"90%"}}>
              <h4>Reset password</h4>
              <p style={{marginTop:"30px"}}> We recommend using 8-16 characters for the password. A good mix of special characters, numbers, lower and upper case letters make for a strong password.</p>
            </div>

            
             
           

            <div className="row" style={{marginTop:"32px"}}>
                <label for="Password" style={{marginLeft:"8px"}}>
                  New passwords :
                </label>
               
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  value={newPassword}
                  onChange={(e)=>{setNewPassword(e.target.value)}}

                />
                {/* <div >{passworderror}</div>  */}
            </div>

            <div className="row" style={{marginTop:"25px"}}>
              <label for="Password"  style={{marginLeft:"8px"}}>
                Confirm new Password :
              </label>
              <input
                type="password"
                name="ConfirmPassword"
                placeholder="ConfirmPassword"
                value={newConfirmPassword}
                onChange={(e)=>{setNewConfirmPassword(e.target.value)}}

              />
              <div style={{color:'red'}}>{confirmpassworderror}</div>
            </div>

            <div class="row1 continue" style={{marginTop:"50px"}}>
              <button onClick={handleSubmit} type="submit" value="Submit" >
                  
                  Reset password
        
              </button> 
              {load?<h1 className={load?'loading-spinner':'LoginBtn'} disabled={load} style={{color:'blue', margin:"10px 0 150px 120px"}}></h1>:''}
            </div>

            </div>


            {/* <div style={{color:'red',marginTop:'40px',marginLeft:'16px'}}>{confirmpassworderror}</div> */}

            
                {/* <button onClick={handleSubmit} type="submit" value="Submit">
                  
                    Reset password
          
                </button> */}
              


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

.card {
    position: relative;
    width: 612px;
    height: 580px;
    left: 628px;
    top: 151px;

background: #FFFFFF;
box-shadow: 0px 4px 32px 16px rgba(30, 30, 30, 0.25);
border-radius: 8px;
}

.title {
    position: absolute;
width: 307px;
height: 28px;
left: 140px;
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
    left: 140px;
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
    left: 140px;
    top: 190px;
    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    color: #4E4E4E;
  }

  input[type="password"] {
    box-sizing: border-box;
  //   position: absolute;
    width: 328px;
    margin-top: 10px;
    margin-left: 20px;
    height: 48px;
    left: 730px;
    top: 260px;
    background: #FFFFFF;
    border: 1px solid #26649D;
    border-radius: 8px;
    padding-left:20px;
    // margin-left:124px;
    // margin-top:240px;
  }

  
.row1{
        margin-left: 138px;
        height: 18px;
  }

  .alignment-order {
    padding-bottom: 10px;
    margin-top: 40px;
    margin-right: 170px;
  }

  .continue {
    // margin-top: 40px;
    margin-left:10px;
    width:102%;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
    border: none;
    padding: 10px 0px;
    color: white;
    width:66%;
    // margin-top:340px;
    margin-left:0px;

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

  .img-resetPasswordLeft {
    position: absolute;
width: 347.59px;
height: 499.96px;
left: 0px;
top: 42px;
  }

  
  


`

export default ResetPassword
