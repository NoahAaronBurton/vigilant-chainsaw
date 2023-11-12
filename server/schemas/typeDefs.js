
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

    type Query {
        users: [User]
        user(_id: ID!): User
    }

    type Mutation {
      createUser(username: String!, email: String!, password: String!): User
      }
      
`;
//User
//? update savedBooks
//* bookCount is a virtual

//todo: update Query
//todo: add mutations
module.exports = typeDefs;