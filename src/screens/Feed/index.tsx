import React from 'react';

import { useLanguage } from '../../context/language';
import { stories } from '../../utils/stories';
import { feeds } from '../../utils/feeds';

import { Story } from '../../components/Story';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { FeedContent } from '../../components/FeedContent';

import {
	Container,
	StoriesCarousel,
	StoryRing,
	AddStory,
	CameraIcon,
	AddText,
	Content,
	Title,
	SearchSection,
} from './styles';

export function Feed() {
	const { dictionary } = useLanguage();

	return (
		<Container>
			<Header />

			<Content>
				<StoriesCarousel
					data={stories}
					keyExtractor={(item) => item.key}
					renderItem={({ item, index }) => {
						if (index === 0) {
							return (
								<AddStory>
									<StoryRing>
										<CameraIcon />
									</StoryRing>
									<AddText>{dictionary.FEED.ADD_STORY}</AddText>
								</AddStory>
							);
						}
						return (
							<Story
								name={item.name}
								viewed={item.viewed}
								picUrl={item.picUrl}
							/>
						);
					}}
				/>

				<SearchSection>
					<Title>{dictionary.FEED.SEARCH_PLACEHOLDER}</Title>
					<Input placeholder={dictionary.FEED.SEARCH_PLACEHOLDER} />
				</SearchSection>

				{feeds.map((item, index) => {
					return (
						<FeedContent
							key={index.toString()}
							title={item.title}
							info={item.info}
							name={item.name}
							pics={item.pics}
						/>
					);
				})}
			</Content>
		</Container>
	);
}
