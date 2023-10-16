import React from 'react'
import { styled } from 'styled-components'
import {data} from "../data";
import { NavLink } from 'react-router-dom';
import {AiFillFacebook,AiFillGithub} from "react-icons/ai"
import {BsInstagram,BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return ( 
    <Wrapper> 
<div className='footer'>
    <div className="container-fluid">
        <div className="footer-container">

                <div className="left-sidefooter">
                    <h3 className="footer-heading">
                         AdnanPatanwala
                    </h3>
                    <div className="navigation-container">
                        {
                            data.map((items)=>{
                                const {Url,txt,id} = items;
                                return (
                                    <NavLink key={id} to={Url} className='footer-links'>
                                        {txt}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="follow-icons">
                   <li>
                    <a href="https://instagram.com/adnanpatanwalaa?utm_source=qr&igshid=MThlNWY1MzQwNA=="><BsInstagram/></a>
                    </li> 
                   <li>
                    <a href="https://www.facebook.com/adnan.patanwala.9/" target='_blank'><AiFillFacebook/></a>
                    </li> 
                   <li>
                    <a href="https://github.com/Adnanpatanwala" target='_blank'><AiFillGithub/></a>
                    </li> 
                   <li>
                    <a href="https://www.linkedin.com/in/adnanpatanwala/" target='_blank'><BsLinkedin/></a>
                    </li> 
                </div>
                </div>
                <div className="right-sidefooter">
                    <h2>Join Our Newsletter</h2>
                    <h4 >Be the first to know about our latest updates, exclusive offers, and more.</h4>
                    <form className="input-newsletter" >
                    <input type="email" placeholder='xyz@mail.com'/>
                    <button onSubmit={(event)=>event.preventDefault()}>Subscribe</button>
                    </form>
                </div>
            </div>
            <hr/>
            <h5 className='copyright'>© Adnanpatanwala. All Rights Reserved.</h5>
            </div>
        </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
.footer{
    color: var(--textcolor);
    padding: 10px 0px;
    background-color: var(--navbar);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}
.footer-heading{
font-weight: 300;
font-size: 30px; 
} 
.footer-links{
    border: 1px solid  var(--texthover);
    padding: 5px 10px;
    color: var(--textcolor);
    font-weight: 200;
    border-radius: 10px;
    text-decoration: none; 
}
.navigation-container{
    display: flex;
    gap: 20px;
    margin: 15px 0px;
}
.footer-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 15px 0px;
    margin-bottom: 30px;
}
.right-sidefooter h4{
    font-size: 15px;
    font-weight: 300;
    margin: 10px 0px;
}
.right-sidefooter h2{
font-size: 20px;
font-weight: 600;
}
.input-newsletter input{
    font-size: 15px;
    padding: 8px 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;  
    
}
.input-newsletter button{
    font-size: 15px;
    padding: 8px 10px ;   
    background-color: var(--texthover);
    border: none;
    color: var(--textcolor);  
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    
}
.follow-icons {
    display: flex;
    gap: 20px;
}
.follow-icons li a{ 
    color: var(--textcolor);
}
.follow-icons li{ 
    list-style: none;
    font-size: 20px;

}
.copyright{
    margin-top: 20px;
    font-weight: 200;
    text-align: center;
}  
`;