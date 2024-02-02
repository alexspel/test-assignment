import { ActionIcon, Button, Checkbox, Flex, Group, Radio, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconTrashFilled } from '@tabler/icons-react';
import { useCallback } from 'react';
import cls from './SecondStepForm.module.scss';

export interface SecondStepFormValues {
    advantages: string[];
    checkbox: string[];
    radio: string;
}

interface SecondStepFormProps {
    onBack: () => void;
    onNext: (values: SecondStepFormValues) => void;
}

function SecondStepForm(props: SecondStepFormProps) {
    const { onBack, onNext } = props;

    const form = useForm<SecondStepFormValues>({
        initialValues: {
            advantages: [''],
            checkbox: [],
            radio: '',
        },
    });

    const onAddAdvantage = useCallback(() => {
        form.insertListItem('advantages', '');
    }, [form]);

    const advantages = form.values.advantages.map((_, index) => (
        <Group key={index}>
            <TextInput
                id={`field-advantages-${index + 1}`}
                placeholder="Advantage"
                {...form.getInputProps(`advantages.${index}`)}
            />
            <ActionIcon
                disabled={form.values.advantages.length <= 1}
                variant="transparent"
                onClick={() => form.removeListItem(`advantages`, index)}
            >
                <IconTrashFilled className={cls.trashIcon} />
            </ActionIcon>
        </Group>
    ));

    return (
        <form className="form" onSubmit={form.onSubmit((values) => onNext?.(values))}>
            {advantages}
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
            <Checkbox.Group label="Checkbox group" {...form.getInputProps('checkbox')}>
                <Group>
                    <Flex direction="column" gap={8}>
                        <Checkbox id="field-checkbox-group-1" value="1" label="1" />
                        <Checkbox id="field-checkbox-group-2" value="2" label="2" />
                        <Checkbox id="field-checkbox-group-3" value="3" label="3" />
                    </Flex>
                </Group>
            </Checkbox.Group>
            <Radio.Group label="Checkbox group" {...form.getInputProps('radio')}>
                <Group>
                    <Flex direction="column" gap={8}>
                        <Radio id="field-radio-group-1" value="1" label="1" />
                        <Radio id="field-radio-group-2" value="2" label="2" />
                        <Radio id="field-radio-group-3" value="3" label="3" />
                    </Flex>
                </Group>
            </Radio.Group>
            <Group justify="space-between">
                <Button onClick={onBack} variant="outline" className="button">
                    Назад
                </Button>
                <Button type="submit" variant="filled" className="button">
                    Далее
                </Button>
            </Group>
        </form>
    );
}

export default SecondStepForm;
