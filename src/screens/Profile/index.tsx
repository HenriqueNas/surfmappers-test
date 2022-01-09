import React from 'react';

import { AvailableLanguages, useLanguage } from '../../context/language';

import { RadioButton } from '../../components/RadioButton';

import { Container } from './styles';

export function Profile() {
	const { setLanguage, language } = useLanguage();

	function handleSetLanguage(language: AvailableLanguages) {
		setLanguage(language);
	}

	return (
		<Container>
			<RadioButton
				title="Portugês"
				isActive={language === 'pt-BR'}
				onPress={() => handleSetLanguage('pt-BR')}
			/>

			<RadioButton
				title="English"
				isActive={language === 'en-US'}
				onPress={() => handleSetLanguage('en-US')}
			/>

			<RadioButton
				title="Français"
				isActive={language === 'fr-FR'}
				onPress={() => handleSetLanguage('fr-FR')}
			/>
		</Container>
	);
}
