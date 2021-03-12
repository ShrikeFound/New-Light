import React from 'react'

const Description = ({ title, description }) => {
  return (
    <div className="legend">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default Description
