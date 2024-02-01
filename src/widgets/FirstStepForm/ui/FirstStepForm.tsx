import { Box, Button, Group, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../app/providers/AppRouter/config';

function FirstStepForm() {
    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            nickname: undefined,
            email: undefined,
        },
    });
    return (
        <Box maw="50%">
            <form
                className="form"
                onSubmit={form.onSubmit(() => {
                    navigate(RoutePath.step2);
                })}
            >
                <TextInput
                    label="Nickname"
                    placeholder="Nickname"
                    {...form.getInputProps('phone')}
                />
                <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
                <TextInput
                    label="Surname"
                    placeholder="Surname"
                    {...form.getInputProps('surname')}
                />
                <Select
                    label="Sex"
                    placeholder="Sex"
                    data={['man', 'woman']}
                    {...form.getInputProps('sex')}
                />
                <Group justify="space-between">
                    <Button
                        onClick={() => {
                            navigate(RoutePath.main);
                        }}
                        variant="outline"
                        className="button"
                    >
                        Назад
                    </Button>
                    <Button type="submit" variant="filled" className="button">
                        Далее
                    </Button>
                </Group>
            </form>
        </Box>
    );
}

export default FirstStepForm;
