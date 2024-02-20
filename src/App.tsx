// import { useState } from 'react'
import './App.css'
import CharacterDetails from "./component/characterDetails.tsx";



function App() {
  // const [count, setCount] = useState(0)
    const casts = [
        {
            id: 1,
            name: "Amish Cyborg",
            image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg"
        },
        {
            id: 17,
            name: "Annie",
            image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
        },
        {
            id: 18,
            name: "Antenna Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg"
        },
        {
            id: 19,
            name: "Antenna Rick",
            image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
        },

    ];

  return (
      <div className="container">
          <div className="row">
              {casts.map((cast, index) => (
                  <div className="col-md-3" key={index}>
                      <CharacterDetails character={cast}/>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default App
