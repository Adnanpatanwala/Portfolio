import React from 'react';
import ProjectCard from '../components/ProjectCard';
import AboutImg from "../images/about.png"
import styled from 'styled-components';

const data = [
  {
    title:"smart Watch",
    img:AboutImg,
    para:"fkjah adjhflaudyfof akjdfl vkjhaldf fkjah adjhflaudyfof akjdfl vkjhaldf",
  }
]

const Projects = () => {
  return ( 
    <Wrapper className='page'>
        <ProjectCard {...data[0]}/>
        <ProjectCard {...data[0]}/>
        <ProjectCard {...data[0]}/>
        <ProjectCard {...data[0]}/>
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
`