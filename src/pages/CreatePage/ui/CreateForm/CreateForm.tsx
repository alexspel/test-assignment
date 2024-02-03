import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../app/providers/AppRouter/config';
import { FirstStepForm } from '../../../../widgets/FirstStepForm';
import { SecondStepForm } from '../../../../widgets/SecondStepForm';
import { ThirdStepForm } from '../../../../widgets/ThirdStepForm';
import { getNextStep, getPrevStep } from '../../lib';
import { getData, getStep } from '../../model/selectors';
import { sendData } from '../../model/services/sendData';
import { createPageActions } from '../../model/slices/CreatePageSlice';
import { FormValues } from '../../model/types/FormValues';

function CreateForm() {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const data = useSelector(getData);
    const currentStep = useSelector(getStep);

    // const onFinish = useCallback(() => , [data, dispatch]);

    const onBack = useCallback(() => {
        const prevStep = getPrevStep(currentStep);
        if (prevStep) {
            dispatch(createPageActions.setStep(prevStep));
            return;
        }
        navigate(RoutePath.main);
    }, [currentStep, dispatch, navigate]);

    const onNext = useCallback(
        (values: Partial<FormValues>) => {
            dispatch(createPageActions.updateData(values));
            const nextStep = getNextStep(currentStep);
            if (nextStep) {
                dispatch(createPageActions.setStep(nextStep));
                return;
            }
            dispatch(
                sendData(),
            );
        },
        [currentStep, dispatch],
    );

    const stepForm = useMemo(() => {
        switch (currentStep) {
        case 'step1':
            return <FirstStepForm onBack={onBack} onNext={onNext} data={data} />;
        case 'step2':
            return <SecondStepForm onBack={onBack} onNext={onNext} data={data} />;
        case 'step3':
            return <ThirdStepForm onBack={onBack} onNext={onNext} data={data} />;
        default:
            return null;
        }
    }, [data, currentStep, onNext, onBack]);

    return <>{stepForm}</>;
}

export default CreateForm;
