import React from 'react';
import { LoaderContainer, LoaderContent } from './styles';

export const Loader = ({ minHeight }) => {
	return (
		<LoaderContainer minHeight={minHeight}>
			<LoaderContent></LoaderContent>
		</LoaderContainer>
	);
};
