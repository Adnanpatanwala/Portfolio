import React from 'react'
import styled from 'styled-components'
import { MdArrowForward } from "react-icons/md";

 

const ProjectCard = ({name,img,link,des}) => {
  return (
    <Wrapper>
    <div className="card-list">
     <a href={link} className="card-item" target='/'>
         <img src={img} alt="Card Image" className='brd-img'/>
         <span className="developer">{name}</span>
         <h3>{des.substring(0,50)}{des.length>50?"....":""}</h3>
         <div className="arrow"> 
         <MdArrowForward className='item-arrow' />
         </div>
     </a>
 </div>
 </Wrapper>
  )
}

export default ProjectCard
const Wrapper = styled.div`
  
.card-list {
    display: grid;  
    width: 100%;  
    height: 388px;
    gap: 20px;
}
.card-list .card-item {
    background: #fff;
    padding: 26px;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
    list-style: none;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid transparent;
    transition: border 0.5s ease;
}
 .card-item:hover {
    box-shadow: 0px 0px 15px var(--texthover);
         
}
.card-list .card-item img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    object-fit: cover;
}
.card-list span {
    display: inline-block;
    background: #F7DFF5;
    margin-top: 32px;
    padding: 8px 15px;
    font-size: 0.75rem;
    border-radius: 50px;
    font-weight: 600;
}
.card-list .developer {
    background-color: #d4eeff; 
    color: var(--texthover);
}   
 
.card-item h3 {
    color: #000;
    font-size: 16px;
    margin-top: 20px;
    font-weight: 600;
    text-transform: capitalize;
    min-height: 60px;
}
.card-item .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-35deg);
    height: 40px;
    width: 40px;
    color: #000;
    border: 2px solid #000;
    border-radius: 50%;
    margin-top: 20px;
    transition: 0.2s ease;
    font-size: 30px;
    font-weight: 900;
}
.card-list .card-item:hover .arrow  {
    background: #000;
    color: #fff; 
}

.card-item:hover :has(> .item-arrow){
    transform: rotate(0deg);
}
 
.brd-img{
    
    box-sizing: border-box;
}
`