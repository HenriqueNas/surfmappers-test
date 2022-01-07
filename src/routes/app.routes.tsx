import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { Generic } from '../screens/Generic';
import { Feed } from '../screens/Feed';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
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
				name="Feed"
				component={Feed}
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
				name="Explorar"
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
				name="Checkin"
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
				name="Notificação"
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
				name="Perfil"
				component={Generic}
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
