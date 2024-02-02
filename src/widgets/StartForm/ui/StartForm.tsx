import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../app/providers/AppRouter/config';

const StartForm = () => {
    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            phone: undefined,
            email: undefined,
        },
    });

    return (
        <form
            className="form"
            onSubmit={form.onSubmit(() => {
                navigate(RoutePath.create);
            })}
        >
            <TextInput
                label="Номер телефона"
                placeholder="+7 999 999-99-99"
                {...form.getInputProps('phone')}
            />
            <TextInput
                label="Email"
                placeholder="tim.jennings@example.com"
                {...form.getInputProps('email')}
            />
            <Group justify="flex-start">
                <Button type="submit" className="button">
                    Начать
                </Button>
            </Group>
        </form>
    );
};

export default StartForm;
