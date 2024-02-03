/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ActionIcon } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import React from 'react';
import cls from './Modal.module.scss';

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
        <div className={cls.Modal} onClick={onClose}>
            <div
                className={cls.wrapper}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <ActionIcon variant="transparent" className={cls.closeButton} onClick={onClose}>
                    <IconX className={cls.closeIcon} />
                </ActionIcon>
                <div className={cls.content}>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
