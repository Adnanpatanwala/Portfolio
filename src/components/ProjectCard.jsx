import React from 'react'
import styled from 'styled-components'
 

const ProjectCard = ({title,img,para}) => {
  return (
    <Wrapper>
        <div className='cardproduct'>

        <div className="header-img">
            <img src={img} alt="" />
        </div>
        <div className="bottom-info">
            <h3>{title}</h3>
            <p>{para}</p>
            <button className='view-btn'>view</button>
        </div> 
        </div>
    </Wrapper>
  )
}

export default ProjectCard
const Wrapper = styled.div`
.cardproduct{
    width: 100%;
    height: 400px;
    border: 1px solid white;
    background-image: linear-gradient(to right,white 50%,var(--texthover)50%);
    border-radius: 30px;
    box-shadow: 5px 5px 0px 0px pink;
    border: 3px solid pink;
    overflow: hidden;
}
.cardproduct:has(> .bottom-info button:hover){ 
    box-shadow: 10px 10px 0px 0px pink;
}
    .header-img{
        width: 100%;
        height: 200px;
        background-color:  var(--texthover);
        border-bottom-left-radius: 50px;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .bottom-info{
        background-color: white;
        width: 100%;  
        border-top-right-radius: 50px;
        padding: 10px;
        box-sizing: border-box;
        h3{
            text-align: center;
            font-size: 30px;
            font-weight: 300; 
        }
        p{
            font-size: 14px;
            font-weight: 300;
            text-align: center;
            margin-top: 15px;
            height: 70px;
        }
        button{
            padding: 3px 15px;
            border: none;
            display: block;
            margin: auto;
            border-radius: 10px;
            margin-top: 15px;
            margin-bottom: 15px;
            font-size: 18px;
            color: white;
            background-color: var(--texthover);
            cursor: pointer;
        }
    }

    

`
