import ptBR from './pt-BR';
import enUS from './en-US';
import frFR from './fr-FR';

interface DictionaryProps {
	[key: string]: typeof ptBR | typeof enUS | typeof frFR;
}

export const options: DictionaryProps = {
	'pt-BR': ptBR,
	'en-US': enUS,
	'fr-FR': frFR,
};
