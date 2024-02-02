import { ActionIcon, Flex } from '@mantine/core';
import { IconCheck, IconCircleFilled } from '@tabler/icons-react';
import clsx from 'clsx';
import { useMemo } from 'react';
import cls from './Step.module.scss';

interface StepProps {
    active?: boolean;
    completed?: boolean;
}

function Step(props: StepProps) {
    const { active = false, completed = false } = props;

    const icon = useMemo(() => {
        if (completed) {
            return <IconCheck size={12} stroke={4} />;
        }

        if (active) {
            return <IconCircleFilled />;
        }
        return null;
    }, [active, completed]);

    return (
        <Flex direction="column" justify="flex-start" align="center">
            <ActionIcon
                radius="50%"
                className={clsx(cls.Step, completed && cls.completed, active && cls.active)}
                size="xs"
            >
                {icon}
            </ActionIcon>
        </Flex>
    );
}

export default Step;
