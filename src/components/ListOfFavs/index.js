import React from 'react';
import { FavsContainer, Grid, Image, Link } from './styles';
import { Loader } from '../Loader';
import PropTypes from 'prop-types';

export const ListOfFavs = ({ favs = [], loading }) => {
	return (
		<FavsContainer>
			<Grid>
				{loading ? (
					<Loader minHeight='300px' />
				) : favs?.length > 0 ? (
					favs.map(fav => (
						<Link key={fav.id} to={`/detail/${fav.id}`}>
							<Image src={fav.src} />
						</Link>
					))
				) : (
					<p>No tienes favoritos</p>
				)}
			</Grid>
		</FavsContainer>
	);
};

ListOfFavs.propTypes = {
	favs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			src: PropTypes.string.isRequired,
		}),
	),
};
