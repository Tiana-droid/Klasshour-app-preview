import React from 'react'
import { Container, Wrapper } from './Styles'

const index = (props:any) => {
  return (
      <Container>
          <Wrapper>
              No {props.data} available
          </Wrapper>
    </Container>
  )
}

export default index