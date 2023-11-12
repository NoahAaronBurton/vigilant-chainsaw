

//* mutations.js defines the structure of your GraphQL mutation.
//* resolvers.js implements the logic associated with that mutation.


//* You use the CREATE_USER mutation from mutations.js to perform the mutation using Apollo Client in your React components.
//* The server-side resolver in resolvers.js handles the logic and database operations associated with the mutation.
import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

