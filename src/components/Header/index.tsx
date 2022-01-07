import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, SurfMappers, IconContent, Icon } from './styles';

export function Header() {
	return (
		<Container>
			<SurfMappers
				source={{
					uri: 'https://surfmappers.com/static/images/surfmappers_logo_ss.png',
				}}
			/>
			<IconContent>
				<TouchableOpacity>
					<Icon name="cart-outline" />
				</TouchableOpacity>
				<TouchableOpacity>
					<Icon name="forum-outline" />
				</TouchableOpacity>
			</IconContent>
		</Container>
	);
}
