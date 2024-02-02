import { CombinedFormValues, FormStep } from './FormValues';

export type CreationResult = 'success' | 'error';

export interface CreatePageSchema {
    creation: CombinedFormValues;
    step: FormStep;
    steps: FormStep[];
    showResult: boolean;
    result?: CreationResult;
}
