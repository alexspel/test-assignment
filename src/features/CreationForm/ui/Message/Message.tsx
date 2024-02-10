import { Button, Flex } from '@mantine/core';
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
            <span className={styles.iconContainer}>
                <span className={clsx([styles.circle, result && styles[result]])}>
                    {result === ResultMessage.Success && <IconCheck className={styles.icon} />}
                    {result === ResultMessage.Error && <IconX className={styles.icon} />}
                </span>
            </span>
        </Flex>
        <Flex align="center" className={clsx([styles.actionContainer, result && styles[result]])}>
            <Button variant="filled" onClick={callback}>
                Закрыть
            </Button>
        </Flex>
    </Flex>
);
