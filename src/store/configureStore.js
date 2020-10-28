import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import mainSaga from './sagas/watchers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

	sagaMiddleware.run(mainSaga);

	return store;
};

export default configureStore;
