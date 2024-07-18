import React from 'react';
import '../../styles/card.css';
const Card = ({ cardData,id }) => {
  return (
    <div className='container card-main' id={id} >
      <div><p>Available Programs</p></div>
      <div className='card-main-div'>
        {cardData.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.headingOne}</h1>
              <h1>{item.headingTwo}</h1>
              <p>{item.para}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card;
