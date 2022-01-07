import React from 'react';

import { Container, StoryRing, Photo, Name } from './styles';

interface Props {
	name: string;
	picUrl: string;
	viewed: boolean;
}

export function Story({ name, viewed, picUrl }: Props) {
	function truncateString(string: string): string {
		if (string.length > 9) {
			return string.slice(0, 7) + '..';
		} else {
			return string;
		}
	}

	return (
		<Container>
			<StoryRing viewed={viewed}>
				<Photo source={{ uri: picUrl }} />
			</StoryRing>
			<Name>{truncateString(name)}</Name>
		</Container>
	);
}
