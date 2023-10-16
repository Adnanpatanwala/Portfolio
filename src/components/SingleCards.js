import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'

const SingleCards = ({items}) => {
  return ( 
    <Wrapper className='parallel-effect another-effect'>
       
        <Cards {...items} className="card-1"/>
    </Wrapper>
  )
}

export default SingleCards

const Wrapper = styled.div`
 
 
`