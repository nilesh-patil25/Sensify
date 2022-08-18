import React from "react";
import styled from "styled-components";
import outline from ".././assets/outline.svg";
import startIcon from ".././assets/statusStartIcon.png"
import endIcon from ".././assets/statusEndIcon.png"
import statusLine from ".././assets/statusLine.png"
import disableIcon from ".././assets/disableIcon.png"
import { useLocation,useNavigate } from 'react-router-dom'


const YetToDispatch = () => {

    const location = useLocation();
    const navigate = useNavigate();
    console.log("status", location.state.status);
    const status = location.state.status;

    const Clickback=()=>{
        //closemodel(false);
        navigate('/yourOrders');
    }

    return (
        <Wrapper>
            <div className="container">



                <div className="row">
                    <div className="col col-sm-1.5"></div>

                    <div className="col col-sm-9">

                        <div className="row outer-row">
                            <div className="container card-container">

                                <div className="row">
                                    <div className="col col-sm-2">
                                    <img
                                            src={outline}
                                            class="arrowHide"
                                            alt=""
                                            style={{ position: "absolute",top:'60px',left:'80px', padding: "3px", cursor: 'pointer' }}
                                        onClick={Clickback}

                                        />
                                    </div>
                                    <div className="col col-sm-8">

                                        <div className="row Heading-row">
                                            
                                            <div className="col col-sm-4 Order-tracking">Order tracking</div>
                                            {status === "" ? <div className="col col-sm-4 yet-dispatch">Yet to dispatch</div> :
                                                <div className="col col-sm-4 yet-dispatch">EXA7805HG</div>}

                                        </div>

                                        <div className="row Discription-row">
                                            <div className="col col-sm-4 Shipped-via">Shipped via</div>
                                            <div className="col col-sm-4 status">Status</div>
                                            <div className="col col-sm-4 deliverd-by">Est. delivery by</div>
                                        </div>

                                        <div className="row second-row">
                                            {status === "" ? <div className="col col-sm-4 usps-dash">-</div> :
                                                <div className="col col-sm-4 usps-dash">USPS</div>}

                                            {status === "" ? <div className="col col-sm-4 in-transit">Yet to dispatch</div> :
                                                <div className="col col-sm-4 in-transit">In transit</div>}


                                            {status === "" ? <div className="col col-sm-4 deliverdDate-dash">-</div> :
                                                <div className="col col-sm-4 deliverdDate-dash">15 June 2022</div>}

                                        </div>

                                        <div className="row icon-row">
                                            <div className="col col-sm-4 start-icon">
                                                <img src={startIcon} alt="Cart_icon" />
                                            </div>
                                            <div className="col col-sm-4 ">
                                                <img src={statusLine} alt="Cart_icon" className="status-line" />
                                            </div>
                                            {status === "" ? <div className="col col-sm-4 end-icon">
                                                <img src={disableIcon} alt="Cart_icon" />
                                            </div> :
                                                <div className="col col-sm-4 end-icon">
                                                    <img src={endIcon} alt="Cart_icon" />
                                                </div>}



                                        </div>
                                    </div>
                                    <div className="col col-sm-2"></div>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className="col col-sm-1.5"></div>
                </div>

            </div>


        </Wrapper>
    )
}


export default YetToDispatch

const Wrapper = styled.section`

.outer-row{
    top: 70px;
}
.card-container{
    position: relative;
width: 100%;
height: 451px;
top: 180px;
border-radius: 8px;
background: #FFFFFF;
box-shadow: 0px 4px 32px 16px rgba(30, 30, 30, 0.25);

}

.Heading-row{
    position: relative;
    top: 60px;
}
.Order-tracking{

font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;

color: #4E4E4E;
}
.yet-dispatch{
height: 28px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;

color: #4E4E4E;

}
.Discription-row{
    position: relative;
    top: 130px;
}
.Shipped-via{

height: 21px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #4E4E4E;

}
.status{    
height: 21px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #4E4E4E;
}

.deliverd-by{
height: 21px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #4E4E4E;

}
.second-row{
    position: relative;
    top: 145px; 
}
.usps-dash{ 
height: 21px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}
.in-transit{
height: 21px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;

color: #4E4E4E;
}
.deliverdDate-dash{
height: 21px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #4E4E4E;
}

.icon-row{
    position: relative;
    top: 200px;
    align-items: center;
    justify-content: center;
    
    
}
.start-icon{
    // width:auto
}
.status-line{
width: 100px;
height: 0px;
border: 8px solid #57BA54;
border-radius: 8px;
    
}
.end-icon{
    // widht:auto
}
.outer-circle{
    box-sizing: border-box;
width: 122px;
height: 122px;
border-radius: 50%;

background: #FFFFFF;
border: 4px solid #D9D9D9;
}
.inner-circle{
    box-sizing: border-box;

width: 122px;
height: 122px;
border-radius: 50%;
background: #D9D9D9;
}


`