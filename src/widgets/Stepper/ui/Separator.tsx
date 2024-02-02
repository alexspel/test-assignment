import clsx from 'clsx';
import cls from './Separator.module.scss';

interface SeparatorProps extends React.HTMLAttributes<HTMLElement> {
    completed?: boolean;
}

function Separator(props: SeparatorProps) {
    const { completed, ...restProps } = props;
    return <div className={clsx(cls.Separator, completed && cls.completed)} {...restProps} />;
}

export default Separator;
