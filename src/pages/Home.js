import React from 'react'
import styled from "styled-components"; 
import Landingpage from '../components/Landingpage';
import FeaturedProducts from '../components/FeaturedProducts';
import SkillsandEpx from '../components/SkillsandEpx';
const Home = () => {
  return ( 
    <Wrapper> 
        <Landingpage/>
        <SkillsandEpx/>
        {/* <FeaturedProducts/> */}
    </Wrapper>
  )
}

const Wrapper = styled.div` 
 
`

export default Home