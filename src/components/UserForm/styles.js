import styled from 'styled-components';

export const FormContainer = styled.section`
	padding: 10px;
	margin-bottom: 50px;
`;

export const ImageWrapper = styled.div`
	display: flex;

	div {
		text-align: center;
		width: 150px;
		margin: auto;
		padding: 20px;
		background-color: rgb(141, 0, 255, 0.1);
		border-radius: 50%;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 0;
`;

export const Input = styled.input`
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-bottom: 24px;
	padding: 12px 16px;
	display: block;
	width: 100%;
	max-width: 300px;
	outline: none;

	&:hover,
	&:focus {
		border: 1px solid ${props => props.color};
	}

	&[disabled] {
		opacity: 0.5;
	}
`;

export const Title = styled.h2`
	font-size: 24px;
	font-weight: 500;
	padding: 8px 0;
`;

export const Subtitle = styled.p`
	font-size: 12px;
	padding-bottom: 20px;
`;

export const Error = styled.span`
	font-size: 12px;
	color: red;
	display: block;
	margin-bottom: 8px;
	text-align: center;
`;

export const Toggle = styled.p`
	font-size: 12px;
	padding: 10px 0;
	text-align: center;

	span {
		color: ${props => props.color};
		font-weight: bold;
		cursor: pointer;

		&:hover {
			filter: brightness(1.1);
		}
	}
`;
