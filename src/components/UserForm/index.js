import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import {
	Error,
	Form,
	FormContainer,
	ImageWrapper,
	Input,
	Subtitle,
	Title,
	Toggle,
} from './styles';
import { SubmitButton } from '../SubmitButton';

import registerImg from '../../assets/register-img.png';
import loginImg from '../../assets/login-img.png';

export const UserForm = ({ error, disabled, labels, onSubmit, onClick }) => {
	const email = useInputValue('chrod@mail.com');
	const password = useInputValue('Test_1234');
	const {
		title,
		toggle: { text, to },
		color,
	} = labels;

	const imgForm = title === 'Registrate' ? registerImg : loginImg;

	const handleSubmit = event => {
		event.preventDefault();
		onSubmit({ email: email.value, password: password.value });
	};

	return (
		<FormContainer>
			<ImageWrapper>
				<div>
					<img src={imgForm} alt='Form image' />
				</div>
			</ImageWrapper>
			<Form disabled={disabled} onSubmit={handleSubmit}>
				<Title>{title}</Title>
				<Subtitle>Ingresa tu email y contraseña:</Subtitle>
				<Input
					disabled={disabled}
					color={color}
					placeholder='Email'
					{...email}
				/>
				<Input
					disabled={disabled}
					color={color}
					placeholder='Password'
					type='password'
					{...password}
				/>
				<SubmitButton disabled={disabled} color={color}>
					{title}
				</SubmitButton>
			</Form>
			{error && <Error>{error}</Error>}
			<Toggle color={color}>
				{text} <span onClick={onClick}>{to}</span>
			</Toggle>
		</FormContainer>
	);
};
