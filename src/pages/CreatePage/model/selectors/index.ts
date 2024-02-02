import { StateSchema } from '../../../../app/providers/StoreProvider/config/schema';
import { initialState } from '../slices/CreatePageSlice';

export const getData = (state: StateSchema) => state?.creation.creation ?? initialState.creation;
export const getStep = (state: StateSchema) => state?.creation.step ?? initialState.step;
export const getSteps = (state: StateSchema) => state?.creation.steps ?? initialState.steps;

export const getResult = (state: StateSchema) => state?.creation?.result;
export const getShowModal = (state: StateSchema) => state?.creation?.showResult || false;
