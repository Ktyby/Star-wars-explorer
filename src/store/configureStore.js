import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import { mainSaga } from './sagas/watchers';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware)),
	);

	sagaMiddleware.run(mainSaga);

	return store;
}

export default configureStore;