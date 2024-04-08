import React from 'react';
import { SubmitButton } from '../SubmitButton';
import { ProfileContainer } from './styles';

export const UserProfile = ({ onClick }) => {
	return (
		<ProfileContainer>
			<SubmitButton color='#fe0063' onClick={onClick}>
				Cerrar sesión
			</SubmitButton>
		</ProfileContainer>
	);
};
