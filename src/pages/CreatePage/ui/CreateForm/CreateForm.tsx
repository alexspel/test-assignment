import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../app/providers/AppRouter/config';
import { FirstStepForm } from '../../../../widgets/FirstStepForm';
import { SecondStepForm } from '../../../../widgets/SecondStepForm';
import { FirstStepFormValues } from '../../../../widgets/FirstStepForm/ui/FirstStepForm';
import { SecondStepFormValues } from '../../../../widgets/SecondStepForm/ui/SecondStepForm';
import { ThirdStepForm } from '../../../../widgets/ThirdStepForm';
import { ThirdStepFormValues } from '../../../../widgets/ThirdStepForm/ui/ThirdStepForm';
import { Button, Flex } from '@mantine/core';
import { Modal } from '../../../../widgets/Modal';

enum Steps {
    Step1 = 'step1',
    Step2 = 'step2',
    Step3 = 'step3',
    Finish = 'finish',
}

type FormValues = FirstStepFormValues | SecondStepFormValues | ThirdStepFormValues;
type AllValues = Partial<FirstStepFormValues & SecondStepFormValues & ThirdStepFormValues>;

function CreateForm() {
    const navigate = useNavigate();
    const [step, setStep] = useState<Steps>(Steps.Step1);
    const [data, setData] = useState<AllValues>({});
    const [openModal, setOpenModal] = useState<boolean>(true);
    const updateData = useCallback(
        (values: Partial<FormValues>) => {
            setData((prev) => ({
                ...prev,
                ...values,
            }));
        },
        [setData],
    );

    const onBack = useCallback(() => {
        // updateData(values);
        switch (step) {
            case Steps.Step1:
                navigate(RoutePath.main);
                break;
            case Steps.Step2:
                setStep(Steps.Step1);
                break;
            case Steps.Step3:
                setStep(Steps.Step2);
                break;
        }
    }, [step, navigate]);

    const onNext = useCallback(
        (values: Partial<FormValues>) => {
            updateData(values);
            switch (step) {
                case Steps.Step1:
                    setStep(Steps.Step2);
                    break;
                case Steps.Step2:
                    setStep(Steps.Step3);
                    break;
                case Steps.Step3:
                    setStep(Steps.Finish);
                    break;
            }
        },
        [step, updateData],
    );

    const stepForm = useMemo(() => {
        switch (step) {
            case Steps.Step1:
                return (
                    <FirstStepForm
                        onBack={onBack}
                        onNext={onNext}
                        data={{
                            nickname: data?.nickname,
                            name: data?.name,
                            surname: data?.surname,
                            sex: data?.sex,
                        }}
                    />
                );
            case Steps.Step2:
                return (
                    <SecondStepForm
                        onBack={onBack}
                        onNext={onNext}
                        data={{
                            advantages: data?.advantages,
                            checkbox: data?.checkbox,
                            radio: data?.radio,
                        }}
                    />
                );
            case Steps.Step3:
                return (
                    <ThirdStepForm
                        onBack={onBack}
                        onNext={onNext}
                        data={{
                            about: data?.about,
                        }}
                    />
                );
            default:
                return null;
        }
    }, [step, onNext, onBack]);

    return (
        <>
            {stepForm}
            <Modal
                open={openModal}
                onClose={() => {
                    setOpenModal(false);
                }}
            >
                <div>Привет</div>
                <Flex align="center" justify="flex-end">
                    <Button
                        variant="filled"
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        Закрыть
                    </Button>
                </Flex>
            </Modal>
            <Button
                variant="filled"
                onClick={() => {
                    setOpenModal(true);
                }}
            >
                open
            </Button>
        </>
    );
}

export default CreateForm;
