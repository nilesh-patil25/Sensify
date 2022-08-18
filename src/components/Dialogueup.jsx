import React from 'react'
import styled from 'styled-components'
import Hero_blue from '../assets/Hero_blue.svg'
import Signup from './Login Pages/Signup'
import Signin from './Login Pages/Signin'
import Navbar from './Navbar'
import {CSSTransition} from 'react-transition-group';
import { useState } from 'react'
function Dialogue() {

    const [show,setshow]=useState(false);

  return (
    <Wrapper>
        
        <CSSTransition
    in={setshow}
    timeout={350}
    classNames="display"
    unmountOnExit
    >


    {/* <div class="background-img">
        <div class="containercheck"> */}
        <Signup />
        {/* </div>
        </div> */}
        </CSSTransition>
    </Wrapper>
    )
}

const Wrapper = styled.div`

.new{
   padding-top:0px;
   margin-top:120px;
   margin-bottom:100px;
   align-items:center;
   margin_left:100px;
}

.container-fluid {
    width: 66%;
  }
  .background-img {
    background-image: url(${Hero_blue});
    background-size: cover;
    background-position: top;
    height: 100vh;
  }
    .containercheck {
        
        margin-left: 180px;
        margin-right: 350px;
        width: 1200px;
        height: auto;
        //display: flex;
        //flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;


    }


`

export default Dialogue