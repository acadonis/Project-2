import React from 'react'


const Card = ({ name, image }) => {
  return (
    <div className="card">
      <div className="card-content">{name}
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
        </div>
      </div>
    </div>

  )
}
export default Card
