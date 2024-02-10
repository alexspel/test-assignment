import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sendCreationData } from "../services/sendCreationData";
import { CreationFormSchema, ResultMessage } from "../types/schema";

const initialState: CreationFormSchema = {
    allSteps: [0, 1, 2],
    currentStep: 0,
    loading: false,
    result: null,
    showMessage: false,
}

const creationFormSlice = createSlice({
    name: 'CreationForm',
    initialState,
    reducers: {
        setShowMessage: (state, action: PayloadAction<boolean>) => {
            state.showMessage = action.payload;
        },
        prevStep: (state) => {
            if(state.currentStep > 0) {
                state.currentStep -= 1;
            }
        },
        nextStep: (state) => {
            if(state.currentStep < 2) {
                state.currentStep += 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(sendCreationData.pending, (state) => {
            state.loading = true;
            state.result = null;
            state.showMessage = false;
        }).addCase(sendCreationData.fulfilled, (state) => {
            state.result = ResultMessage.Success;
            state.loading = false;
            state.showMessage = true;
        }).addCase(sendCreationData.rejected, (state) => {
            state.result = ResultMessage.Error;
            state.loading = false;
            state.showMessage = true;
        })
    }
})

export const {
    actions: creationFormActions,
    reducer: creationFormReducer,
} = creationFormSlice;
