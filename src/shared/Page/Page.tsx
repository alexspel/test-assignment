import clsx from 'clsx';
import React from 'react';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: React.ReactNode;
}

const Page = ({ className, children }: PageProps) => (
    <main className={clsx(cls.Page, className)}>{children}</main>
);

export default Page;
