import React from 'react'
import { styled } from 'styled-components'
import  Camera  from "../images/camera.jpg";

const Cards = ({name,img,des,link}) => {
  return ( 
    <Wrapper> 
      <div className="card"   >
  <img className="card-img-top" src={img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{des}</p>
  </div> 
  <div class="card-body">
    <a href={link} class="card-link">See</a> 
  </div>
</div>
    </Wrapper>
  )
}

export default Cards
const Wrapper = styled.div`
 
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 .card{
  /* border:1px solid var(--texthover); */
  max-width: 600px;
  color: white;
 }
 .card-img-top{
  width: 100%;
  height: 300px;
  border : 1px solid white ;
 }
 .card-title{
  font-size: 20px; 
  font-weight: 400;
 }
 .card-text{
  font-weight: 200;
 }
 .card-link{
   color: var(--texthover);
   text-decoration: none;
 }
`;