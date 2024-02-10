export enum ResultMessage {
    Success = 'success',
    Error = 'error',
}

export interface CreationFormSchema {
    currentStep: number;
    allSteps: number[];
    result: ResultMessage | null;
    loading: boolean;
    showMessage: boolean;
}
