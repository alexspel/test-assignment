import { Flex } from '@mantine/core';
import clsx from 'clsx';
import Separator from './Separator';
import Step from './Step';
import cls from './Stepper.module.scss';

interface StepperProps {
    current: number | string;
    steps: (number | string)[];
}

function Stepper(props: StepperProps) {
    const { current, steps } = props;
    const currentIndex = steps.indexOf(current);
    const stepItems = steps.map((step, stepIndex) => {
        const stepId = `${step}-${stepIndex}`;
        const stepProps = {
            completed: stepIndex < currentIndex,
            active: stepIndex === currentIndex,
        };
        return (
            <>
                {!stepProps.active && !stepProps.completed && <Separator />}
                <Step key={stepId} {...stepProps} />
                {!stepProps.active && stepProps.completed && <Separator completed />}
            </>
        );
    });

    const labelItems = steps.map((step, stepIndex) => (
        <span key={step} className={clsx(cls.label, stepIndex <= currentIndex && cls.completed)}>
            {step}
        </span>
    ));

    return (
        <Flex direction="column" gap="xs">
            <Flex align="center" justify="space-between">
                {stepItems}
            </Flex>
            <Flex align="center" justify="space-between">
                {labelItems}
            </Flex>
        </Flex>
    );
}

export default Stepper;
