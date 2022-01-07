import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface StoryRingProps {
	viewed: boolean;
}

export const Container = styled.View`
	height: 100%;
	margin-right: 8px;

	align-items: center;
	justify-content: space-between;
`;

export const StoryRing = styled.View<StoryRingProps>`
	width: ${RFValue(62)}px;
	height: ${RFValue(62)}px;

	align-items: center;
	justify-content: center;

	border-width: 2px;
	border-style: solid;
	border-color: ${({ theme, viewed }) =>
		viewed ? theme.colors.text : theme.colors.primary};

	border-radius: 45px;
`;

export const Photo = styled.Image`
	height: 96%;
	width: 96%;
	border-radius: 45px;
`;

export const Name = styled.Text.attrs({
	numberOfLines: 1,
})`
	max-width: 100%;
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.text};
`;
