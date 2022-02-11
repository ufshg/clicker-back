import { gql } from 'apollo-server';

export default gql`
  type newCatResponse {
    ok: Boolean!
    error: String
    cat: Cat
  }
  type Mutation {
    newCat(userId: Int!): newCatResponse!
  }
`;
