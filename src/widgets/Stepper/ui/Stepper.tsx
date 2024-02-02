import { Flex } from '@mantine/core';
import clsx from 'clsx';
import { useMemo } from 'react';
import Separator from './Separator';
import Step from './Step';
import cls from './Stepper.module.scss';

interface StepperProps {
    current: string;
    steps: string[];
}

function Stepper(props: StepperProps) {
    const { current, steps } = props;
    const currentIndex = steps.indexOf(current);
    const stepItems = useMemo(
        () =>
            steps.map((step, stepIndex) => {
                const key = `${currentIndex}-${step}-${stepIndex}`;
                const stepProps = {
                    key,
                    completed: stepIndex < currentIndex,
                    active: stepIndex === currentIndex,
                };
                return (
                    <>
                        {!stepProps.active && !stepProps.completed && (
                            <Separator key={`cs-${key}`} />
                        )}
                        <Step {...stepProps} />
                        {!stepProps.active && stepProps.completed && (
                            <Separator key={`ucs-${key}`} completed />
                        )}
                    </>
                );
            }),
        [currentIndex, steps],
    );

    const labelItems = useMemo(
        () =>
            steps.map((step, stepIndex) => (
                <span
                    key={`label-${step}`}
                    className={clsx(cls.label, stepIndex <= currentIndex && cls.completed)}
                >
                    {step}
                </span>
            )),
        [steps, currentIndex],
    );

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
