import { Box, Button, Group, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FirstStepFormProps {
    onBack: () => void;
    onNext: () => void;
}

function FirstStepForm(props: FirstStepFormProps) {
    const { onBack, onNext } = props;

    const form = useForm({
        initialValues: {
            nickname: undefined,
            email: undefined,
        },
    });

    return (
        <form className="form" onSubmit={form.onSubmit(onNext)}>
            <TextInput label="Nickname" placeholder="Nickname" {...form.getInputProps('phone')} />
            <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
            <TextInput label="Surname" placeholder="Surname" {...form.getInputProps('surname')} />
            <Select
                label="Sex"
                placeholder="Sex"
                data={['man', 'woman']}
                {...form.getInputProps('sex')}
            />
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

export default FirstStepForm;
