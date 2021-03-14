import React from 'react'
import { Card } from 'react-bootstrap'
import template from '../images/template.svg'
const ArtifactCard = ({characterName,title,description}) => {
  return (
    <Card style={{ minWidth: '32rem', maxWidth: '32rem', marginBottom: "1rem", backgroundColor: 'rgba(0,0,0,.5)' }}>
  <Card.Body>
        <Card.Title>{characterName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>

    <Card.Text>
      {description}
    </Card.Text>
  </Card.Body>
</Card>
  )
}

export default ArtifactCard
