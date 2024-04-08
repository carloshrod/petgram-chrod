import React, { memo } from 'react';
import { PhotoCard } from '../PhotoCard';
import { useGetPhotos } from '../../hooks/useGetPhotos';
import { List } from './styles';

const ListOfPhotoCardsComponent = ({ categoryId }) => {
	const { data } = useGetPhotos({ categoryId });

	return (
		<List>
			{data?.photos?.map(photo => (
				<PhotoCard key={photo.id} {...photo} />
			))}
		</List>
	);
};

export const ListOfPhotoCards = memo(
	ListOfPhotoCardsComponent,
	(prevProps, props) => {
		return prevProps.categoryId === props.categoryId;
	},
);
