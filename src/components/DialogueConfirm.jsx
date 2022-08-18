import React from 'react'
import styled from 'styled-components'
import Hero_blue from '../assets/Hero_blue.svg'
import Confirmation from './Login Pages/Confirmation'
import Navbar from './Navbar'


function DialogueConfirm() {
  return (
    <Wrapper>
        <Navbar />
        
    <div class="background-img">
        <div class="containercheck">
        <Confirmation />
        </div>
        </div>
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
   overflow: hidden;
}

.container-fluid {
    width: 66%;
    overflow: hidden;
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
        overflow: hidden;


    }


`

export default DialogueConfirm