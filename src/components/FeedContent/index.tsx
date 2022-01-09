import React, { useState } from 'react';
import { TouchableOpacity, Share as ReactShare } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/stack.routes';

import {
	Container,
	Title,
	Info,
	Carousel,
	Image,
	Div,
	Favorite,
	FavoriteSelected,
	Share,
	CameraIcon,
	Name,
	Dot,
} from './styles';

interface Props {
	title: string;
	info: string;
	pics: string[];
	name: string;
}

export function FeedContent({ title, info, pics, name }: Props) {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const [isFavorite, setIsFavorite] = useState(false);

	function handleSetIsFaforite(): void {
		setIsFavorite(!isFavorite);
	}

	async function handleShareContent(): Promise<void> {
		try {
			await ReactShare.share(
				{
					message: `${title} \nby ${name}`,
					url: pics[0],
				},
				{
					dialogTitle: info,
				}
			);
		} catch (error) {
			alert(error.message);
		}
	}

	function handleNavigateAlbum(): void {
		navigation.navigate('Album', {
			info,
			title,
			name,
			pics,
		});
	}

	return (
		<Container>
			<TouchableOpacity onPress={handleNavigateAlbum}>
				<Title>{title}</Title>
				<Info>{info}</Info>
			</TouchableOpacity>

			<Carousel>
				{pics.map((item, index) => {
					return (
						<TouchableOpacity
							key={index.toString()}
							onPress={handleNavigateAlbum}
						>
							<Image source={{ uri: item }} />
						</TouchableOpacity>
					);
				})}
			</Carousel>
			<Div>
				<Div>
					<TouchableOpacity onPress={handleSetIsFaforite}>
						{isFavorite ? <FavoriteSelected /> : <Favorite />}
					</TouchableOpacity>
					<TouchableOpacity onPress={handleShareContent}>
						<Share />
					</TouchableOpacity>
				</Div>

				<Div>
					{pics.map((_, index) => {
						return <Dot key={index.toString()} active={index === 1} />;
					})}
				</Div>

				<Div>
					<CameraIcon />
					<Name>{name}</Name>
				</Div>
			</Div>
		</Container>
	);
}
