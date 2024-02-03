import { IconCheck, IconX } from '@tabler/icons-react';
import cls from './ResultIcon.module.scss';

interface ResultIconProps {
    result: 'success' | 'error';
}

function ResultIcon({ result }: ResultIconProps) {
    const icon = result === 'success' ? <IconCheck className={cls.icon} /> : <IconX className={cls.icon} />;
    return (
        <div className={cls.ResultIcon}>
            <div className={cls[result]}>{icon}</div>
        </div>
    );
}

export default ResultIcon;
