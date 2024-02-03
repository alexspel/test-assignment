import { Button, Combobox, Group, TextInput, useCombobox } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { IconChevronDown } from '@tabler/icons-react';
import * as yup from 'yup';

export enum Gender {
    Man = 'man',
    Woman = 'woman',
}
export type FirstStepFormValues = {
    nickname: string;
    name: string;
    surname: string;
    sex: Gender;
};

interface FirstStepFormProps {
    onBack?: () => void;
    onNext?: (values: Partial<FirstStepFormValues>) => void;
    data: Partial<FirstStepFormValues>;
}

const schema = yup.object().shape({
    nickname: yup
        .string()
        .min(1)
        .max(39)
        .required('nickname is required')
        .matches(/^([A-Za-z0-9]*)$/gi, 'nickname can only contain latin letters and digits.'),
    name: yup
        .string()
        .min(1)
        .max(39)
        .required('name is required')
        .matches(/^([A-Za-z]*)$/gi, 'name can only contain latin letters.'),
    surname: yup
        .string()
        .min(1)
        .max(39)
        .required('surname is required')
        .matches(/^([A-Za-z]*)$/gi, 'surname can only contain latin letters.'),
    sex: yup.string().oneOf([Gender.Man, Gender.Woman]).required(),
});

function FirstStepForm(props: FirstStepFormProps) {
    const { onBack, onNext, data } = props;

    const form = useForm<Partial<FirstStepFormValues>>({
        initialValues: {
            nickname: data?.nickname ?? '',
            name: data?.name ?? '',
            surname: data?.surname ?? '',
            sex: data?.sex,
        },
        validate: yupResolver(schema),
    });

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const options = [Gender.Man, Gender.Woman].map((item) => (
        <Combobox.Option
            key={`field-sex-option-${item}`}
            id={`field-sex-option-${item}`}
            value={item}
            active={true}
        >
            <span>{item}</span>
        </Combobox.Option>
    ));

    return (
        <form className="form" onSubmit={form.onSubmit((values) => onNext?.(values))}>
            <TextInput
                id="field-nickname"
                label="Nickname"
                placeholder="Nickname"
                {...form.getInputProps('nickname')}
            />
            <TextInput
                id="field-name"
                label="Name"
                placeholder="Name"
                {...form.getInputProps('name')}
            />
            <TextInput
                id="field-surname"
                label="Surname"
                placeholder="Surname"
                {...form.getInputProps('surname')}
            />
            <Combobox
                store={combobox}
                onOptionSubmit={(value: string) => {
                    form.setValues({ sex: value as Gender });
                    combobox.toggleDropdown();
                }}
            >
                <Combobox.DropdownTarget>
                    <div onClick={() => combobox.toggleDropdown()}>
                        <TextInput
                            pointer
                            readOnly
                            label="Sex"
                            placeholder="Sex"
                            rightSection={<IconChevronDown cursor="pointer" />}
                            {...form.getInputProps('sex')}
                        />
                    </div>
                </Combobox.DropdownTarget>
                <Combobox.Dropdown>
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
            <Group justify="space-between">
                <Button
                    id="button-back"
                    onClick={() => onBack?.()}
                    variant="outline"
                    className="button"
                >
                    Назад
                </Button>
                <Button id="button-next" type="submit" variant="filled" className="button primary">
                    Далее
                </Button>
            </Group>
        </form>
    );
}

export default FirstStepForm;
