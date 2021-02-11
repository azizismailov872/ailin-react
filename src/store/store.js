import {combineReducers, createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {appReducer} from './reducer';
import {authReducer} from './auth/reducer';
import {audiobookGenresReducer} from './audiobooks/genres/reducer';
import {podcastGenresReducer} from './podcasts/genres/reducer';
import {trainingGenresReducer} from './trainings/genres/reducer';


const reducers = combineReducers({
	app: appReducer,
	auth: authReducer,
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