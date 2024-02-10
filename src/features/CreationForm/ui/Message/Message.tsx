import { ActionIcon, Button, Flex } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import clsx from 'clsx';
import { FC } from 'react';
import { ResultMessage } from '../../model/types/schema';
import styles from './Message.module.scss';

interface Props {
    result: ResultMessage | null;
    callback?: () => void;
}

export const Message: FC<Props> = ({ result, callback }) => (
    <Flex direction="column" align="center" justify="flex-start" className={styles.message}>
        <Flex align="center" justify="center">
            <ActionIcon
                variant="filled"
                color={result === ResultMessage.Success ? "green" : "red"}
                size="xl"
                radius="xl"
            >
                {result === ResultMessage.Success && <IconCheck stroke={3} />}
                {result === ResultMessage.Error && <IconX stroke={3} />}
            </ActionIcon>
        </Flex>
        <Flex align="center" className={clsx([styles.actionContainer, result && styles[result]])}>
            <Button variant="filled" onClick={callback}>
                Закрыть
            </Button>
        </Flex>
    </Flex>
);
