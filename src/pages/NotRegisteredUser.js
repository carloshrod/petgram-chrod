import React, { useContext } from 'react';
import { UserForm } from '../components/UserForm';
import Context from '../Context';
import { loginLabels, registerLabels } from '../components/UserForm/consts';
import { useCustomMutation } from '../hooks/useCustomMutation';

const NotRegisteredUser = () => {
	const { isRegister, toggleForm, activateAuth } = useContext(Context);
	const {
		register,
		registerResponse: { error: registerError, loading: registerLoading },
		login,
		loginResponse: { error: loginError, loading: loginLoading },
	} = useCustomMutation();

	const onSubmit = ({ email, password }) => {
		const input = { email, password };
		const variables = { input };
		if (isRegister) {
			register({ variables })
				.then(({ data }) => {
					const { signup } = data;
					activateAuth(signup);
				})
				.catch(e => console.error(e.message));
		} else {
			login({ variables })
				.then(({ data }) => {
					const { login } = data;
					activateAuth(login);
				})
				.catch(e => console.error(e.message));
		}
	};

	const registerErrorMsg =
		registerError &&
		'Hay un error con el registro, por favor intentalo más tarde!';

	const loginErrorMsg =
		loginError && 'Hay un error con el login, por favor intentalo más tarde!';

	return isRegister ? (
		<UserForm
			disabled={registerLoading}
			error={registerErrorMsg}
			labels={registerLabels}
			onSubmit={onSubmit}
			onClick={toggleForm}
		/>
	) : (
		<UserForm
			disabled={loginLoading}
			error={loginErrorMsg}
			labels={loginLabels}
			onSubmit={onSubmit}
			onClick={toggleForm}
		/>
	);
};

export default NotRegisteredUser;
