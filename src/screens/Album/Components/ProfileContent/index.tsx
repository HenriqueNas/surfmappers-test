import React, { useState } from 'react';

import { useLanguage } from '../../../../context/language';

import {
	Content,
	Div,
	CameraIcon,
	Name,
	ChatIcon,
	FollowButton,
	FollowText,
} from './styles';

interface Props {
	name: string;
}

export function ProfileContent({ name }: Props) {
	const { dictionary } = useLanguage();
	const [isFollowing, setIsFollowing] = useState(true);

	function handleSetFollow() {
		setIsFollowing(!isFollowing);
	}

	return (
		<Content>
			<Div>
				<CameraIcon />
				<Name>{name}</Name>
			</Div>

			<Div>
				<ChatIcon />
				<FollowButton onPress={handleSetFollow}>
					<FollowText>
						{isFollowing ? dictionary.ALBUM.FOLLOWING : dictionary.ALBUM.FOLLOW}
					</FollowText>
				</FollowButton>
			</Div>
		</Content>
	);
}
