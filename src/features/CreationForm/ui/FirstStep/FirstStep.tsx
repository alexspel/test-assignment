import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC } from 'react';
import { CustomSelect } from 'shared/CustomSelect/CustomSelect';
import { Gender } from 'shared/types';
import { FormValues } from '../../model/types/steps';

interface Props {
    onBack?: () => void;
    onNext?: () => void;
    form: ReturnType<typeof useForm<FormValues>>;
}

export const FirstStep: FC<Props> = ({ onBack, onNext, form }) => {
    const genderValues = [Gender.Man, Gender.Woman];
    return (
        <>
            <TextInput
                id="field-nickname"
                label="Nickname"
                placeholder="Nickname"
                {...form.getInputProps('nickname')}
            />
            <TextInput
                id="field-name"
                label="Name"
                placeholder="Name"
                {...form.getInputProps('name')}
            />
            <TextInput
                id="field-surname"
                label="Surname"
                placeholder="Surname"
                {...form.getInputProps('surname')}
            />
            <CustomSelect
                id="field-sex"
                label="Sex"
                values={genderValues}
                {...form.getInputProps('sex')}
            />
            <Group justify="space-between">
                {onBack && (
                    <Button id="button-next" variant="outline" onClick={onBack}>
                        Назад
                    </Button>
                )}
                {onNext && (
                    <Button id="button-next" variant="filled" onClick={onNext}>
                        Далее
                    </Button>
                )}
            </Group>
        </>
    );
};
