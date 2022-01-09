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

export const BackButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: flex-end;
`;

export const BackIcon = styled(MaterialCommunityIcons).attrs({
	name: 'chevron-left',
})`
	font-size: ${RFValue(34)}px;
	color: ${({ theme }) => theme.colors.title};
`;

export const Title = styled.Text`
	font-size: ${RFValue(18)}px;
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.title};
`;

export const IconContent = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons)`
	font-size: ${RFValue(24)}px;
	color: ${({ theme }) => theme.colors.text_dark};
	margin-left: 16px;
`;
