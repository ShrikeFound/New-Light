import React from 'react'
import { Container,Card,Button } from 'react-bootstrap'
import BootstrapCard from './BootstrapCard'

const Npcs = () => {

  const characters = [
    { characterName: "Dottice the Apostle", title: "Wife of Ezra", description: "Last seen in Sochitlan after Ezra gave her his teleporting device." },
    { characterName: "Rask the Shorn One", title: "Protector of Elyss", description: "Protector of the Land of Burning Water and father to Corvus. Assigned Elyssa to C team. Last seen in Sochitlan during the attack." },
    { characterName: "Jaqub Jade Skin", title: "Chief of House Haolus", description: "Leader of House Haolus and Father of Baolo. Last seen in Sochitlan during the Attack." },
    { characterName: "Atle Bleeding God", title: "God Ruler of Athon", description: "Ezra's God. Last seen in Sochitlan. probably still alive." },
    { characterName: "Gabrigan", title: "Atle's Apostle", description: "Atle's second in command. Governs over the city of Rust and meets with Atle's worshippers." },
    { characterName: "Ibril Blooming Feather", title: "Ruler of Sochitlan and empress of the Sea Ringed World.", description: "Last seen in Sochitlan during the attack." },
    { characterName: "Niva", title: "Light Eater", description: "Ruler of Tyr and head of the Order of Light." },
    { characterName: "Rama", title: "", description: "A spy and member of Sochitlan's royal guard. Asked the group to assists in stopping a plot to assassinate the world's leaders. One of the few guards not under Nahim's contorl." },
    { characterName: "Tezico", title: "", description: "A talented numenerist with a pet glass monkey. Loaned the group his multi-material container in exchange for the right to tell the world about anything they discover in the valley of the last gasp." },
    { characterName: "Tavrolosh", title: "", description: "this is the description" },
    { characterName: "Talitha", title: "", description: "Ruler of the village of Emul. The group rescued her from slave merchants and rescued her harvest of bread-spider eggs." },
    { characterName: "Nael & Dael", title: "Not Brothers", description: "Guards for Emul who sound but don't look alike." },
    { characterName: "Ryll", title: "Haolus Fighter", description: "A warrior from House Haolus with a beef against Ezra. Tried to fight the slave buyers by himself." },
    { characterName: "Ilham", title: "Mute Priest", description: "A mute priest who was sold into slavery." },
    { characterName: "Hara", title: "The Reflection", description: "Leader of the Weeping Tower and House Deseia. Tasked the group with finding out why their Caffa herds were irritated." },
    
  ]



  return (
    <Container className="fullpage-filled flex-wrap npcs">
      <h1 className="title">NPCs</h1>
      <Container className="card-deck justify-content-center">
      {characters.map(c => {
        return (<BootstrapCard characterName={c.characterName} title={c.title} description={c.description}/>)
      })}
      </Container>
    </Container>
  )
}

export default Npcs
