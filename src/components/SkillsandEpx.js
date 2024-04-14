import React from 'react'
import { styled } from 'styled-components';
import {experience}  from '../data'
import {BsFiletypeCss} from "react-icons/bs"
import {BiLogoJavascript,BiLogoJava,BiLogoReact} from "react-icons/bi"
import {AiFillHtml5} from "react-icons/ai"
import shapeskill from "../images/shape-skill.svg"
import { SiExpress } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";


const SkillsandEpx = () => {
  return (
    <Wrapper>
        <div className="container-fluid parallel-effect bottom-cus">
        <div className="skills-container">
            <img src={shapeskill} alt="" className='line' />
            <div className="skillsleftside">
                <div className="heading-skills">
                    <h1>Skills & </h1>
                    <h1>Experience</h1>
                    <p>--- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus unde quasi, at quaerat consequatur reprehenderit!</p>
                </div>
                <div className="skills">
                <h3 className='subtitle-skills'>Skills</h3>
                    <div className="first-line-skils">
                        <div className="inner-content-skills">
                        <AiFillHtml5/>
                        <h4>HTML</h4>
                        </div>
                        <div className="inner-content-skills">
                            <BsFiletypeCss/>
                        <h4>CSS</h4>
                        </div>
                        <div className="inner-content-skills">
                            <BiLogoJavascript/>
                        <h4>Js</h4>
                        </div>
                        <div className="inner-content-skills">
                            <BiLogoReact/>
                        <h4>React</h4>
                        </div>
                    </div>
                    <div className="first-line-skils">
                        <div className="inner-content-skills">
                            <FaNodeJs/>
                        <h4>Node js</h4>
                        </div>
                        <div className="inner-content-skills">
                            <SiExpress />
                        <h4>Express</h4>
                        </div>
                        <div className="inner-content-skills">
                            <BiLogoJava/>
                        <h4>JAVA</h4>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="skills-rightside">
                <div className="exp-heading">
                    <h3 className='subtitle-skills'>Experience</h3>
                    <div className="exp-container">
                        {
                            experience.map((items)=>{
                                const {id,name,date,designation} = items;
                                return (
                                    <li key={id} className='exp-li'>
                                        <div className="date">
                                            {date}
                                        </div>
                                        <div className="worked">
                                            <h3>{designation}</h3>
                                            <p>{name}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    </Wrapper>
  )
}

export default SkillsandEpx;
const Wrapper = styled.div`
 
.skills-container{ 
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 30px 0px; 
    position: relative;
}
.skills-container .line{
    position: absolute;
    bottom: 10px;
    right: 0px;
    width: 200px; 

}
.heading-skills{
    margin-bottom: 50px;
}
.heading-skills h1{
    font-weight: 400;
}
.heading-skills p{
    font-weight: 200;
    font-size: 14px;
    margin: 15px 0px;
} 
.first-line-skils{
    display: flex;
    gap: 100px;
    margin: 10px 0px;
}
.exp-li{
    list-style: none;
    text-decoration: none;
    display: grid;
    grid-template-columns: 35% 65%;
    border-top: 1px solid white;
    padding: 10px 0px;
}
.date{
    font-weight: 200;
    font-size: 15px;
}
.skills-rightside,.skillsleftside{
    padding: 10px;
} 
.inner-content-skills{
    font-size: 40px;
    text-align: center;
}
.inner-content-skills>*:nth-child(1){
    font-size: 30px;
}
.inner-content-skills h4{
    font-size: 15px;
    font-weight: 200;
}
.subtitle-skills{
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 20px;
}
.worked h3{
    font-weight: 400;
}
.worked p{
    font-weight: 200;
    font-size: 15px;
}


@media screen and (max-width:767px) {
    .skills-container{
        display: block;
        padding: 10px 0px;
    }
    .first-line-skils{
        gap:25px; 
    }
    .skills-rightside{
        margin-top: 40px;
    }
    .date{
        font-size: 12px;
    }
    .worked{
        font-size: 14px;
    }
    .bottom-cus{
        margin-bottom: 200px;
    }
    .skills-container .line{
        bottom: -180px;
        width: 100px;
    }
}
`