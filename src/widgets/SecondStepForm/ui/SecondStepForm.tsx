import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface SecondStepFormProps {
    onBack: () => void;
    onNext: (values: Record<string, string>) => void;
}

function SecondStepForm(props: SecondStepFormProps) {
    const { onBack, onNext } = props;

    const form = useForm({
        initialValues: {
            nickname: '',
            email: '',
        },
    });

    return (
        <form
            className="form"
            onSubmit={form.onSubmit((values: Record<string, string>) => onNext?.(values))}
        >
            <TextInput
                label="Advantage"
                placeholder="Advantage"
                {...form.getInputProps('advantages')}
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

export default SecondStepForm;
