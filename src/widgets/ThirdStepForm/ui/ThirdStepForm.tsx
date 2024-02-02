import { Button, Group, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

export interface ThirdStepFormValues {
    about: string;
}

interface ThirdStepFormProps {
    onBack: () => void;
    onNext: (values: Partial<ThirdStepFormValues>) => void;
    data: Partial<ThirdStepFormValues>;
}

function ThirdStepForm(props: ThirdStepFormProps) {
    const { onBack, onNext, data } = props;

    const form = useForm<Partial<ThirdStepFormValues>>({
        initialValues: data,
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
                <Button type="submit" variant="filled" className="button primary">
                    Сохранить
                </Button>
            </Group>
        </form>
    );
}

export default ThirdStepForm;
