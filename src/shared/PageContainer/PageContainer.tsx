import clsx from 'clsx';
import React from 'react';
import styles from './PageContainer.module.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {
    childraen?: React.ReactNode;
    className?: string;
}

export const PageContainer: React.FC<Props> = ({ children, className, ...restProps }) => (
    <main className={clsx(styles.pageContainer, className)} {...restProps}>
        {children}
    </main>
);
