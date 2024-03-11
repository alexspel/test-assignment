import { Button, Flex, Group, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { RoutePath } from 'app/providers/AppRouter/config';
import { KeyboardEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { formatPhone } from '../lib';

export type LoginFormValues = {
    phone: string;
    email: string;
};

const schema = yup.object().shape({
    phone: yup
        .string()
        .required()
        .length(18)
        .test('Phone format', 'Wrong phone format', (value: string) => {
            const regex = /^\+7 \(9[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/gm;
            return regex.test(value);
        }),
    email: yup.string().email().required(),
});

const LoginForm = () => {
    const navigate = useNavigate();

    const form = useForm<LoginFormValues>({
        initialValues: {
            phone: '',
            email: '',
        },
        validate: yupResolver(schema),
    });

    const handlePhoneInput = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
                const val = form?.values?.phone ?? '';
                const formatted = formatPhone(val, e.key);
                form.setFieldValue('phone', formatted);
                e.preventDefault();
            }
        },
        [form],
    );

    return (
        <form
            className="form"
            onSubmit={form.onSubmit(() => {
                navigate(RoutePath.create);
            })}
        >
            <Flex align="flex-start" direction="column" gap="xs">
                <TextInput
                    {...form.getInputProps('phone')}
                    label="Номер телефона"
                    placeholder="+7 999 999-99-99"
                    onKeyDown={handlePhoneInput}
                />
                <TextInput
                    label="Email"
                    placeholder="tim.jennings@example.com"
                    {...form.getInputProps('email')}
                />
                <Group justify="flex-start">
                    <Button type="submit">Начать</Button>
                </Group>
            </Flex>
        </form>
    );
};

export default LoginForm;
