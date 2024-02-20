import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    query {
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