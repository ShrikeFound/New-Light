import React from 'react'
import { Container } from 'react-bootstrap'
import watcher from '../images/andree-wallin-1117-2.jpg'
const FourOhFour = () => {
  return (
    <Container style={{backgroundImage: `url(${watcher})`,width: "100vw",maxWidth: "100vw",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}className=" bg-watcher fullpage">
      <h1>You are Lost.</h1>
    </Container>
  )
}

export default FourOhFour
