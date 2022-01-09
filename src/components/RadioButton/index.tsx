import React from 'react';

import { Container, CircleWrapper, CircleFiller, ButtonText } from './styles';

interface Props {
	title: string;
	isActive: boolean;
	onPress: () => void;
}

export function RadioButton({ title, isActive, onPress }: Props) {
	return (
		<Container onPress={onPress}>
			<CircleWrapper isActive={isActive}>
				{isActive && <CircleFiller />}
			</CircleWrapper>
			<ButtonText isActive={isActive}>{title}</ButtonText>
		</Container>
	);
}
