import { Button, Combobox, Group, TextInput, useCombobox } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconChevronDown } from '@tabler/icons-react';

export type FirstStepFormValues = {
    nickname: string;
    name: string;
    surname: string;
    sex: string;
};

interface FirstStepFormProps {
    data: FirstStepFormValues;
    onBack: () => void;
    onNext: (values: FirstStepFormValues) => void;
}

function FirstStepForm(props: FirstStepFormProps) {
    const { data, onBack, onNext } = props;

    const form = useForm<FirstStepFormValues>({
        initialValues: data,
    });
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const options = ['man', 'woman'].map((item) => (
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
        <form className="form" onSubmit={form.onSubmit((values) => onNext(values))}>
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
                    form.setValues({ sex: value });
                    combobox.toggleDropdown();
                }}
            >
                <Combobox.DropdownTarget>
                    <div onClick={() => combobox.toggleDropdown()}>
                        <TextInput
                            pointer
                            readOnly
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
                <Button id="button-back" onClick={onBack} variant="outline" className="button">
                    Назад
                </Button>
                <Button id="button-next" type="submit" variant="filled" className="button">
                    Далее
                </Button>
            </Group>
        </form>
    );
}

export default FirstStepForm;
