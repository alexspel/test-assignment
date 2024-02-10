import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { creationFormReducer } from 'features/CreationForm/model/slices/creationFormSlice';
import { api } from 'shared/api';
import { StateSchema, ThunkExtraArg } from './schema';

export function createAppStore(initialState: StateSchema) {
    const rootReducer = combineReducers({
        creationForm: creationFormReducer,
    });

    const extraArg: ThunkExtraArg = {
        api,
    };

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    return store;
}
