import './App.css';
//* Outlet acts as a placeholder for the child routes associated with the parent route. 
// * it automatically matches the child routes to the current URL.
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


import Navbar from './components/Navbar';

const serverUrl = process.env.NODE_ENV === 'production'
  ? process.env.RAILWAY_URL + '/graphql'
  : 'http://localhost:3001/graphql';

const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache(),
});

function App() {
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
