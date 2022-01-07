import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.background};

	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;

	width: 100%;
	height: ${RFValue(100)}px;
	padding: 0 16px;
	padding-bottom: 18px;
`;

export const SurfMappers = styled.Image`
	height: ${RFValue(30)}px;
	width: ${RFValue(134)}px;
`;

export const IconContent = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons)`
	font-size: ${RFValue(26)}px;
	color: ${({ theme }) => theme.colors.text_dark};
	margin-left: 16px;
`;
