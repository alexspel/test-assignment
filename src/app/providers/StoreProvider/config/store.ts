import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createPageReducer } from '../../../../pages/CreatePage/model/slices/CreatePageSlice';
import { StateSchema } from './schema';

export function createAppStore(initialState: StateSchema) {
    const rootReducer = combineReducers({
        creation: createPageReducer,
    });

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });

    return store;
}
