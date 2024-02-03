import {
    Button, Flex, Group, Textarea,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as yup from 'yup';

export interface ThirdStepFormValues {
    about: string;
}

interface ThirdStepFormProps {
    onBack: () => void;
    onNext: (values: Partial<ThirdStepFormValues>) => void;
    data: Partial<ThirdStepFormValues>;
}

const schema = yup.object().shape({
    about: yup.string().max(200).required('about is required'),
});

function ThirdStepForm(props: ThirdStepFormProps) {
    const { onBack, onNext, data } = props;

    const form = useForm<Partial<ThirdStepFormValues>>({
        initialValues: {
            about: data?.about ?? '',
        },
        validate: yupResolver(schema),
    });

    return (
        <form className="form" onSubmit={form.onSubmit((values) => onNext?.(values))}>
            <Textarea
                id="field-about"
                label="About"
                placeholder="About"
                maxLength={200}
                rows={10}
                {...form.getInputProps('about')}
            />
            <Flex justify="flex-end">
                {form?.values?.about?.replace(/\s/gi, '').length}
            </Flex>
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
