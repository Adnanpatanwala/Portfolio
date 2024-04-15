import React from 'react'
import styled from 'styled-components'
import AboutImg from '../images/about.png'
import { PiArrowElbowRightDownDuotone } from "react-icons/pi";

const aboutdata = [
  {
    title:"who am i",
    answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem neque esse maxime voluptatum magnam ipsa!"
  },
  {
    title:"who am i",
    answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem neque esse maxime voluptatum magnam ipsa!"
  },
  {
    title:"who am i",
    answer:"Lorem ipsum dolor sit, amet consectetur adLorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem neque esse maxime voluptatum magnam ipsa!ipisicing elit. Dolorem neque esse maxime voluptatum magnam ipsa!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem neque esse maxime voluptatum magnam ipsa!"
  },
  {
    title:"who am i",
    answer:"Lorem ipsum dolor sit, amet consectetur adLorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem neque esse maxime voluptatum magnam ipsa!ipisicing elit. Dolorem neque esse maxime voluptatum magnam ipsa!"
  },
]

const About = () => {
  return (
    <Wrapper className='page'>
      <div className='about-outer'>
    <div className='about-container'> 
    <div>
    <div className="title">
      <h2>ABOUT</h2>
    </div>
    <div className="about-content">
      <p className='about-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus, explicabo vitae sed exercitationem tempora?</p>
     <div className='cooking'>
      <h2 className='quote'>look what's cooking below</h2>
      <PiArrowElbowRightDownDuotone className='icon-quto' />
     </div>
     
    </div>
    </div>
    <div className='right-about'>
      <img src={AboutImg} alt="" /> 
    </div>
    </div>
    </div>
    <div className="second-container">
    <div className="second-about">
      {
        aboutdata.map((item,idx)=>{
          return(
          <div className='about-list-container'>
          <div className="about-list">
              <div className={idx%2==0?"left-about bg-color-about rounded-right":"left-about bg-2color-about"}>{item.title}</div>         
              <div className={idx%2!=0?"answer bg-color-about rounded-left":"answer bg-2color-about"}>{item.answer}</div>
          </div>
          </div>
          )
        })
      }
    </div>
  </div>
 
  <div className="third-container">
    Thats it bro!
  </div>
 
    </Wrapper>
  )
}

export default About;

const Wrapper  = styled.div`
 
color: white; 
@keyframes title {
   0%{ 
     margin-left: -10px;
    }
    100%{  
      margin-left: 100px;
 
  }
}
.title h2{
  font-size: 150px;
  color: white;
  margin-left:100px;
  margin-top: 50px;
  font-weight: 600;
  color: #474973;
  min-height: 188px;
  animation: title 0.5s linear;
}
.about-content{ 
  width: 700px;
  font-weight: 200;
  margin-left: 200px;
}
.right-about{
  position: relative;
}
.freepick-text{
  position: absolute;
  bottom: 45%;
  right: 0px;
  transform: rotate(90deg);
  font-size: 9px;
  a{
    color: white;
    font-weight: 100;
    
  }
}


.right-about img{
  margin-top: 60px;
  width: 100%; 
  object-fit: cover;
  transform: scaleX(-1);
  animation: imganimation 0.5s linear ;
}

@keyframes imganimation {
  0%{
    display: none; 
    width: 0px;
    margin-left: 100%; 
  } 
  100%{
    display: block; 
    width: 100%;
    margin-left: 0%; 
  }
}
.about-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  height: 623px;
  top: 60px;
  left: 0px;
  z-index: -1;
}
.about-outer{
  height: 500px;
  margin: 30px; 
}
.quote{ 
  font-weight: 200;
  text-transform: capitalize;
  margin-top: 10px;
}
 
.cooking{ 
  display: flex; 
  gap: 20px;
  margin-top: 120px;
  margin-left: 200px; 
}
.icon-quto{ 
  font-size: 100px;
  color: #fa8094;
  }
  .about-list{
    display: grid;
    grid-template-columns: 25% 75%;
    font-weight: 200;
    text-transform: capitalize;
  } 
  .answer{ 
    /* max-width: 90%; */
  }
  .about-para{
    color: #ffc0cb;
  }
  .second-container{
    z-index: 2;
    background-color: var(--bodycolor);
    border-top: 2px solid white;
    padding-top: 15px;
    position: relative;
    z-index: 2;
    margin-bottom: 30px;
  }
  .second-container::before{
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0px;
    top: -50px;
    background-color: var(--bodycolor);
    border-top-right-radius:50% ;
    border-top-left-radius: 50%; 
    border-top: 6px solid #474973;
  }
  .second-container::after{
     content: "";
     z-index: -1;
     position: absolute;
     width: 100%;
     height: 50px;
     left: 0px;
     bottom: -50px;
     background-color: var(--bodycolor);
     border-bottom-right-radius:50% ;
     border-bottom-left-radius: 50%; 
     border-bottom: 6px solid #474973;
   }
  .left-about,.answer{
    padding: 50px;
     
  }
  .bg-color-about{
    background-color: #474973;
    color: white;
    z-index: 2 !important;
     
  }
  .bg-2color-about{
    background-color: var(--bodycolor);
    color: white;
    z-index: 2 !important;
  }
  .rounded-right{
    border-top-right-radius: 250px;
    border-bottom-right-radius: 250px;
    position: relative;
  }
  .rounded-left{
    border-top-left-radius: 250px;
    border-bottom-left-radius: 250px;
    position: relative;
  }
   
  .third-main-container{
    height: 400px;
  }

  .third-container{
    background-color: var(--bodycolor);
    min-height: 100vh;
    padding-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-weight: 300;
    color: #fa8094;
  }

  
 


  @media screen and (max-width:767px) {
    .about-container{ 
      grid-template-columns: 1fr;
      margin: auto;
      margin: 15px;
    }
    .about-outer{
      height: 80vh;
    }
    .title h2{
      font-size: 60px;
      display: block;
      margin: auto;
      min-height: 100px;

    }
    .about-content,.cooking{
      margin: 0px;
    }
    .about-content{
      width: 100%;
    }
    .right-about{
      width: 100%;
    }
    .about-para{
      font-size: 14xpx;
    }
    .quote{
      font-size: 18px;
    }
    .cooking{
      gap: 5px;
      margin-top: 20px;
      justify-content: center;
      .icon-quto{
        font-size: 50px;
        margin-top: 10px;
      }
    }
    .right-about img{
      margin-top: 30px;
       
    }
    .about-list{
      display: block; 
    }
    .left-about,.answer{
      padding: 20px 15px;
      font-size: 14px;
      margin: 10px 0px;
    }
    .left-about{
      background-color: #474973 !important; 
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      display: inline-block;
      box-shadow: 0px 0px 5px #474973;
    }
    .answer{
      border-top-left-radius:50px;
      border-bottom-left-radius: 50px;
      background-color: var(--bodycolor) !important;
      border: 1px solid #fa8094;
      margin-left: 30px;
      padding-left: 30px;
      box-shadow: 0px 0px 5px #fa8094;
    }
    .third-container{ 
      text-align: center;
      font-size: 30px;
    }
    @keyframes title {
   0%{ 
     margin-left: -100px;
    }
    100%{  
      margin-left: 0px;
 
  }
}
  }
` 