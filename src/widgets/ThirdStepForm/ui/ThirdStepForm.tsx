import { Button, Group, Text, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

export interface ThirdStepFormValues {
    about: string;
}

interface ThirdStepFormProps {
    onBack: () => void;
    onNext: (values: ThirdStepFormValues) => void;
}

function ThirdStepForm(props: ThirdStepFormProps) {
    const { onBack, onNext } = props;

    const form = useForm<ThirdStepFormValues>({
        initialValues: {
            about: '',
        },
    });

    return (
        <form className="form" onSubmit={form.onSubmit((values) => onNext?.(values))}>
            <Textarea
                id="field-about"
                label="About"
                placeholder="About"
                {...form.getInputProps('about')}
            />
            <Group justify="space-between">
                <Button onClick={onBack} variant="outline" className="button">
                    Назад
                </Button>
                <Button type="submit" variant="filled" className="button">
                    Сохранить
                </Button>
            </Group>
        </form>
    );
}

export default ThirdStepForm;
