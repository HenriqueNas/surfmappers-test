import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('screen');

const picSize = width / 3;

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollContent = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
})``;

export const TimeRange = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(14)}px;
	margin: 16px;
`;

export const PictureGrid = styled.FlatList.attrs({
	nestedScrollEnabled: true,
	showsVerticalScrollIndicator: false,
	numColumns: 3,
	columnWrapperStyle: { justifyContent: 'space-between' },
})``;

export const Picture = styled.ImageBackground`
	width: ${picSize - 2}px;
	height: ${picSize - 2}px;

	margin-bottom: 3px;
`;

export const Badge = styled.View`
	padding: 3px;
	margin: 8px;
	align-self: flex-end;

	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.secondary};
`;

export const AlbumIcon = styled(MaterialCommunityIcons).attrs({
	name: 'image-multiple',
})`
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.background};
`;
