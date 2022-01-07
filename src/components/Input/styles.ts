import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	background-color: ${({ theme }) => theme.colors.shape};

	width: 100%;
	padding: 12px 16px;
	margin-bottom: 8px;
	border-radius: 12px;
`;

export const SearchIcon = styled(MaterialCommunityIcons).attrs({
	name: 'magnify',
})`
	font-size: ${RFValue(24)}px;
	color: ${({ theme }) => theme.colors.text};
	margin-right: 8px;
`;

export const InputText = styled.TextInput`
	width: 100%;
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text_dark};
`;
