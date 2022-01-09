import React from 'react';
import { TouchableOpacity, Share as ReactShare, Alert } from 'react-native';

import { Content, TitleInfo, Title, Info, Share } from './styles';

interface Props {
	title: string;
	info: string;
}

export function InfoContent({ title, info }: Props) {
	async function handleShareContent() {
		try {
			await ReactShare.share(
				{
					message: `${title} \n${info}`,
				},
				{
					dialogTitle: info,
				}
			);
		} catch (error) {
			alert(error.message);
		}
	}

	return (
		<Content>
			<TitleInfo>
				<Title>{title}</Title>
				<Info>{info}</Info>
			</TitleInfo>
			<TouchableOpacity onPress={handleShareContent}>
				<Share />
			</TouchableOpacity>
		</Content>
	);
}
