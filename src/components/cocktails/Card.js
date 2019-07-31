import React from 'react'


const Card = ({ name, image }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{name}
        </div>
        <div className="card-image">
          <figure className="">
            <img src={image} alt={name} />
          </figure>
        </div>
      </div>
    </div>

  )
}
export default Card
