import React from 'react';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import theme from './src/global/styles/theme';
import { LanguageProvider } from './src/context/language';

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="dark" />
			<LanguageProvider>
				<NavigationContainer>
					<AppRoutes />
				</NavigationContainer>
			</LanguageProvider>
		</ThemeProvider>
	);
}
