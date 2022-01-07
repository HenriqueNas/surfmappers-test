import ptBR from './pt-BR';
import enUS from './en-US';

interface DictionaryProps {
	[key: string]: typeof ptBR | typeof enUS;
}

export const options: DictionaryProps = { 'pt-BR': ptBR, 'en-US': enUS };
