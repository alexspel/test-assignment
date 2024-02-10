import { Button, Flex, Group, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FormValues } from 'features/CreationForm/model/types/steps';
import { FC } from 'react';

interface Props {
    onBack?: () => void;
    onNext?: () => void;
    form: ReturnType<typeof useForm<FormValues>>;
}

export const ThirdStep: FC<Props> = ({ onBack, onNext, form }) => (
    <>
        <Textarea
            id="field-about"
            label="About"
            placeholder="About"
            maxLength={200}
            rows={10}
            {...form.getInputProps('about')}
        />
        <Flex justify="flex-end">{form.values?.about?.replace(/\s/gi, '').length}</Flex>
        <Group justify="space-between">
            <Button onClick={onBack} variant="outline">
                Назад
            </Button>
            <Button variant="filled" onClick={onNext}>
                Сохранить
            </Button>
        </Group>
    </>
);
