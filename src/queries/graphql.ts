import { gql } from '@apollo/client';

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
