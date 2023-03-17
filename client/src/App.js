import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Schools from './pages/Schools';
import Housing from './pages/Housing';
import Legal from './pages/Legal';
import Profile from './pages/Profile';
import Healthcare from './pages/Healthcare';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// setup HttpLink which is the terminating link
// with the endpoint of the GraphQL server as its uri
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Call setContext() to prepare the authLink for the ApolloClient constructor.
// Authlink will then be used for every request made by Apollo Client.
// We pass in a function to let authLink 
// (1) get the token from Local Storage, and
// (2) put the token in the header 
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// create a new ApolloClient instance and 
// pass in the authLink and httpLink, and 
// the cache object
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={<Welcome />}
            />
            <Route 
              path='/schools' 
              element={<Schools />}
            />
            <Route 
              path='/housing' 
              element={<Housing />} 
            />
            <Route 
              path='/legal' 
              element={<Legal />} 
            />
              <Route 
              path='/healthcare' 
              element={<Healthcare/>} 
            />
            <Route 
              path='/profile' 
              element={<Profile />} 
            />
            <Route 
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>
          <Footer />
          <Routes>
            <Route path='/ContactUs'
            element={<ContactUs/>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
