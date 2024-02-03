import { Button, Group, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { RoutePath } from '../../../app/providers/AppRouter/config';
import { formatPhone } from '../lib';

export type StartFormValues = {
    phone: string;
    email: string;
};

const schema = yup.object().shape({
    phone: yup.string().required().length(18)
        .test(
            'Phone format',
            'Wrong phone format',
            (value: string) => {
                const regex = /^\+7 \(9[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/gm;
                return regex.test(value);
            },
        ),
    email: yup.string().email().required(),
});

const StartForm = () => {
    const navigate = useNavigate();

    const form = useForm<StartFormValues>({
        initialValues: {
            phone: '',
            email: '',
        },
        validate: yupResolver(schema),
    });

    return (
        <form
            className="form"
            onSubmit={form.onSubmit(() => {
                navigate(RoutePath.create);
            })}
        >
            <TextInput
                {...form.getInputProps('phone')}
                label="Номер телефона"
                placeholder="+7 999 999-99-99"
                onKeyDown={(e) => {
                    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
                        const val = form?.values?.phone ?? '';
                        const formatted = formatPhone(val, e.key);
                        form.setFieldValue('phone', formatted);
                        e.preventDefault();
                    }
                    if (!['Backspace', 'Delete'].includes(e.key)) {
                        e.preventDefault();
                    }
                }}
            />
            <TextInput
                label="Email"
                placeholder="tim.jennings@example.com"
                {...form.getInputProps('email')}
            />
            <Group justify="flex-start">
                <Button type="submit" className="button primary">
                    Начать
                </Button>
            </Group>
        </form>
    );
};

export default StartForm;
