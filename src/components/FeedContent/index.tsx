import React, { useState } from 'react';

import {
	Container,
	Title,
	Info,
	Carousel,
	Image,
	Div,
	Love,
	Share,
	CameraIcon,
	Name,
	Dot,
} from './styles';

interface Props {
	title: string;
	info: string;
	pics: string[];
	name: string;
}

export function FeedContent({ title, info, pics, name }: Props) {
	return (
		<Container>
			<Title>{title}</Title>
			<Info>{info}</Info>
			<Carousel>
				{pics.map((item, index) => {
					return <Image key={index.toString()} source={{ uri: item }} />;
				})}
			</Carousel>
			<Div>
				<Div>
					<Love />
					<Share />
				</Div>

				<Div>
					{pics.map((_, index) => {
						return <Dot key={index.toString()} active={index === 1} />;
					})}
				</Div>

				<Div>
					<CameraIcon />
					<Name>{name}</Name>
				</Div>
			</Div>
		</Container>
	);
}
