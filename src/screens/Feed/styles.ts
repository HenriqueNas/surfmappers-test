import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, FlatListProps } from 'react-native';
import { StoriesInterface } from '../../utils/stories';
import { FeedsInterface } from '../../utils/feeds';

export const Container = styled.View`
	background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
})`
	margin-bottom: 100px;
`;

export const StoriesCarousel = styled(
	FlatList as new (
		props: FlatListProps<StoriesInterface>
	) => FlatList<StoriesInterface>
).attrs({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		paddingHorizontal: 16,
		height: RFValue(80),
	},
})`
	width: 100%;

	flex-direction: row;
	padding-bottom: 16px;

	border-bottom-color: ${({ theme }) => theme.colors.text_light};
	border-bottom-width: 0.3px;
	background: ${({ theme }) => theme.colors.background};
`;

export const AddStory = styled.TouchableOpacity`
	height: 100%;
	margin-right: 8px;

	align-items: center;
	justify-content: space-between;
`;

export const StoryRing = styled.View`
	width: ${RFValue(60)}px;
	height: ${RFValue(60)}px;

	align-items: center;
	justify-content: center;

	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 45px;
`;

export const CameraIcon = styled(MaterialCommunityIcons).attrs({
	name: 'camera',
})`
	font-size: ${RFValue(24)}px;
	color: ${({ theme }) => theme.colors.primary};
`;

export const AddText = styled.Text`
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.primary};
`;

export const SearchSection = styled.View`
	padding: 16px;
`;

export const Title = styled.Text`
	font-size: ${RFValue(22)}px;
	color: ${({ theme }) => theme.colors.title};
	font-family: ${({ theme }) => theme.fonts.medium};
	margin-bottom: 8px;
`;
