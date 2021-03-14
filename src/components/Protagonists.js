import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import baoloImage from '../images/baolo_the_boombox.png'
import corvusImage from '../images/corvus-2.jpg'
import daliahImage from '../images/daliah.png'
import elsysaImage from '../images/elyssa.jpg'
import ezraImage from '../images/ezra_the_apostle.jpg'


const Protagonists = () => {
  return (
    <Container className="fullpage-filled">
      <div className="character-gallery">
        <ul className="characters">
          <Link className="portrait baolo-portrait" to="/protagonists/baolo"><img alt="portrait of a small, arrogant man" src={baoloImage} /></Link>
          <Link className="portrait corvus-portrait" to="/protagonists/corvus"><img alt="portrait of a pale, somber man" id="corvus-portrait" src={corvusImage} /></Link>
          <Link className="portrait daliah-portrait" to="/protagonists/daliah"><img alt="portrait of a hardened desert woman in protective cloth wrappings" id="daliah-portrait" src={daliahImage} /></Link>
          <Link className="portrait elyssa-portrait" to="/protagonists/elyssa"><img alt="portrait of a proud woman wielding lightning" id="elyssa-portrait" src={elsysaImage}/><p>Baolo the Boombox</p></Link>
          <Link className="portrait ezra-portrait" to="/protagonists/ezra"><img alt="portrait of a man with various mechanical alterations" src={ezraImage} /></Link>
        </ul>
      </div>
      <Container className="section">
      <h1 className="title text-center">The Protagonists</h1>
      <p>
        At the Council of the Obsidian Table, 3 parties were formed, each symbolizing a strategy formed by various factions of the empire.
      </p>   
      <p>
        Tyr and the factions most loyal to them, Iwitlan and House Kratyss, set off in search of any Mute priests who might still be travelling the empire and bring them back to the temple of light.
        Their hope is that the priests found might be able to restore the ritual of light to its original potency and stave off the faltering of the stars.
      </p>
      <p>
        Sochitlan and her closest rival, House Deseia, sent their scions in search of more tributes. They argues that if the potency of the Ritual of Light was failing, then the answer was simply to bring more tributes. 
      </p>

      <p>
          Finally a last group sent off in search of an alternative. Athon, House Haolus, and two of the outlying nations, Elyss and Shabara, formed a group tasked with finding a refuge for the people of the empire.
          Once the first and second parties failed, they argued, the people of the empire would need another way to survive the fallout of the flickering stars. Not knowing the form this apocalypse would take, This newly formed group set out in search of answers.
           
          House Haolus sent the chief's son, Baolo the Boombox. Elyss sent their own noble, Corvus, and an experience adventurer tasked with aiding him: Elyssa. Athon and Shabara both sent skilled and willing volunteers, Ezra the Apostle would represent Athon; Daliah Cloudfood would represent Shabara.

      </p>
        
        <p>
        Finally a last group sent off in search of an alternative. Athon, House Haolus, and two of the outlying nations, Elyss and Shabara, formed a group tasked with finding a refuge for the people of the empire.
        Once the first and second parties failed, they argued, the people of the empire would need another way to survive the fallout of the flickering stars. Not knowing the form this apocalypse would take, This newly formed group set out in search of answers.
        
        House Haolus sent the chief's son, Baolo the Boombox. Elyss sent their own noble, Corvus, and an experience adventurer tasked with aiding him: Elyssa. Athon and Shabara both sent skilled and willing volunteers, Ezra the Apostle would represent Athon; Daliah Cloudfood would represent Shabara.

      </p>
      </Container>
    </Container>
  )
}

export default Protagonists
