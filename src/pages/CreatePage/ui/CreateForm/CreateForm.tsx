import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../app/providers/AppRouter/config';
import { FirstStepForm } from '../../../../widgets/FirstStepForm';
import { SecondStepForm } from '../../../../widgets/SecondStepForm';
import { FirstStepFormValues } from '../../../../widgets/FirstStepForm/ui/FirstStepForm';
import { SecondStepFormValues } from '../../../../widgets/SecondStepForm/ui/SecondStepForm';
import { ThirdStepForm } from '../../../../widgets/ThirdStepForm';
import { ThirdStepFormValues } from '../../../../widgets/ThirdStepForm/ui/ThirdStepForm';

enum Steps {
    Step1 = 'step1',
    Step2 = 'step2',
    Step3 = 'step3',
}

type FormValues = FirstStepFormValues | SecondStepFormValues | ThirdStepFormValues;

function CreateForm() {
    const navigate = useNavigate();
    const [step, setStep] = useState<Steps>(Steps.Step1);
    const [data, setData] = useState({});

    const updateData = useCallback(
        (values: FormValues) => {
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
        (values: FormValues) => {
            updateData(values);
            switch (step) {
                case Steps.Step1:
                    setStep(Steps.Step2);
                    break;
                case Steps.Step2:
                    setStep(Steps.Step3);
                    break;
                case Steps.Step3:
                    setStep(Steps.Step1);
                    break;
            }
        },
        [step, updateData],
    );

    const form = useMemo(() => {
        switch (step) {
            case Steps.Step1:
                return (
                    <FirstStepForm
                        data={data as FirstStepFormValues}
                        onBack={onBack}
                        onNext={onNext}
                    />
                );
            case Steps.Step2:
                return <SecondStepForm onBack={onBack} onNext={onNext} />;
            case Steps.Step3:
                return <ThirdStepForm onBack={onBack} onNext={onNext} />;
        }
    }, [step, onNext, onBack]);

    return <>{form}</>;
}

export default CreateForm;
