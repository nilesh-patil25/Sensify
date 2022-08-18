import React,{useState,useEffect} from "react";
import styled from "styled-components";
import outline from ".././assets/outline.svg";
import visitStore from ".././assets/storeLink.png"
import OrderPic from ".././assets/yourOrderPic.jpg"
import axios from "axios";
import config from '.././config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import Footer from "../components/Footer.jsx";


const YourOrders = () => {
    const navigate = useNavigate();

    const [orderData,setOrderData] = useState([]);

    // const [load,setLoad]=useState(false);
    var obj={};
    useEffect(() => {
        getOrders();
    } , []);

    const getOrders =async (event) => {

             obj={
                "Url":"/get-last-order",
                "UserId":2  
                // "Url":"/get-user-profile",
                // "EmailAddress":"raokashif916@gmail.com"
            }

            const res = await axios.post("https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/get-last-order",obj)
               
            setOrderData(res.data.OrderDetail);
           
      }

      const Clickback=()=>{
        //closemodel(false);
        navigate('/userProfile');
    }

    const ClickBackHome=()=>{
        //closemodel(false);
        navigate('/');
    }
     



    return (
        <>
        <Wrapper>

            <div className="container big-container">



                <div className="row">
                    <div className="col col-sm-2.5"></div>

                    <div className="col col-sm-7">
                        <div className="row outer-row">
                            <div className="col col-sm-1">
                                <img
                                    src={outline}
                                    class="arrowHide"
                                    alt=""
                                    style={{ position: "relative", padding: "3px",cursor:'pointer' }}
                                    onClick={Clickback}

                                />
                            </div>
                            <div className="col col-sm-7">Your Orders</div>
                            <div className="col col-sm-4">
                                <img
                                    src={visitStore}
                                    class="arrowHide"
                                    alt=""
                                    style={{ position: "relative",cursor:'pointer',left:'240px' }}
                                    onClick={ClickBackHome}

                                />
                            </div>
                        </div>
                        <div className="container-box">
                            <div className="row">
                                <div className="col col-md-4">
                                
                          <img src={OrderPic} alt="Cart_icon" className='img-here' />
                        
                                </div>
                                <div className="col  col-md-8">
                                <div className="row" >
                                    <div className="col col-sm-6">
                                <h6 className="order-date">
                                {orderData.CreatedDate}
                                </h6>
                                <p className="therapy-kit">{orderData.ProductName&& orderData.ProductName.split(',').map((step)=> <p>{step}{",\n"}</p>)}</p>
                                <p className="order-number">Order number :</p>
                                <p className="deliver-to">Deliver to :</p>
                                <p className="estimate-delivery">Estimated delivery by {orderData.EstDeliveryBy}</p>
                                </div>


                                <div className="col col-sm-6">

                                <h6 className="total">
                                Total : ${orderData.GrandTotal} 
                                </h6>
                             
                                <p className="orderNumber-Api">{orderData.OrderNumber}</p>
                                <p className="deliver-to-name">{orderData.UserName}</p>
                                <p className="deliver-to-name-address">{orderData.AddressLine}, {orderData.State}, {orderData.ZipCode}</p>
                                <button onClick={(e)=>{navigate('/yet-Dispatch',{state:{status:orderData.Trackingnumber}})}} className="btn-TrackerOrder">Tracker Order</button>
                                </div>
                                </div>
                                
                                </div>

                                
                            </div>

                        </div>
                    </div>

                    <div className="col col-sm-2.5"></div>
                </div>

            </div>
            <br/><br/>
            <br/><br/>
            

        </Wrapper>
        <Footer />
        </>
    )
}

export default YourOrders

const Wrapper = styled.section`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.outer-row{
    padding-top:200px
}


body {
    height: 100vh;
    width: 100%;
}

.container-box {
    box-sizing: border-box;

position: relative;
width: 990px;
height: 330px;
top: 30px;

background: #FFFFFF;
border: 1px solid #4E4E4E;
border-radius: 16px;
}

.img-here{
position: absolute;
width: 155px;
height: 155px;
left: 40px;
top: 40px;
background-color:red
}

.order-date{
    position: absolute;
width: 306px;
height: 19px;

top: 46px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #4E4E4E;
}

.therapy-kit{
    position: absolute;
width: 470px;
height: 19px;
top: 82px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #4E4E4E;
}

.order-number{
    position: absolute;
width: 143px;
height: 19px;
top: 135px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #4E4E4E;
}

.deliver-to{
    position: absolute;
width: 143px;
height: 19px;
top: 162px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #4E4E4E;
}

.estimate-delivery{
    position: absolute;
width: 306px;
height: 19px;
top: 265px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #4E4E4E;
}

.total {
    position: absolute;
width: 224px;
height: 19px;
left: 610px;
top: 45px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-align: right;

color: #4E4E4E;
}

.orderNumber-Api{
    position: absolute;
width: 143px;
height: 19px;
left: 480px;
top: 136px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #4E4E4E;
}

.deliver-to-name {
    position: absolute;
width: 143px;
height: 19px;
left: 480px;
top: 164px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #4E4E4E;
}

.deliver-to-name-address{
    position: absolute;
width: 388px;
height: 19px;
left: 480px;
top: 186px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #4E4E4E;
}

.btn-TrackerOrder{
    width: 138px;
    position: absolute;
    top: 256px;
    left: 750px;
    height: 38px;
    background-color: #22669c;
    border: 1px solid #22669c;
    border-radius: 6px;
    color: #FFFFFF;
}

`