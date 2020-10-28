import { LOAD_PLANETS_TILES_DATA } from '../../constants';

const loadPlanetsTilesData = (url) => ({
	type: LOAD_PLANETS_TILES_DATA,
	url,
});

export default loadPlanetsTilesData;
