import { AxiosInstance } from 'axios';
import { CreationFormSchema } from 'features/CreationForm/model/types/schema';

export interface StateSchema {
    creationForm: CreationFormSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
