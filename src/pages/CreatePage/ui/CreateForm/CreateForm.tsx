import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../app/providers/AppRouter/config';
import { FirstStepForm } from '../../../../widgets/FirstStepForm';
import { SecondStepForm } from '../../../../widgets/SecondStepForm';

enum Steps {
    Step1 = 'step1',
    Step2 = 'step2',
    Step3 = 'step3',
}

function CreateForm() {
    const navigate = useNavigate();
    const [step, setStep] = useState<Steps>(Steps.Step1);

    const onBack = useCallback(() => {
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

    const onNext = useCallback(() => {
        switch (step) {
            case Steps.Step1:
                setStep(Steps.Step2);
                break;
            case Steps.Step2:
                setStep(Steps.Step2);
                break;
            case Steps.Step3:
                console.log('finish');
                break;
        }
    }, [step]);

    const form = useMemo(() => {
        switch (step) {
            case Steps.Step1:
                return <FirstStepForm onBack={onBack} onNext={onNext} />;
            case Steps.Step2:
                return <SecondStepForm onBack={onBack} onNext={onNext} />;
        }
    }, [step, onNext, onBack]);

    return <>{form}</>;
}

export default CreateForm;
