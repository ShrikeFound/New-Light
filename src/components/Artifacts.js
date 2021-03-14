import React from 'react'
import { Container,Card,Button } from 'react-bootstrap'
import ArtifactCard from './ArtifactCard'
import BootstrapCard from './BootstrapCard'

const Artifacts = () => {

  const characters = [
    { characterName: "Tezico's Multi-Material Container - Level 4", title: "A small orb made of stone covered in numerous bulbous sacks that pulse like a toad's throat. Several of the sacks have either burst or solidified. Four of them remain intact.", description: "With a command word, a sack can be opened and contain up to 6 cubic meters of a liquid or gaseous material. No other sack can contain the same material (or else). Each use has 1d20 chance of permanent failure. A sack can contain 6 hours of air." },
   
  ]



  return (
    <Container className="fullpage flex-wrap npcs">
      <h1 className="title">Artifacts</h1>
      <Container className="card-deck justify-content-center">
      {characters.map(c => {
        return (<ArtifactCard characterName={c.characterName} title={c.title} description={c.description}/>)
      })}
      </Container>
    </Container>
  )
}

export default Artifacts
