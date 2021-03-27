import React from 'react'
import { Container} from 'react-bootstrap'
import ArtifactCard from './ArtifactCard'

const Artifacts = () => {

  const artifacts = [
    { Name: "Tezico's Multi-Material Container - Level 4", title: "A small orb made of stone covered in numerous bulbous sacks that pulse like a toad's throat. Several of the sacks have either burst or solidified. Four of them remain intact.", description: "With a command word, a sack can be opened and contain up to 6 cubic meters of a liquid or gaseous material. No other sack can contain the same material (or else). Each use has 1d20 chance of permanent failure. A sack can contain 6 hours of air." },
    { Name: "Statis Sphere - Level 6", title: "a combination of hexagonal frames that lock in place when exposed to a current.", description:"Once locked, the heaxgons have to be carefully dismantled. The contents inside are in a temporal statis and cannot be affected by the outside world. The sphere itself is locked spatially relative to the largest mass. Each time the sphere is activated it has a 1d6 change of degradation." },
   
  ]



  return (
    <Container className="fullpage flex-wrap npcs">
      <h1 className="title">Artifacts</h1>
      <Container className="card-deck justify-content-center">
      {artifacts.map(c => {
        return (<ArtifactCard characterName={c.Name} title={c.title} description={c.description}/>)
      })}
      </Container>
    </Container>
  )
}

export default Artifacts
