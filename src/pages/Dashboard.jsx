import React from "react";
import styled from "styled-components";
import Hero_blue from "../assets/Hero_blue.svg";
import { useNavigate } from "react-router-dom";
import { CSVLink} from "react-csv";
import { useState, useEffect } from "react";
import axios from 'axios';

const Dashboard = () => {
  let [apiData, setApiData] = useState([]);
  let [searchInput, setSearchInput] = useState("");

  const [isShowAudio,setIsShowAudio] = useState(false);
  const [isShowFaceware,setIsShowFaceWare] = useState(false);
  const [isShowDsst,setIsShowDsst] = useState(false);
  const divStyle = {
    backgroundColor: "#22669c",
    color: 'white'
  }
  // var A = apiData.filter(e => e.type === "A")
  // var B = apiData.filter(e => e.type === "B")
  // var C = apiData.filter(e => e.type === "C")
  
  
  const showAudio= async()=>{
      const url = ("https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/get-audioware")
      const body = { "Url":"/get-audioware" }
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };
    const responce = await axios.post(url, body);
    console.log(responce);
    setApiData([...responce.data.Audioawarelist]);
    setIsShowFaceWare(false);
    setIsShowDsst(false);
    setIsShowAudio(true);
  }
    

  const showFaceware= async()=> {
    const url = "https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/get-faceaware";
    const body = { "Url": "/get-faceaware" };
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
  };
  const responce = await axios.post(url, body);
  console.log(responce);
  setApiData([...responce.data.Faceawarelist]);
  var div = document.getElementById('FaceAwareDetails');
  setIsShowFaceWare(true);
  setIsShowDsst(false);
  setIsShowAudio(false);
}

  const showDsst= async()=> {
    const url = "https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/get-dsst";
    const body ={"Url":"/get-dsst"};
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
  };
  const responce = await axios.post(url, body);
  console.log(responce);
  setApiData([...responce.data.DsstmasterResponselist]);
  setIsShowFaceWare(false);
  setIsShowDsst(true);
  setIsShowAudio(false);
  }

  useEffect(() => {

  }, [])

  
  return (
    <Wrapper>
      <section className="home-section" id="home">
        <div className="home-page-text">
          <div className="container-fluid p-0">

            <div className="col">
              <p className="home-heading">
                <button type="button1" onClick={()=>showAudio()} class="btn mx-2" style={divStyle}>AudioWare Aware</button>
                <button type="button2" onClick={()=>showFaceware()} class="btn btn-primary mx-2" style={divStyle}>FaceWare Aware</button>
                <button type="button3" onClick={()=>showDsst()} class="btn btn-primary mx-2" style={divStyle}>DSST</button>
                <p></p>

                <h3>Search Details
                </h3>
                <input
                  type="text"
                  className="form-control"
                  onChange={event => setSearchInput(event.target.value)}
                  id="exampleFormControlInput1"
                  placeholder="Search Here"
                  value={searchInput}
                />
              </p>
              <p className="home-text"></p>
              
              <div id="FaceAwareDetails" style={isShowFaceware?{ display : 'block'}:{ display : 'none'}} >
                <h2>FaceAware Details</h2>
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#a9bddb" }}>
                    <tr>
                      <th>User id </th>
                      <th>True Name</th>
                      <th>Selected Names</th>
                      <th>Tru Profession</th>
                      <th>Selected Profession</th>
                      <th>SessionId</th>
                      <th>Is Loss of Memory</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData.filter(
                      urldata => {
                        if (searchInput === '') {
                          return urldata;
                        } else if (urldata.SelectedNames.toLowerCase().includes(searchInput)) {
                          return urldata;
                        }
                      }).map((urldata) => (
                        <tr>
                          <td>{urldata.Userid} </td>
                          <td> {urldata.TrunNames}</td>
                          <td>{urldata.SelectedNames}</td>
                          <td> {urldata.TruProfession}</td>
                          <td> {urldata.SelectedProfession}</td>
                          <td> {urldata.SessionId}</td>
                          {/* <td> {urldata.IsLossofMemory.toString()}</td> */}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div id="AudioawareDetails" style={isShowAudio?{ display : 'block'}:{ display : 'none'}}>
                <h2>Audioaware Details</h2>
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#a9bddb" }}>
                    <tr>
                      <th>Userid </th>
                      <th>Created_Date</th>
                      <th>SelectedWords</th>
                      <th>PlayedWords</th>
                      <th>SessionId</th>
                      <th>Is there Loss of Memory</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData.filter(
                      urldata => {
                        if (searchInput === '') {
                          return urldata;
                        } else if (urldata.SelectedWords.includes(searchInput)) {
                          return urldata;
                        }
                      }).map((urldata) => (
                        <tr>
                          <td>{urldata.Userid} </td>
                          <td> {urldata.Created_Date}</td>
                          <td>{urldata.SelectedWords}</td>
                          <td> {urldata.PlayedWords}</td>
                          <td> {urldata.SessionId}</td>
                          {/* <td> {urldata.IsthereLossofMemory.toString()}</td> */}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div id="DSSTDetails" style={isShowDsst?{ display : 'block'}:{ display : 'none'}}>
                <h2>DSST Details</h2>
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#a9bddb" }}>
                    <tr>
                      <th>User id </th>
                      <th>Created Date</th>
                      <th>Session Id</th>
                      <th>Session StartTime</th>
                      <th>Session EndTime</th>
                      {/* <th>Is Stuffy Nose</th>
                      <th>Is there Loss of Memory</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {apiData.filter(
                      urldata => {
                        if (searchInput === '') {
                          return urldata;
                        } else if (urldata.SessionId.includes(searchInput)) {
                          return urldata;
                        }
                      }).map((urldata) => (
                        <tr>
                          <td>{urldata.Userid} </td>
                          <td> {urldata.Created_Date}</td>
                          <td>{urldata.SessionId}</td>
                          <td> {urldata.SessionStartTime}</td>
                          <td> {urldata.SessionEndTime}</td>
                          {/* <td> {urldata.IsStuffyNose.toString()}</td> */}
                          {/* <td> {urldata.IsthereLossofMemory.toString()}</td> */}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              

              <button type="button" class="btn btn-light mx-2">
                <CSVLink data={apiData}>Download in CSV</CSVLink></button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }

  .home-button {
    background-color: #22669c;
    box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3);
    border-radius: 8px;
    border: none;
    padding: 15px 20px;
    color: white;
  }
  .home-heading {
    font-size: var(--font-size-48px);
    font-weight: var(--font-weight-500);
    line-height: 56px;
    letter-spacing: 0em;
    color: var(--font-color-for-content);
    padding-top: 150px;
  }
  .home-text {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-300);
    line-height: 19px;
    letter-spacing: 0em;
    color: var(--font-color-for-header);
    padding-bottom: 15px;
  }
  .ripple1 {
    background-position: center;
    transition: background 0.8s;
  }
  .ripple1:hover {
    background: #4b68b8 radial-gradient(circle, transparent 1%, #4b68b8 1%)
      center/15000%;
  }
  .ripple1:active {
    background-color: #e8e8e8;
    background-size: 100%;
    transition: background 0s;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .home-page-text .container-fluid {
      width: 85%;
    }
    .home-heading {
      font-size: var(--font-size-24px);
      line-height: 28px;
      font-weight: var(--font-weight-500);
    }
    .home-text {
      font-size: var(--font-size-14px);
      line-height: 16px;
      font-weight: var(--font-weight-300);
    }
  }
`;

export default Dashboard;