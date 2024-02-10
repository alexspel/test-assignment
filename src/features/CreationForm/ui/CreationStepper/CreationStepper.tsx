import { Stepper } from '@mantine/core';
import { getAllSteps, getCurrentStep } from 'features/CreationForm/model/selectors';
import { FC } from 'react';
import { useSelector } from 'react-redux';

export const CreationStepper: FC = () => {
    const currentStep = useSelector(getCurrentStep);
    const allSteps = useSelector(getAllSteps);
    return (
        <Stepper active={currentStep} size="xs">
            {allSteps.map((s) => (
                <Stepper.Step label={s} />
            ))}
        </Stepper>
    );
};
