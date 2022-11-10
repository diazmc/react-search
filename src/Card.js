import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
          <h2>{props.user.name}</h2>
          <p>{props.user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;