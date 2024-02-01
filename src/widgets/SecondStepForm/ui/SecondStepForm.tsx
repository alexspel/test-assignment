import { Box, Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../app/providers/AppRouter/config';

function SecondStepForm() {
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
                    navigate(RoutePath.main);
                })}
            >
                <TextInput
                    label="Advantage"
                    placeholder="Advantage"
                    {...form.getInputProps('advantages')}
                />
                <Group justify="space-between">
                    <Button
                        onClick={() => {
                            navigate(RoutePath.step1);
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

export default SecondStepForm;
