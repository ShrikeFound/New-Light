import React from 'react'

const Description = ({ title, description }) => {
  console.log(description)
  return (
    <div className="description">
      <h1 className="title" dangerouslySetInnerHTML={{__html: title}}/>
      <div dangerouslySetInnerHTML={{__html: description}} />
    </div>
  )
}

export default Description
