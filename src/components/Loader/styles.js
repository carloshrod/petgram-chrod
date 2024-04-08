import styled from 'styled-components';

export const LoaderContainer = styled.section`
	width: 100%;
	height: 100%;
	min-height: ${props => props.minHeight || 'auto'};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoaderContent = styled.div`
	width: calc(6 * 30px);
	height: 50px;
	display: flex;
	color: #8d7958;
	filter: drop-shadow(30px 25px 0 currentColor)
		drop-shadow(60px 0 0 currentColor) drop-shadow(120px 0 0 currentColor);
	clip-path: inset(0 100% 0 0);
	animation: l12 1s infinite steps(7);

	&:before {
		content: '';
		width: 30px;
		height: 25px;
		--c: no-repeat radial-gradient(farthest-side, currentColor 92%, #0000);
		background:
			var(--c) left / 70% 70%,
			var(--c) right/20% 20%,
			var(--c) top 0 right 15%/20% 20%,
			var(--c) bottom 0 right 15%/20% 20%;
	}

	@keyframes l12 {
		100% {
			clip-path: inset(0 -30px 0 0);
		}
	}
`;
