import React from 'react'

const Description = ({ title, description }) => {
  console.log(description)
  return (
    <div className="description">
      <h1 className="title">{title}</h1>
      <div dangerouslySetInnerHTML={{__html: description}} />
    </div>
  )
}

export default Description
