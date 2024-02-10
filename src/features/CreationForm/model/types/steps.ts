import { Gender } from "shared/types";

export interface FirstStepValues {
    nickname: string;
    name: string;
    surname: string;
    sex: Gender;
};

export interface SecondStepValues {
    advantages: string[];
    checkbox: string[];
    radio: number;
}

export interface ThirdStepValues {
    about: string;
}

export type FormValues = FirstStepValues & ThirdStepValues & SecondStepValues;

