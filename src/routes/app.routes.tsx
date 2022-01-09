import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { useLanguage } from '../context/language';

import { Generic } from '../screens/Generic';
import { Profile } from '../screens/Profile';
import { FeedStackNavigator } from './stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
	const { dictionary } = useLanguage();
	const theme = useTheme();

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: theme.colors.secondary,
				tabBarInactiveTintColor: theme.colors.text,
				tabBarLabelPosition: 'below-icon',
				tabBarStyle: {
					height: 60,
					paddingTop: 10,
					paddingBottom: 10,
					backgroundColor: theme.colors.shape,
				},
			}}
		>
			<Screen
				name={dictionary.TAB.HOME}
				component={FeedStackNavigator}
				options={{
					tabBarIcon: ({ size, color, focused }) => (
						<MaterialCommunityIcons
							name={focused ? 'home' : 'home-outline'}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Screen
				name={dictionary.TAB.EXPLORE}
				component={Generic}
				options={{
					tabBarIcon: ({ size, color, focused }) => (
						<MaterialCommunityIcons
							name={focused ? 'search-web' : 'magnify'}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Screen
				name={dictionary.TAB.CHECKIN}
				component={Generic}
				options={{
					tabBarIcon: ({ size, color, focused }) => (
						<MaterialCommunityIcons
							name={focused ? 'map-marker' : 'map-marker-outline'}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Screen
				name={dictionary.TAB.NOTIFICATION}
				component={Generic}
				options={{
					tabBarIcon: ({ size, color, focused }) => (
						<MaterialCommunityIcons
							name={focused ? 'bell' : 'bell-outline'}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Screen
				name={dictionary.TAB.ACCOUNT}
				component={Profile}
				options={{
					tabBarIcon: ({ size, color, focused }) => (
						<MaterialCommunityIcons
							name={focused ? 'account' : 'account-outline'}
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Navigator>
	);
}
