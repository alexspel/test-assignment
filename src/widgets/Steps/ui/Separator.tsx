import { HtmlHTMLAttributes } from 'react';
import cls from './Separator.module.scss';
import clsx from 'clsx';

interface SeparatorProps extends React.HTMLAttributes<HTMLElement> {
    completed?: boolean;
}

function Separator(props: SeparatorProps) {
    const { completed, ...restProps } = props;
    return <div className={clsx(cls.Separator, completed && cls.completed)} {...restProps} />;
}

export default Separator;
