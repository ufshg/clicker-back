import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int!
    cat: Cat
  }
`;
