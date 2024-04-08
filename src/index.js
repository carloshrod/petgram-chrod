import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { Provider } from './Context';

const httpLink = createHttpLink({
	uri: 'https://petgram-jdb-api.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = window.sessionStorage.getItem('token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const errorLink = onError(({ networkError }) => {
	if (networkError && networkError.result.code === 'invalid_token') {
		window.sessionStorage.removeItem('token');
		window.location.href = '/';
	}
});

const client = new ApolloClient({
	link: errorLink.concat(authLink.concat(httpLink)),
	cache: new InMemoryCache(),
});

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
	<Provider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Provider>,
);
