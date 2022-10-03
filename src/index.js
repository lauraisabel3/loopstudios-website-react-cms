import React from 'react';
import ReactDOM from 'react-dom/client';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": "Bearer a48de22642668561812c63d8420e6a",
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientContext.Provider value={client}>
        <App />
      </ClientContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);


