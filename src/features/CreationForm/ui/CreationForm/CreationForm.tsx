import { Flex, Modal } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { RoutePath } from 'app/providers/AppRouter/config';
import { useAppDispatch } from 'app/providers/StoreProvider/StoreProvider';
import { sendCreationData } from 'features/CreationForm/model/services/sendCreationData';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Gender } from 'shared/types';
import { getCreationResult, getCurrentStep, getShowMessage } from '../../model/selectors';
import { creationFormActions } from '../../model/slices/creationFormSlice';
import { ResultMessage } from '../../model/types/schema';
import {
    FormValues,
} from '../../model/types/steps';
import { CreationStepper } from '../CreationStepper/CreationStepper';
import { FirstStep } from '../FirstStep/FirstStep';
import { Message } from '../Message/Message';
import { SecondStep } from '../SecondStep/SecondStep';
import { ThirdStep } from '../ThirdStep/ThirdStep';
import { firstStepSchema, secondStepSchema, thirdStepSchema } from '../../model/validation';

export interface StepProps {
    onBack?: () => void;
    onNext?: () => void;
    form: ReturnType<typeof useForm<FormValues>>;
}

export const CreationForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentStep = useSelector(getCurrentStep);
    const result = useSelector(getCreationResult);
    const showMessage = useSelector(getShowMessage);

    const validate = useCallback(
        (values: FormValues) => {
            switch (currentStep) {
                case 0:
                    return yupResolver(firstStepSchema)(values);
                case 1:
                    return yupResolver(secondStepSchema)(values);
                case 2:
                    return yupResolver(thirdStepSchema)(values);
                default:
                    return {};
            }
        },
        [currentStep],
    );

    const form = useForm<FormValues>({
        initialValues: {
            nickname: '',
            name: '',
            surname: '',
            sex: Gender.Man,
            radio: 0,
            checkbox: [],
            advantages: [''],
            about: '',
        },
        validate,
    });

    const messageHandler = useCallback(() => {
        dispatch(creationFormActions.setShowMessage(false));
        if (result === ResultMessage.Success) {
            navigate(RoutePath.main);
        }
    }, [dispatch, navigate, result]);

    const onFinish = useCallback(() => {
        dispatch(sendCreationData(form.values));
    }, [form, dispatch]);

    const onNext = useCallback(() => {
        if (form.validate().hasErrors) {
            return;
        }
        if (currentStep === 2) {
            onFinish();
        }
        dispatch(creationFormActions.nextStep());
    }, [currentStep, dispatch, form, onFinish]);

    const onBack = useCallback(() => {
        if (currentStep === 0) {
            navigate(RoutePath.main);
        }
        dispatch(creationFormActions.prevStep());
    }, [currentStep, dispatch, navigate]);

    const onCloseMessageModal = useCallback(() => {
        dispatch(creationFormActions.setShowMessage(false));
    }, [dispatch]);

    return (
        <>
            <CreationStepper />
            <form>
                <Flex direction="column" gap="xs">
                    {currentStep === 0 && <FirstStep onNext={onNext} onBack={onBack} form={form} />}
                    {currentStep === 1 && (
                        <SecondStep onNext={onNext} onBack={onBack} form={form} />
                    )}
                    {currentStep === 2 && <ThirdStep onNext={onNext} onBack={onBack} form={form} />}
                </Flex>
            </form>
            <Modal opened={showMessage} onClose={onCloseMessageModal}>
                <Message result={result} callback={messageHandler} />
            </Modal>
        </>
    );
};
