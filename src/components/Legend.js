import React from 'react'

const Legend = () => {
  return (
    <svg viewBox="0 0 250 330" id="legend" style={{backgroundColor: "rgba(255,255,255,.1)"}}>
    <text transform="translate(90,40)" fill="white" stroke="white">LEGEND</text>
      <g transform="translate(20,80)">
        <polygon transform="translate(-130,-100)" className="jungles-icon" points="140.39 78 155.39 78 162.89 90.99 155.39 103.98 140.39 103.98 132.89 90.99 140.39 78" />
        <text transform="translate(50,-5)" fill="white"  stroke="white">Jungles</text>
      </g>
    
      <g transform="translate(20,115)">
        <polygon transform="translate(-130,-100)" className="marshes-icon" points="140.39 78 155.39 78 162.89 90.99 155.39 103.98 140.39 103.98 132.89 90.99 140.39 78" />
        <text transform="translate(50,-5)" fill="white"  stroke="white">Marshes</text>
      </g>

      <g transform="translate(20,150)">
        <polygon transform="translate(-130,-100)" className="plains-icon" points="140.39 78 155.39 78 162.89 90.99 155.39 103.98 140.39 103.98 132.89 90.99 140.39 78" />
        <text transform="translate(50,-5)" fill="white"  stroke="white">Plains</text>
      </g>

      <g transform="translate(20,185)">
        <polygon transform="translate(-130,-100)" className="hills-icon" points="140.39 78 155.39 78 162.89 90.99 155.39 103.98 140.39 103.98 132.89 90.99 140.39 78" />
        <text transform="translate(50,-5)" fill="white"  stroke="white">Hills</text>
      </g>

      <g transform="translate(20,220)">
        <polygon transform="translate(-130,-100)" className="desert-icon" points="140.39 78 155.39 78 162.89 90.99 155.39 103.98 140.39 103.98 132.89 90.99 140.39 78" />
        <text transform="translate(50,-5)" fill="white"  stroke="white">Desert</text>
      </g>

      <g transform="translate(20,255)">
        <polygon transform="translate(-130,-100)" className="burnished-plains-icon" points="140.39 78 155.39 78 162.89 90.99 155.39 103.98 140.39 103.98 132.89 90.99 140.39 78" />
        <text transform="translate(50,-5)" fill="white"  stroke="white">Burnished Plains</text>
      </g>

      <g transform="translate(20,290)">
        <polygon transform="translate(-130,-100)" className="waters-icon" points="140.39 78 155.39 78 162.89 90.99 155.39 103.98 140.39 103.98 132.89 90.99 140.39 78" />
        <text transform="translate(50,-5)" fill="white"  stroke="white">Waters</text>
      </g>
    
    </svg>
    

  )
}

export default Legend
