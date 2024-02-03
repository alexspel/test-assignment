import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreatePageSchema, CreationResult } from '../types/CreatePageSchema';
import { CombinedFormValues, FormStep } from '../types/FormValues';

export const initialState: CreatePageSchema = {
    creation: {
        nickname: '',
        name: '',
        surname: '',
        about: '',
        checkbox: [],
        advantages: [],
        radio: 0,
        sex: undefined,
    },
    step: 'step1',
    steps: ['step1', 'step2', 'step3'],
    showResult: false,
    result: undefined,
};

const createPageSlice = createSlice({
    initialState,
    name: 'CreatePage',
    reducers: {
        updateData(state, action: PayloadAction<CombinedFormValues>) {
            state.creation = { ...state.creation, ...action.payload };
        },
        setStep(state, action: PayloadAction<FormStep>) {
            state.step = action.payload;
        },
        setResult(state, action: PayloadAction<CreationResult>) {
            state.result = action.payload;
        },
        setShowResult(state, action: PayloadAction<boolean>) {
            state.showResult = action.payload;
        },
        resetCreation(state) {
            state.step = 'step1';
            state.result = undefined;
            state.showResult = false;
            state.creation = JSON.parse(JSON.stringify(initialState.creation));
        },
    },
});

export const { actions: createPageActions, reducer: createPageReducer } = createPageSlice;
