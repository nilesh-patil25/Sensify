import React,{useState} from "react";
import styled from "styled-components";
import resetPasswordLink from '../../assets/resetPasswordLink.svg';
import pattern1 from '../../assets/Pattern1.svg';
import pattern2 from '../../assets/pattern2.svg';
import { useNavigate ,useLocation} from 'react-router-dom'



const PasswordResetLink = () => {
    const navigate = useNavigate();
    const location = useLocation()

    console.log("email is",location.state.email);
    const email = location.state.email
   
    const [code,setCode] = useState('')



    return (
        <Wrapper>

            <div className="card">
                <div className="row">
                    <div className="col">
                        <section className='col-md-6 new'>
                            <img src={resetPasswordLink} alt="Cart_icon" className='img-here' />
                        </section>

                        <section className='col-md-6 new'>
                            <img src={pattern2} alt="Cart_icon" className='img-Pattern2' />
                        </section>
                    </div>
                    <div className="col">
                        <div className="title">
                            <h4>Password reset code sent!</h4>
                            
                        </div>

                        <div className="discription">
                            We’ve sent you a code to reset your password on your email.
                            Enter the code below to reset your password and begin your Sensify experience today!
                        </div>

                        <div class="row">

                            <div class="col-lg-4 col-sm-12">
                                <label for="Code" class="label-align word">
                                    Code :
                                </label>
                            </div>
                            <div class="row1">
                                <input
                                    type="number"
                                    name="Code"
                                    placeholder=""
                                    value={code}
                                    onChange={(e)=>{setCode(e.target.value)}}
                                   
                                /></div>

                        </div>



                        <div class="alignment-order">
                            <div class="col continue">
                                <button onClick={(e)=>{navigate('/reset_Password',{state:{code:code,email:email}})}} type="submit" value="Submit">
                                    <a
                                        style={{ textDecoration: "none", color: "white", textAlign: "center" }}
                                    >
                                    Next
                                    </a>
                                </button>
                                {/* {load?<h1 className={load?'loading-spinner':'LoginBtn'} disabled={load} style={{color:'blue', margin:"10px 0 150px 120px"}}></h1>:''} */}

                            </div>
                        </div>

                        <section className='col-md-6 new'>
                            <img src={pattern1} alt="Cart_icon" className='img-Pattern1' />
                        </section>


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
width: 360px;
height: 300px;
left: 100px;
top: 200px;
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

  input[type="number"] {
    box-sizing: border-box;
//    position: absolute;
    width: 328px;
    height: 48px;
    left: 730px;
    top: 385px;
    background: #FFFFFF;
    border: 1px solid #26649D;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom:15px;
    padding-left:20px;
    margin-left:34px
  }

  .label-align {
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    margin-left: 34px;
    margin-top:230px
  }

`

export default PasswordResetLink