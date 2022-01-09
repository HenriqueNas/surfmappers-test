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

export const Div = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Name = styled.Text`
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text_dark};
`;

export const FollowButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.colors.secondary};

	border-radius: 8px;
	padding: 6px;
	min-width: ${RFValue(110)}px;

	align-items: center;
	justify-content: center;
`;

export const FollowText = styled.Text`
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.medium};
	letter-spacing: 0.8px;
	color: ${({ theme }) => theme.colors.background};
`;

export const CameraIcon = styled(MaterialCommunityIcons).attrs({
	name: 'camera-outline',
})`
	font-size: ${RFValue(24)}px;
	color: ${({ theme }) => theme.colors.text_dark};
	margin-right: 12px;
`;

export const ChatIcon = styled(MaterialCommunityIcons).attrs({
	name: 'forum',
})`
	font-size: ${RFValue(24)}px;
	color: ${({ theme }) => theme.colors.title};
	margin-right: 18px;
`;
