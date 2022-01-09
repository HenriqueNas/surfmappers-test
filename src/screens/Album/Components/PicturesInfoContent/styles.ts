import styled from 'styled-components/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Content = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 16px;
	border-bottom-color: ${({ theme }) => theme.colors.text_light};
	border-bottom-width: 1px;
`;

export const AmountPics = styled.Text`
	font-size: ${RFValue(16)}px;
	font-family: ${({ theme }) => theme.fonts.bold};
	letter-spacing: 0.5px;
	color: ${({ theme }) => theme.colors.primary};
`;

export const PicFilter = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	border-radius: 18px;
	padding: 8px 14px 8px 8px;

	background-color: ${({ theme }) => theme.colors.secondary_light};
`;

export const FilterText = styled.Text`
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.secondary};

	margin-right: 12px;
`;

export const FilterIconCircle = styled.View`
	padding: 6px;
	margin-right: 12px;
	border-radius: 50px;

	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.colors.secondary};
`;

export const FilterIcon = styled(MaterialCommunityIcons).attrs({
	name: 'filter',
})`
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.background};
`;

export const ArrowDownIcon = styled(MaterialCommunityIcons).attrs({
	name: 'triangle',
})`
	font-size: ${RFValue(10)}px;
	color: ${({ theme }) => theme.colors.secondary};
	transform: rotate(180deg);
`;
