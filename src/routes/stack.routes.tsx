import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Feed } from '../screens/Feed';
import { Album } from '../screens/Album';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function FeedStackNavigator() {
	return (
		<Navigator
			initialRouteName="Feed"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="Feed" component={Feed} />
			<Screen name="Album" component={Album} />
		</Navigator>
	);
}

export type RootStackParamList = {
	Feed: undefined;
	Album: {
		title: string;
		info: {
			'pt-BR': string;
			'en-US': string;
			'fr-FR': string;
		};
		name: string;
		pics: string[];
	};
};
