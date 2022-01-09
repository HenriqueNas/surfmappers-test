import React from 'react';
import { Alert } from 'react-native';

import { useLanguage } from '../../../../context/language';

import {
	Content,
	AmountPics,
	PicFilter,
	FilterIcon,
	FilterText,
	ArrowDownIcon,
	FilterIconCircle,
} from './styles';

interface Props {
	pics: string[];
}

export function PicturesInfoContent({ pics }: Props) {
	const { dictionary } = useLanguage();

	function handleOpenModal() {
		Alert.alert(dictionary.ALBUM.NO_SURFER_AVALIABLE);
	}

	return (
		<Content>
			<AmountPics>{pics.length} fotos</AmountPics>
			<PicFilter onPress={handleOpenModal}>
				<FilterIconCircle>
					<FilterIcon />
				</FilterIconCircle>
				<FilterText>{dictionary.ALBUM.FILTER_BY_SURFER}</FilterText>
				<ArrowDownIcon />
			</PicFilter>
		</Content>
	);
}
