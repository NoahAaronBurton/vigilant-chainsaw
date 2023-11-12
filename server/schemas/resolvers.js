const { User, Book} = require('../models');
const bcrypt = require('bcrypt');
const {signToken} = require('../utils/auth');
// Create the functions that fulfill the queries defined in `typeDefs.js`

const resolvers = {
    Mutation: {
        createUser: async (_, {username, email, password}) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            return User.create({ username, email, password: hashedPassword });
            
        },
        
    } 
}


 module.exports = resolvers;