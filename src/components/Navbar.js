import React from 'react'
import styled from "styled-components";
import {data} from "../data";
import {  NavLink } from 'react-router-dom';
import {BsFillSunFill} from "react-icons/bs";
import { UseGlobalContext } from './Context';
const Navbar = () => { 
  return (
    <Wrapper>
        <div className="container-fluid">
            <div className="heading">
                 <h1>AdnanPatanwala</h1>
            </div>

            <div className="right-side">

            <div className="nav-items">
                {data.map((items)=>{
                    const {txt,id,Url} = items;
                    return  ( 
                        <NavLink className="nav-btn" key={id} to={Url}> 
                        {txt}
                        </NavLink> 
                    )
                })}
            </div>

            <div className="theme">
                <button className='theme-btn'><BsFillSunFill/></button>
            </div>
 
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
background-color: var(--navbar);
opacity: 1;
color: var(--textcolor);  

h1{
    font-family: 'Lexend';
    font-weight: 300;
}
.heading{
    padding: 5px 0px;
    margin: 5px 0px;
}
.container-fluid{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-btn{
    color: var(--textcolor);
    text-decoration: none;
    margin: 0 10px;
    padding: 5px 10px; 
    font-weight: 200;
    font-size: 18px; 

} 
.nav-btn:hover{
    color: var(--texthover);
}
.active{
    border-bottom: 2px solid var(--texthover);
    color: var(--texthover); 
    transition-delay: 0.1s;
}
.right-side{
    display: flex;
    align-items: center;
}
.theme-btn{
    background-color: var(--texthover);
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 20px;
    color: var(--textcolor);
    margin-left: 20px; 
    display: flex;
    align-items: center;

}
`

export default Navbar