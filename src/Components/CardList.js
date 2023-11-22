import React, { useState } from 'react';
import './CardList.css'; // Make sure to create a corresponding CSS file
import axios from 'axios';


const CardList = () => {
  const [cards, setCards] = useState([]);
  const [showCloseIcons, setShowCloseIcons] = useState(false);

  const addCard = () => {
    const nextPage = Math.ceil((cards.length + 1) / 10) +1;
    axios.get(`https://swapi.dev/api/people/?page=${nextPage}`)
    .then(response => setCards([...cards, response.data.results[0]]))
    .catch(error => console.error('Error fetching data:' , error))
  };

  const removeCard = (id) => {
    const updatedCharacters = [...cards];
    updatedCharacters.splice(id, 1);
    setCards(updatedCharacters);
  };

    return (
 <div > 
  <button onClick={addCard} className='cardListbtn'>Add Card</button>
<div className="card-list">

    {cards.map((card) => (
          <div key={card.id} className="card">
      {cards.length > 3 && (
        <div className="close-icon" onClick={() => removeCard(card.id)}>
          X
        </div>
      )}
      <h2>{card.name}</h2>
      <p>Height: {card.height}</p>
      <p>Films: {card.films.map(film => <span key={film}>{film}, </span>)}</p>
    </div>
  ))}
</div>

</div> 
  );
};

export default CardList;





