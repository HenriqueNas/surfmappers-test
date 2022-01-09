import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface RadioProps {
	isActive: boolean;
}

export const Container = styled.TouchableOpacity`
	width: 100%;
	margin: 8px;

	flex-direction: row;
	align-items: center;
`;

export const CircleWrapper = styled.View<RadioProps>`
	width: ${RFValue(20)}px;
	height: ${RFValue(20)}px;

	align-items: center;
	justify-content: center;

	border-width: 2px;
	border-style: solid;
	border-radius: 100px;
	border-color: ${({ theme, isActive }) =>
		isActive ? theme.colors.primary : theme.colors.text};

	padding: 3px;
`;

export const CircleFiller = styled.View`
	width: 100%;
	height: 100%;

	border-radius: 200px;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonText = styled.Text<RadioProps>`
	margin-left: 12px;

	font-family: ${({ theme, isActive }) =>
		isActive ? theme.fonts.medium : theme.fonts.regular};
	color: ${({ theme, isActive }) =>
		isActive ? theme.colors.primary : theme.colors.text};
`;
