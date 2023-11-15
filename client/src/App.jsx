import './App.css';
//* Outlet acts as a placeholder for the child routes associated with the parent route. 
// * it automatically matches the child routes to the current URL.
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


import Navbar from './components/Navbar';

//* "server" is referring to the GraphQL server that your React application is communicating with using Apollo Client.
//? use mongoport instead of private url
const serverUrl = process.env.NODE_ENV === 'production'
  ? process.env.RAILWAY_URL + 'graphql'
  : 'http://localhost:3001/graphql';

const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache(),
});

function App() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.RAILWAY_URL);
  return (
    <>
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
      </ApolloProvider>
    </>
  );
}

export default App;
