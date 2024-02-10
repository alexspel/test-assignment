/* eslint-disable react/no-array-index-key */
import { ActionIcon, Button, Checkbox, Flex, Group, Radio, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconTrashFilled } from '@tabler/icons-react';
import { FC, useCallback } from 'react';
import { FormValues } from '../../model/types/steps';
import styles from './SecondStep.module.scss';

interface Props {
    onBack?: () => void;
    onNext?: () => void;
    form: ReturnType<typeof useForm<FormValues>>;
}

export const SecondStep: FC<Props> = ({ onBack, onNext, form }) => {
    const advantageDeletingDisabled = (form.values?.advantages ?? []).length <= 1;
    const onAddAdvantage = useCallback(() => {
        form.insertListItem('advantages', '');
    }, [form]);

    return (
        <>
            {!form?.values?.advantages?.length && <span style={{ fontSize: 14 }}>Advantages</span>}
            {form?.values?.advantages?.map((_: any, index: number) => (
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
                            disabled={advantageDeletingDisabled}
                            variant="transparent"
                            onClick={() => form.removeListItem('advantages', index)}
                            style={{
                                marginBottom: 4,
                            }}
                        >
                            <IconTrashFilled className={styles.trashIcon} />
                        </ActionIcon>
                    </Flex>
                </Group>
            ))}
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
                value={form.values?.checkbox}
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
                <Button onClick={onBack} variant="outline">
                    Назад
                </Button>
                <Button variant="filled" onClick={onNext}>
                    Далее
                </Button>
            </Group>
        </>
    );
};
