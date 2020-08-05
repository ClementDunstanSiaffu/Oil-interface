
import React from 'react';
import {Row,Col} from 'reactstrap';
import fetch from 'isomorphic-unfetch';
//import Level from '../components/level'

function Home({data}){

  return(
   <div className = "outer-container">
     <div className = "inner-container">
     <Row >
     {data.map((one)=>
     <Col xs = "auto">
       {one.level === "1" ? (
       <div className = "cols-items">
         <span className = "state-okay">State : Okay <div className = "green-ball"></div></span>
        <div className = "time-okay">Time : {one.time}</div>
        <div className = "date-okay">Date : {one.date}</div>
       </div>):(
       
       <div className = "cols-items">
       <span className = "state-okay">State : Danger <div className = "red-ball"></div></span>
      <div className = "time-okay">Time : {one.time}</div>
      <div className = "date-okay">Date : {one.date}</div>
     </div>)}
     
     </Col>)}
     </Row>
     </div>
   </div>
  )
}

Home.getInitialProps = async () =>{
  const response = await fetch("https://stormy-badlands-32246.herokuapp.com/oil")
  const data = await response.json()
  return {data}

}


export default Home;

