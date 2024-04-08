import React, { createContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(() => {
		return window.sessionStorage.getItem('token');
	});
	const [isRegister, setIsRegister] = useState(true);

	const value = {
		isAuth,
		activateAuth: token => {
			setIsAuth(true);
			window.sessionStorage.setItem('token', token);
		},
		removeAuth: () => {
			setIsAuth(false);
			setIsRegister(false);
			window.sessionStorage.removeItem('token');
		},
		isRegister,
		toggleForm: () => {
			setIsRegister(!isRegister);
		},
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
export { Provider };
