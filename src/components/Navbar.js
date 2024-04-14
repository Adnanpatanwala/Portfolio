import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {data} from "../data";
import {  NavLink } from 'react-router-dom';
import {BsFillSunFill} from "react-icons/bs";
import { UseGlobalContext } from './Context';
import { RiMenu4Fill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";



const Navbar = () => { 
    const [openSideBar,SetSideBar] = useState(false);
    const handleSidebar =()=>{
        if(openSideBar){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "unset";
        }
    }
    useEffect(()=>{
    handleSidebar();
    },[openSideBar])
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

            <div className="hamburger">
                <button onClick={()=>SetSideBar(!openSideBar)}>
                    {
                        openSideBar?<IoCloseCircleOutline />:<RiMenu4Fill />
                    }
                </button>
            </div>
            <div className={openSideBar?"sidebar-container active-sidebar":"sidebar-container"}>
                <div className="sidebar">

            {data.map((items)=>{
                const {txt,id,Url} = items;
                return  ( 
                    <NavLink className="nav-btn" key={id} to={Url} onClick={()=>SetSideBar(false)}> 
                        {txt}
                        </NavLink> 
                    )
                })}
                </div>
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
 position: relative;

.heading{
    h1{
        font-family: 'Lexend';
        font-weight: 300;
    }
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
.hamburger{
    display: none;
    z-index: 3;
}
.sidebar-container{
    position: absolute;
    top: 0;
    left: -100%; 
    width: 100%;
    height: 100vh;   
    box-sizing: border-box;
    background-color: var(--navbar);
    z-index: 2;
    display: none; 
    text-align: center; 
} 
.sidebar{  
    display: inline-block;
    text-align: center;
    margin-top: 50%; 
}
.active-sidebar{
    left: 0%;
}

@media screen and (max-width:767px) {
    .nav-btn{
        margin: 30px 0px;
        display: block;
        font-size: 25px;

    }
    .heading h1{
        font-size: 20px;
    }   
    .nav-items{
        display: none;
    }
    .hamburger{
        display: block;
        button{
            font-size: 25px;
            display: flex;
            background: none;
            border: none;
            outline: none;
            color: white;
        }
    }
    .container-fluid{
        padding: 6px 0px;
    }
    .sidebar-container{
        display: block;
    }
}

`

export default Navbar