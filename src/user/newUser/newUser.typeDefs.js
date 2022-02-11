import { gql } from 'apollo-server';

export default gql`
  type newUserResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    newUser: newUserResponse!
  }
`;
