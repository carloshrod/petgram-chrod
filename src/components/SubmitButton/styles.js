import styled from 'styled-components';

export const Button = styled.button`
	background: ${props => props.color};
	border-radius: 8px;
	color: #fff;
	height: 36px;
	display: block;
	width: 100%;
	max-width: 200px;
	text-align: center;
	text-transform: uppercase;
	font-weight: 500;
	cursor: pointer;

	&:hover {
		transform: scale(1.01);
	}

	&:active {
		transform: scale(0.98);
	}

	&[disabled] {
		opacity: 0.5;
	}
`;
