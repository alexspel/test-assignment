import { FirstStepFormValues } from '../../../../widgets/FirstStepForm/ui/FirstStepForm';
import { SecondStepFormValues } from '../../../../widgets/SecondStepForm/ui/SecondStepForm';
import { ThirdStepFormValues } from '../../../../widgets/ThirdStepForm/ui/ThirdStepForm';

export type FormValues = FirstStepFormValues | SecondStepFormValues | ThirdStepFormValues;
export type CombinedFormValues = Partial<
    FirstStepFormValues & SecondStepFormValues & ThirdStepFormValues
>;
export type FormStep = 'step1' | 'step2' | 'step3';
