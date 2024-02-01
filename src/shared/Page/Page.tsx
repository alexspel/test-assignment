import clsx from 'clsx';
import React from 'react';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: React.ReactNode;
}

const Page = ({ className, children }: PageProps) => (
    <div className={clsx(cls.Page, className)}>{children}</div>
);

export default Page;
