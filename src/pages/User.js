import React, { useContext } from 'react';
import Context from '../Context';
import { UserProfile } from '../components/UserProfile';
import { Layout } from '../components/Layout';

const User = () => {
	const { removeAuth } = useContext(Context);

	return (
		<Layout
			title='Tu perfil'
			subtitle='Aquí puedes gestionar tu perfil de PetGram'
		>
			<UserProfile onClick={removeAuth} />
		</Layout>
	);
};

export default User;
