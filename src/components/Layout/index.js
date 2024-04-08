import React from 'react';
import { Helmet } from 'react-helmet';
import { Div, Subtitle, Title } from './styles';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children, title, subtitle }) => {
	const { pathname } = useLocation();

	return (
		<>
			<Helmet>
				{title && <title>PetGram🐶 - {title}</title>}
				{subtitle && <meta name='description' content={subtitle} />}
			</Helmet>
			<Div>
				{title && <Title>{title}</Title>}
				{subtitle && pathname !== '/' && <Subtitle>{subtitle}</Subtitle>}
				{children}
			</Div>
		</>
	);
};
