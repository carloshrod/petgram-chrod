import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const List = styled.ul`
	display: flex;
	overflow-x: auto;
	width: 100%;
	padding: 20px 0;
	margin-bottom: 10px;

	&::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: #505050;
		border-radius: 3px;
	}

	&::-webkit-scrollbar-track {
		background: #808080;
		border-radius: 3px;
	}

	${props =>
		props.fixed &&
		css`
  {
      ${fadeIn({ time: '.5s' })}
			background: #fff;
			border-radius: 40px;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
			left: 0;
			margin: 0 auto;
			max-width: 400px;
			padding: 5px;
			position: fixed;
			right: 0;
			top: -20px;
			transform: scale(0.5);
			z-index: 1;
    }
  `}
`;

export const Item = styled.li`
	padding: 0 8px;
`;
