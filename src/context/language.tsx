import React, { createContext, useContext, useState } from 'react';
import { options } from '../global/languages';
import Language from '../global/languages/language-interface';

interface Context {
	language: AvailableLanguages;
	setLanguage: (value: AvailableLanguages) => void;
	dictionary: Language;
}
export const LanguageContext = createContext<Context>({} as Context);
export type AvailableLanguages = 'pt-BR' | 'en-US' | 'fr-FR';

export const LanguageProvider: React.FC = ({ children }) => {
	const [language, setLanguage] = useState<AvailableLanguages>('pt-BR');

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
				dictionary: options[language] as Language,
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
};
export const useLanguage = () => useContext(LanguageContext);
