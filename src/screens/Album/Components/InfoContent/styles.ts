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

export const TitleInfo = styled.View`
	max-width: 90%;
`;

export const Title = styled.Text.attrs({
	numberOfLines: 1,
})`
	font-size: ${RFValue(22)}px;
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.text_dark};
`;

export const Info = styled.Text.attrs({
	numberOfLines: 1,
})`
	margin-top: -1px;

	font-size: ${RFValue(16)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
`;

export const Share = styled(MaterialCommunityIcons).attrs({
	name: 'share-variant',
})`
	font-size: ${RFValue(22)}px;
	color: ${({ theme }) => theme.colors.text_dark};
`;
