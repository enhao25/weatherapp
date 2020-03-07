import React from 'react';

const Card = ({ name, weather, id }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            {weather < 28 
                ? <img alt="robot_photo" src={require('./cloud.png')} height="200" width="200" />
                : <img alt="robot_photo" src={require('./sunny.png')} height="200" width="200" />}
            
            <div>
                <h3>{name}</h3>
                <p>{weather}°</p>
            </div>
        </div>
    )
}

export default Card;