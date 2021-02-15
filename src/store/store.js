import {combineReducers, createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {appReducer} from './reducer';
import {authReducer} from './auth/reducer';
import {audioBookReducer} from './audiobooks/reducer';
import {podcastsReducer} from './podcasts/reducer';
import {audiobookGenresReducer} from './audiobooks/genres/reducer';
import {podcastGenresReducer} from './podcasts/genres/reducer';
import {trainingGenresReducer} from './trainings/genres/reducer';


const reducers = combineReducers({
	app: appReducer,
	auth: authReducer,
	audiobooks: audioBookReducer,
	podcasts: podcastsReducer,
	audiobookGenres: audiobookGenresReducer,
	podcastGenres: podcastGenresReducer,
	trainingGenres: trainingGenresReducer,
});

let store = createStore(reducers,compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;