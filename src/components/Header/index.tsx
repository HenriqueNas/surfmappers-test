import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
	Container,
	SurfMappers,
	BackButton,
	Title,
	IconContent,
	Icon,
	BackIcon,
} from './styles';

interface Props {
	isFeed: boolean;
	name?: string;
}

export function Header({ isFeed, name }: Props) {
	const navigation = useNavigation();

	function handleNavigationBack(): void {
		navigation.goBack();
	}

	return (
		<Container>
			{isFeed ? (
				<SurfMappers
					source={{
						uri: 'https://surfmappers.com/static/images/surfmappers_logo_ss.png',
					}}
				/>
			) : (
				<BackButton onPress={handleNavigationBack}>
					<BackIcon />
					<Title>{name}</Title>
				</BackButton>
			)}
			<IconContent>
				<Icon name="cart-outline" />
				<Icon name="forum-outline" />
				{!isFeed && <Icon name="dots-vertical" />}
			</IconContent>
		</Container>
	);
}
