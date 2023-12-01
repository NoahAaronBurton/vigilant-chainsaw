const express = require('express');
const { ApolloServer} = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


//todo: create typeDefs and resolvers in schema folder
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

//! changed to MONGOPORT for deployment
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// chat GPT generated this code for me to debug requests:
app.use(bodyParser.json(), (req, _, next) => {
  console.log('Received GraphQL Request:');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('---------------------------');
  next();
});
// ------------------------------------------------------------------------

// const routes = require('./routes');
// app.use(routes);

const startApolloServer = async () => {
    await server.start();
    console.log('Starting Apollo Server...');

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    //! using cors middleware is the only way i could find to get rid of console errors on front-end
    app.use(cors());
    // handles GraphQL requests
    app.use('/graphql', expressMiddleware(server));

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    console.log('Serving static files from ../client/dist');
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  } 


  db.once('open', () => {
    console.log('MongoDB connection established successfully');
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}!`);
    });
  });
  

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

}

startApolloServer();

// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }



// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
