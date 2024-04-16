import React from 'react';
import ProjectCard from '../components/ProjectCard';
import AboutImg from "../images/about.png"
import styled from 'styled-components';
import {projects} from "../data"
 

const Projects = () => {
  return ( 
    <Wrapper className='page'> 
    {
      projects.map((item)=>{
        return <ProjectCard {...item} key={item.id}/>
      })
    }
    </Wrapper>
  )
}

export default Projects;

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(3,minmax(200px,300px));
justify-content: center;
gap: 30px;
margin: 50px 0px;
@media screen and (max-width:767px) {
  grid-template-columns: repeat(1,minmax(200px,250px));
}
@media screen and (min-width:767px) and (max-width:990px) {
  grid-template-columns: repeat(2,minmax(200px,250px));
  margin: 30px;
}
`