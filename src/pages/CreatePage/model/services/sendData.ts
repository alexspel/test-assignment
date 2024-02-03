import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/schema';
import axios, { AxiosInstance } from 'axios';
import { getData } from '../selectors';

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}

export const sendData = createAsyncThunk<string, void, ThunkConfig<string>>(
    'ArticlesPage/fetchArticles',
    async (_, thunkApi) => {
        const { getState, rejectWithValue } = thunkApi;
        try {
            const data = getData(getState());
            const response = await axios.post(
                'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
                data,
            );
            return response.data;
        } catch (e) {
            return rejectWithValue('e');
        }
    },
);
