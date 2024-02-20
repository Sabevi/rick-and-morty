import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
    const casts = [
        {
            name: "Amish Cyborg",
            image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg"
        },
        {
            name: "Annie",
            image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
        },
        {
            name: "Antenna Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg"
        },
        {
            name: "Antenna Rick",
            image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
        },

    ];

    const castList = casts.map((cast) => (
        <tr key={cast.name}>
            <td>{cast.name}</td>
        </tr>
    ));
  return (
    <>
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>{castList}</tbody>
            </table>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
