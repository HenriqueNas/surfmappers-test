import React from 'react';

import { RootStackParamList } from '../../routes/stack.routes';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useLanguage } from '../../context/language';

import { Header } from '../../components/Header';
import { InfoContent } from './Components/InfoContent';
import { ProfileContent } from './Components/ProfileContent';
import { PicturesInfoContent } from './Components/PicturesInfoContent';

import {
	Container,
	PictureGrid,
	TimeRange,
	Picture,
	ScrollContent,
	Badge,
	AlbumIcon,
} from './styles';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Album'>;

export function Album() {
	const route = useRoute<ProfileScreenRouteProp>();
	const { title, info, name, pics } = route.params;

	const { dictionary, language } = useLanguage();

	return (
		<Container>
			<Header isFeed={false} name={dictionary.ALBUM.ALBUM} />

			<ScrollContent>
				<InfoContent title={title} info={info[language]} />

				<ProfileContent name={name} />

				<PicturesInfoContent pics={pics} />

				<TimeRange>6h - 7h</TimeRange>
				<PictureGrid
					data={pics}
					keyExtractor={(_, index) => index.toString()}
					renderItem={({ item }) => {
						return (
							<Picture source={{ uri: item }}>
								<Badge>
									<AlbumIcon />
								</Badge>
							</Picture>
						);
					}}
				/>
			</ScrollContent>
		</Container>
	);
}
