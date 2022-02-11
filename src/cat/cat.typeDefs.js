import { gql } from 'apollo-server';

export default gql`
    type Cat {
        id: Int!
        user: User!
        userId: Int!
        level: Int!
        exp: Int!
    }
`;