import React from 'react'
import { styled } from 'styled-components';
import {projects} from '../data';
import Cards from './Cards';
import SingleCards from './SingleCards'
 

const FeaturedProducts = () => {
  return ( 
    <Wrapper>
        <div className="container-fluid">

            <h3 className="sub-heading">
                Featured Projects
            </h3> 
            <div className="featured-container">
            <div className="projects-container">
                {
                    projects.map((items)=>{ 
                        return (
                          <SingleCards key={items.id} items={items}>    
                          </SingleCards> 
                        )
                    })
                }
            </div>


            </div>
        </div>
    </Wrapper>
  )
}

export default FeaturedProducts;

const Wrapper = styled.div`
height: 100%;

.sub-heading{
    font-weight: 300;
    color: var(--textcolor);
    font-size: 25px;
    text-align: center;
  
}
.brd-bottom{ 
    display: inline-block;
    width: 100%;
    border-top: 2px solid pink;

} 
.featured-container{
    /* height: 100%; */
}
`