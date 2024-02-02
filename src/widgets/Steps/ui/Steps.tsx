import { Flex } from '@mantine/core';
import Step from './Step';
import Separator from './Separator';
import clsx from 'clsx';
import cls from './Steps.module.scss';

interface StepsProps {
    current: number | string;
    steps: (number | string)[];
}

function Steps(props: StepsProps) {
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

export default Steps;
