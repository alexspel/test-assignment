import { StateSchema } from "app/providers/StoreProvider/config/schema";


export const getCurrentStep = (state: StateSchema) => state.creationForm.currentStep;
export const getAllSteps = (state: StateSchema) => state.creationForm.allSteps;
export const getCreationResult = (state: StateSchema) => state.creationForm.result;
export const getShowMessage = (state: StateSchema) => state.creationForm.showMessage;
// export const getFormData = (state: StateSchema) => state.creationForm.formData;
