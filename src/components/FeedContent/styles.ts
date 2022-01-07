import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

interface DotProps {
	active: boolean;
}

export const Container = styled.View`
	width: 100%;
	padding: 0 12px 12px 12px;
	margin-bottom: 24px;
`;

export const Title = styled.Text`
	max-width: 90%;
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.primary};
`;

export const Info = styled.Text`
	max-width: 90%;
	margin-top: -5px;

	font-size: ${RFValue(12)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.title};
`;

export const Carousel = styled.ScrollView.attrs({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	pagingEnabled: true,
	decelerationRate: 0,
	snapToInterval: width + 16 - 50,
	snapToAlignment: 'center',
	contentContainerStyle: { paddingHorizontal: 16, paddingVertical: -12 },
})`
	margin: 12px -12px;
`;

export const Image = styled.Image`
	width: ${width - 50}px;
	height: ${RFValue(180)}px;

	border-radius: 8px;
	margin-right: 12px;
`;

export const Div = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Love = styled(AntDesign).attrs({
	name: 'hearto',
})`
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.text_dark};
	margin-right: 16px;
`;

export const Share = styled(MaterialCommunityIcons).attrs({
	name: 'share-variant',
})`
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.text_dark};
`;

export const Dot = styled.View<DotProps>`
	width: 6px;
	height: 6px;
	margin-right: 4px;

	border-radius: 5px;
	background-color: ${({ theme, active }) =>
		active ? theme.colors.secondary : theme.colors.secondary_light};
`;

export const CameraIcon = styled(MaterialCommunityIcons).attrs({
	name: 'camera-outline',
})`
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.text_dark};
	margin-right: 16px;
`;

export const Name = styled.Text`
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.title};
`;
