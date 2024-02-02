import clsx from 'clsx';
import React from 'react';
import cls from './Page.module.scss';

const Page = (props: React.HTMLAttributes<HTMLElement>) => {
    const { children, className = undefined, ...restProps } = props;
    return (
        <main className={clsx(cls.Page, className)} {...restProps}>
            {children}
        </main>
    );
};

export default Page;
