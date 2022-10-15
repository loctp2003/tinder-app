import './App.css';
import TinderCard from 'react-tinder-card';
import { useState } from 'react';

const db = [
  {
    name: 'Richard Hendricks',
    url: './img/ahihi.png'
  },
  {
    name: 'Erlich Bachman',
    url: './img/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png'
  },
  {
    name: 'Monica Hall',
    url: './img/ahihi.png'
  },
  {
    name: 'Jared Dunn',
    url: './img/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png'
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/ahihi.png'
  }
]

function App() {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }
  
  return (
    <div className="App">
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  );
}

export default App;
