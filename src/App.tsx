import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import CharacterCard, { Cast } from "./component/characterCard.tsx";
import { TEST_QERRY } from "./queries/graphql.ts";

function App() {
  const [casts, setCasts] = useState<Cast[]>([]);

  useEffect(() => {
    const client = new ApolloClient({
      uri: "https://rickandmortyapi.com/graphql",
      cache: new InMemoryCache(),
    });

    client
      .query({
        query: TEST_QERRY,
      })
      .then((result) => {
        const gcast = result.data.characters.results;
        const castList: Cast[] = gcast.map((item: any) => ({
          id: item.id,
          name: item.name,
          image: item.image,
        }));
        setCasts(castList);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="container">
      <nav aria-label="...">
        <ul className="pagination justify-content-center mt-5 mb-5">
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              2 <span className="sr-only"></span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <div className="row">
        {casts.map((cast, index) => (
          <div className="col-md-3" key={index}>
            <CharacterCard character={cast} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
