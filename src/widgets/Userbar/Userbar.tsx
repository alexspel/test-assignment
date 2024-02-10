import { Avatar, Flex } from '@mantine/core';
import type { User } from 'entities/User';
import { getInitials } from 'entities/User';
import { FC } from 'react';
import styles from './Userbar.module.scss';

interface Props {
    user: User;
}

export const Userbar: FC<Props> = ({ user }) => (
    <Flex align="center" justify="flex-start" gap="xl" className={styles.userbar}>
        <Avatar color="cyan" radius="lg">
            {getInitials(user)}
        </Avatar>
        <Flex direction="column" justify="center" className={styles.userInfo}>
            <span className={styles.title}>{`${user?.firstName} ${user?.lastName}`}</span>
            {user?.links && (
                <Flex align="center" justify="flex-start" className={styles.links}>
                    {user.links.map((url: string) => (
                        <a key={url} href={url} className={styles.link}>
                            {url}
                        </a>
                    ))}
                </Flex>
            )}
        </Flex>
    </Flex>
);
