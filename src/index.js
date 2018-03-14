import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import tokenKey from './github_token';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Seting up the url for the api with token from github account
 */
const httpLink = new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer ${tokenKey}`,
    },
});

/**
 * if there's an error will appear in console
 */
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache({
    logger: console.log,
    loggerEnabled: true,
});

/**
 * initialize the apollo client
 */
const client = new ApolloClient({
    link,
    cache,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);

registerServiceWorker();
