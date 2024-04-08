import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const FavsContainer = styled.section`
	padding: 12px;

	/* h1 {
		display: inline-block;
		margin: 0 0 8px 8px;
		border-bottom: 4px solid #8d00ff;
	} */

	p {
		margin: 100px 0;
		text-align: center;
		font-weight: 300;
		font-size: 40px;
	}
`;

export const Link = styled(LinkRouter)`
	border-radius: 8px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	display: inline-block;
	margin: 1%;
	overflow: hidden;
	position: relative;
	width: 31.33%;
	&:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
`;

export const Grid = styled.div`
	padding-top: 0px;
`;

export const Image = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
	position: absolute;
`;
