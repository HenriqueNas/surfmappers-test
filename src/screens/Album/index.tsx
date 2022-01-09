import React from 'react';

import { RootStackParamList } from '../../routes/stack.routes';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useLanguage } from '../../context/language';

import { Header } from '../../components/Header';
import { InfoContent } from './Components/InfoContent';
import { ProfileContent } from './Components/ProfileContent';
import { PicturesInfoContent } from './Components/PicturesInfoContent';

import { Container } from './styles';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Album'>;

export function Album() {
	const route = useRoute<ProfileScreenRouteProp>();
	const { title, info, name, pics } = route.params;

	const { dictionary } = useLanguage();

	return (
		<Container>
			<Header isFeed={false} name={dictionary.ALBUM.ALBUM} />

			<InfoContent title={title} info={info} />

			<ProfileContent name={name} />

			<PicturesInfoContent pics={pics} />
		</Container>
	);
}
