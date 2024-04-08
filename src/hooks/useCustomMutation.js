import { gql, useMutation } from '@apollo/client';

const REGISTER = gql`
	mutation signup($input: UserCredentials!) {
		signup(input: $input)
	}
`;

const LOGIN = gql`
	mutation login($input: UserCredentials!) {
		login(input: $input)
	}
`;

const LIKE_PHOTO = gql`
	mutation likePhoto($input: LikePhoto!) {
		likePhoto(input: $input) {
			id
			liked
			likes
		}
	}
`;

export const useCustomMutation = () => {
	const [register, registerResponse] = useMutation(REGISTER);
	const [login, loginResponse] = useMutation(LOGIN);
	const [toggleLike, likeResponse] = useMutation(LIKE_PHOTO);

	return {
		register,
		registerResponse,
		login,
		loginResponse,
		toggleLike,
		likeResponse,
	};
};
