import React from 'react';
import { Button } from './styles';
import PropTypes from 'prop-types';

export const SubmitButton = ({ children, disabled, color, onClick }) => {
	return (
		<Button disabled={disabled} color={color} onClick={onClick}>
			{children}
		</Button>
	);
};

SubmitButton.propTypes = {
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};
