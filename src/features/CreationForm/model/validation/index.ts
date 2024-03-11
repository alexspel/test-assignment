import { Gender } from 'shared/types';
import * as yup from 'yup';

export const firstStepSchema = yup.object().shape({
    nickname: yup
        .string()
        .min(1)
        .max(39)
        .required('nickname is required')
        .matches(/^([A-Za-z0-9]*)$/gi, 'nickname can only contain latin letters and digits.'),
    name: yup
        .string()
        .min(1)
        .max(39)
        .required('name is required')
        .matches(/^([A-Za-z]*)$/gi, 'name can only contain latin letters.'),
    surname: yup
        .string()
        .min(1)
        .max(39)
        .required('surname is required')
        .matches(/^([A-Za-z]*)$/gi, 'surname can only contain latin letters.'),
    sex: yup.string().oneOf([Gender.Man, Gender.Woman]).required(),
});

export const secondStepSchema = yup.object().shape({
    advantages: yup
        .array()
        .min(1, 'at least 1')
        .required('advantages is required')
        .test(
            'Not empty',
            'advantage(s) can`t be empty',
            (item: string[]) => item.filter((x) => x.trim() === '').length === 0,
        ),
    checkbox: yup.array().min(1, 'at least 1').required('checkbox group is required'),
    radio: yup.number().required('Radio group is required'),
});

export const thirdStepSchema = yup.object().shape({
    about: yup.string().max(200).required('about is required'),
});