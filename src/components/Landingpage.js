import React from 'react'
import { styled } from 'styled-components'
import  img from "../images/backdrop.svg" 
import shape1 from "../images/shape-1.svg" 
import shape3 from "../images/shape-3.svg"  
import portfolio from "../images/portfolio.svg";
import {AiFillFacebook,AiFillGithub} from "react-icons/ai"
import {BsInstagram,BsLinkedin } from "react-icons/bs"

const Landingpage = () => {
  return ( 
    <Wrapper>

    <div className="landing-page page">
 <img src={img} alt="" className='backdrop'/> 
 <img src={shape1} alt="" className='shape-1' /> 
 <img src={shape3} alt="" className='shape-3'/>  

    <div className="content">
        <div className="left-content">
        <h4>Hello, I'am</h4>  

        <div className="intro-content">
            <li><span>Adnan Patanwala</span></li>
            <li><span>Web developer</span></li>
            <li><span>Java developer</span></li>
            <li><span>Engineer</span></li>
            <li><span>Freelancer</span></li>
        </div>
        <div className="desc">
        Freelance & Full time Front-end web developer
        </div>
        <button className='btn connect-btn'>Connect</button>
        </div> 


        <div className="right-content">
 
            <img src={portfolio} alt="" className='portfolio' />
            <div className='follow-container'>

            <div className="follow">
                {/* Follow me on  */}
                
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
        </div>
    </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 
 .landing-page{
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

}
.backdrop{
    position: absolute;
    left: 0;
    top:0;
    transform: scaleX(-1);
    height: 100vh;
}
.content{    
    display: grid; 
    width: 80%;  
    align-items: center;
    justify-items: center; 
    grid-template-columns: 1fr 1fr;
    color: var(--textcolor);  
    h4{
        font-size: 20px;
        font-weight: 300;
    }
    } 
    .intro-content{
        list-style: none;
        color: var(--secondcolor);
        line-height: 40px; 
        height: 40px;
        overflow: hidden;  
        margin: 10px 0px;
        position: relative;
        display: inline-block;  
    }
    .intro-content li span::after{
        content: "";
        position: absolute;
        top: 0px;
        left: 0%;
        background-color: var(--bodycolor);
        height: 100%;
        width: 100%;
        border-left: 3px solid var(--secondcolor);
        animation: typing 2s steps(10)  infinite;
     } 
    @keyframes typing{
        100%{ 
            left: 130%; 
        }
    }
    .intro-content li{
        line-height: 40px;
        font-size: 30px;
        
    }
    .intro-content li span { 
        height: 40px; 
        position: relative; 
        top:0px;
        animation: updown 10s steps(5) infinite;
         
        } 
    @keyframes updown {
            100%{  
                top: -200px;
            }
        }

        .portfolio{
            width:300px;
        }

        .connect-btn{
            font-size: 18px;
            border: 2px solid var(--texthover);
            color: var(--textcolor);
            border-radius: 20px;
            padding: 5px 10px;
            font-weight: 200;
            margin: 20px 0px;
        }
        .desc{
            font-weight: 300;
        }
        .right-content{
            display: flex;
            font-weight: 200; 
        } 
        
        .follow{
            writing-mode: vertical-lr;
        }
        .follow-container{ 
            margin: auto 30px;
        }

        .follow-icons li a{
            color: white;
        }
        .follow-icons li{
            margin :15px 0px;
            font-size: 20px;
            list-style: none; 
        }  

.shape-1,.shape-2,.shape-2-2,.shape-3,.shape-3-2,.line{
    position: absolute;
}
.shape-1{ 
    top: 50px;
    right: 0;
    width: 150px;
} 
.shape-3{
    top: 10px; 
    width: 150px;
    left: 20%;
    transform: rotate(90deg);
} 
.backdrop{
    height: 100%;
}
`

export default Landingpage