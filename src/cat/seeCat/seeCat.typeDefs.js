import { gql } from 'apollo-server';

export default gql`
  type seeCatResponse {
    ok: Boolean!
    error: String
    cat: Cat
  }
  type Query {
    seeCat(id: Int!): seeCatResponse!
  }
`;
