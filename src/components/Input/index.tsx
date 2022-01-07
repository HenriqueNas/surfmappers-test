import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputText, SearchIcon } from './styles';

type InputProps = TextInputProps;

export function Input({ ...rest }: InputProps) {
	return (
		<Container>
			<SearchIcon />
			<InputText {...rest} />
		</Container>
	);
}
