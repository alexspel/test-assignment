import clsx from 'clsx';
import React from 'react';
import cls from './Page.module.scss';

interface PageProps extends React.HTMLAttributes<HTMLElement> {
    childraen?: React.ReactNode;
    className?: string;
}
const Page = (props: PageProps) => {
    const { children, className, ...restProps } = props;
    return (
        <main className={clsx(cls.Page, className)} {...restProps}>
            {children}
        </main>
    );
};

export default Page;
