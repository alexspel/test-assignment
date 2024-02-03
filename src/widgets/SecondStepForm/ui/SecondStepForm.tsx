/* eslint-disable react/no-array-index-key */
import {
    ActionIcon, Button, Checkbox, Flex, Group, Radio, Text, TextInput,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { IconTrashFilled } from '@tabler/icons-react';
import { useCallback } from 'react';
import * as yup from 'yup';
import cls from './SecondStepForm.module.scss';

export interface SecondStepFormValues {
    advantages: string[];
    checkbox: string[];
    radio: number;
}

interface SecondStepFormProps {
    onBack: () => void;
    onNext: (values: Partial<SecondStepFormValues>) => void;
    data: Partial<SecondStepFormValues>;
}

const schema = yup.object().shape({
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

function SecondStepForm(props: SecondStepFormProps) {
    const { onBack, onNext, data } = props;

    const form = useForm<Partial<SecondStepFormValues>>({
        initialValues: {
            advantages: data?.advantages,
            checkbox: data?.checkbox,
            radio: 0,
        },
        validate: yupResolver(schema),
    });

    const onAddAdvantage = useCallback(() => {
        form.insertListItem('advantages', '');
    }, [form]);

    const advantages = form?.values?.advantages?.map((_, index) => (
        <Group key={`a-${index}`}>
            <Flex align="flex-end" gap="md">
                <TextInput
                    id={`field-advantages-${index + 1}`}
                    label={index === 0 && 'Advantages'}
                    placeholder="Advantage"
                    style={{ flex: 1 }}
                    {...form.getInputProps(`advantages.${index}`)}
                />
                <ActionIcon
                    disabled={
                        !form?.values?.advantages || form?.values?.advantages?.length <= 1
                    }
                    variant="transparent"
                    onClick={() => form.removeListItem('advantages', index)}
                    style={{
                        marginBottom: 4,
                    }}
                >
                    <IconTrashFilled className={cls.trashIcon} />
                </ActionIcon>
            </Flex>
        </Group>
    ));

    return (
        <form className="form" onSubmit={form.onSubmit((values) => onNext?.(values))}>
            {!advantages?.length && <span style={{ fontSize: 14 }}>Advantages</span>}
            {advantages}
            <Text size="xs" variant="text" c="red">
                {form?.errors?.advantages}
            </Text>
            <Group justify="flex-start">
                <Button
                    id="button-add"
                    onClick={onAddAdvantage}
                    variant="outline"
                    className="button"
                >
                    +
                </Button>
            </Group>
            <Checkbox.Group
                label="Checkbox group"
                {...form.getInputProps('checkbox', { type: 'checkbox' })}
            >
                <Flex direction="column" gap={8}>
                    <Checkbox id="field-checkbox-group-1" value="1" label="1" />
                    <Checkbox id="field-checkbox-group-2" value="2" label="2" />
                    <Checkbox id="field-checkbox-group-3" value="3" label="3" />
                </Flex>
            </Checkbox.Group>
            <Radio.Group
                label="Radio group"
                {...form.getInputProps('radio')}
                onChange={(value) => {
                    form.setFieldValue('radio', Number(value));
                }}
            >
                <Flex direction="column" gap={8}>
                    <Radio id="field-radio-group-1" value={1} label="1" />
                    <Radio id="field-radio-group-2" value={2} label="2" />
                    <Radio id="field-radio-group-3" value={3} label="3" />
                </Flex>
            </Radio.Group>
            <Group justify="space-between">
                <Button onClick={onBack} variant="outline" className="button">
                    Назад
                </Button>
                <Button type="submit" variant="filled" className="button primary">
                    Далее
                </Button>
            </Group>
        </form>
    );
}

export default SecondStepForm;
