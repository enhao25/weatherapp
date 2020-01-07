import React from 'react';
import Card from './Card';

const Cardlist = ({weathers}) => {
    const cardsArray = weathers.map((user, i) => {
        // The key is like an id for jsx. It should be something that doesn't change and is unique (E.g. ID)
        return <Card key={i} id={weathers[i].id} name={weathers[i].name} weather={weathers[i].weather} />
    })
    return(
        <div>
            {cardsArray}
        </div>
    );
}

export default Cardlist;