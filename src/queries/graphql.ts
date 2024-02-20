import { gql } from '@apollo/client';

export const TEST_QERRY = gql`
          query GetCharacters {
            characters {
              results {
                id
                name
                image
              }
            }
          }
        `;
export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
      characters {
        info {
          __typename
          count
          pages
          next
          prev
        }
        results {
          __typename
          id
          name
          image
        }
      }
    }
`;

const GET_CHARACTER = gql`
  query GetCharacter($characterId: ID!) {
    character(id: 1) {
      __typename
      name
      image
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        episode
        air_date
      }
      created
    }
  }
`;
