import React, { useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword: 'dragon'}).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => {
            return <div>
              <img alt={singleGif.id} src={singleGif.url} />
              <br />
              <span>{singleGif.title}</span>
            </div>  
          })
        }
      </section>
    </div>
  );
}

export default App;
