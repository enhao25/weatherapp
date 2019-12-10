import React from 'react';
import Card from './Card';

const Cardlist = ({cats}) => {
    const cardsArray = cats.map((user, i) => {
        // {console.log(user)}
        // The key is like an id for jsx. It should be something that doesn't change and is unique (E.g. ID)
        return <Card key={i} id={cats[i].id} name={cats[i].name} email={cats[i].email} />
    })
    return(
        <div>
            {cardsArray}
        </div>
    );
}

export default Cardlist;