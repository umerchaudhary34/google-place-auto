import {applyMiddleware, combineReducers, createStore} from 'redux';
import locationReducers from './locationReducers';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
  targetedData: locationReducers,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;
