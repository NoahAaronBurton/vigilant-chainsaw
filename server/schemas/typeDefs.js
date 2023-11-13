
const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int!
        savedBooks: [Book]
    }

    type Book {
       _id: ID!
       author: String!
       description: String!
       bookId: String!
       image: String
       link: String
       title: String!
    }

    type AuthPayload {
        token: String
        user: User
      }

    type Query {
        users: [User]
        user(_id: ID!): User
    }

    type Mutation {
        login(email: String!, password: String!): AuthPayload
        createUser(username: String!, email: String!, password: String!): User
      }     
      
`;
//User
//? update savedBooks
//* bookCount is a virtual

//* The colon (:) is used to specify the return type of the mutation. It indicates what data the client can expect to receive back after the mutation is executed.

//? alter AuthPayload

//todo: update Query
//todo: add mutations
module.exports = typeDefs;