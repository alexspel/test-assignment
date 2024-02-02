import React from 'react';
import cls from './Modal.module.scss';
import { IconX } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';

interface ModalProps {
    open?: boolean;
    children: React.ReactNode;
    onClose?: () => void;
}

function Modal(props: ModalProps) {
    const { open = false, children, onClose } = props;
    if (!open) {
        return null;
    }
    return (
        <div className={cls.Modal}>
            <div className={cls.wrapper}>
                <ActionIcon variant="transparent" className={cls.closeButton} onClick={onClose}>
                    <IconX />
                </ActionIcon>
                <div className={cls.content}>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
