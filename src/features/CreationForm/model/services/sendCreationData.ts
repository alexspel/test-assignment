import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/schema';
import { ResultMessage } from '../types/schema';
import { FormValues } from '../types/steps';


export const sendCreationData = createAsyncThunk<unknown, FormValues, ThunkConfig<ResultMessage>>(
    'features/CreationForm/sendCreationData',
    async (data, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        try {
            const response = await extra.api.post('/content/v1/bootcamp/frontend', data);
            return response.data;
        } catch {
            return rejectWithValue(ResultMessage.Error);
        }
    },
);
