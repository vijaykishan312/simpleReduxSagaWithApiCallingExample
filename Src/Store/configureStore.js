import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../Redux/reducer';
import rootSaga from '../Redux/saga/rootSaga';
import { sessionService } from 'redux-react-native-session';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const store = createStore(rootReducer, {}, compose(applyMiddleware(
        // logger,
        sagaMiddleware,
    ),...enhancers));
    // RUN SAGA
    sagaMiddleware.run(rootSaga);
    //INTI SESSION SERVICE
    sessionService.initSessionService(store);
    return store;
}
