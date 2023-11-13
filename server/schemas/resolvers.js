const { User, Book} = require('../models');
const bcrypt = require('bcrypt');
// const {signToken} = require('../utils/auth');
// Create the functions that fulfill the queries defined in `typeDefs.js`

const resolvers = {
    Query: {
        users: async () => {
          return User.find();
        },
        user: async (_, { _id }) => {
          return User.findOne({ _id });
        },
      },
    Mutation: {
        login: async (_, { email, password }) => {
          //! debug code
          console.log('Received email:', email);
          console.log('Received password:', password);

            const user = await User.findOne({ email });
            
            console.log('Found user:', user);
      
            if (!user) {
              throw new Error('User not found');
            }
      
            const isPasswordValid = await user.isCorrectPassword(password);
            console.log('Is password valid?', isPasswordValid);
            console.log('Stored hashed password:', user.password);
      
            if (!isPasswordValid) {
              throw new Error('Invalid password');
            }
      
            // Generate and return a JWT token along with the user information
            // const token = generateToken(user);
      
            return {user};
          },
        createUser: async (_, {username, email, password}) => {
            return User.create({ username, email, password, });
            
        },
        
    } 
}

// Helper function to generate JWT token
// const generateToken = (user) => {
//     // Implement JWT token generation logic here
//     return signToken(user);
//   };


 module.exports = resolvers;