import { useEffect, useState } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import CharacterCard from "./component/characterCard.tsx";
import { CharacterModel } from "./model/CharacterModel.ts";
import {PaginationModel} from "./model/PaginationModel.ts";

function App() {
    const [casts, setCasts] = useState<CharacterModel[]>([]);
    const [paginationinfos, setPagination] = useState<PaginationModel>();
    const [page, setPage] = useState<number>(1);

    const client = new ApolloClient({
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache(),
    });

    useEffect(() => {
        const fetchCharacters = async (pageNumber: number) => {
            try {
                const result = await client.query({
                    query: gql`
                        query GetCharacters($page: Int!) {
                            characters(page: $page) {
                                info {
                                  count
                                  pages
                                  next
                                  prev
                                }
                                results {
                                    id
                                    name
                                    image
                                }
                            }
                        }
                    `,
                    variables: {
                        page: pageNumber,
                    },
                });
                const ginfo = result.data.characters.info;
                const paginationInfo: PaginationModel = {pages: ginfo.next - 1, next: ginfo.next, prev: ginfo.prev};
                console.log(paginationInfo)
                setPagination(paginationInfo);
                const gcast = result.data.characters.results;
                const castList: CharacterModel[] = gcast.map((item: CharacterModel) => ({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                }));
                setCasts(castList);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchCharacters(page);
    }, [page]);

    const setNext = () => {
        setPage((prevPage) => prevPage + 1);
    };

    function setPrevious() {
        setPage((prevPage) => prevPage - 1);
    }

    return (
        <div className="container">
            <nav aria-label="...">
                <ul className="pagination justify-content-center mt-5 mb-5">
                    <li className="page-item">
                        <div className="page-link" onClick={setPrevious}>
                            Previous
                        </div>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            {paginationinfos?.pages}
                        </a>
                    </li>
                    <li className="page-item">
                        <div className="page-link" onClick={setNext}>
                            Next
                        </div>
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
