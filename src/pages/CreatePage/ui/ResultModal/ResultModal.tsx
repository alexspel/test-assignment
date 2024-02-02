import { Button, Flex } from '@mantine/core';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../app/providers/AppRouter/config';
import { Modal } from '../../../../widgets/Modal';
import { ResultMessage } from '../../../../widgets/ResultMessage';

function ResultModal() {
    const navigate = useNavigate();
    const [result] = useState<'success' | 'error'>('success');
    const [openModal, setOpenModal] = useState<boolean>(true);

    const closeModal = useCallback(() => {
        setOpenModal(false);
    }, [setOpenModal]);

    const goToMain = useCallback(() => {
        navigate(RoutePath.main);
    }, [navigate]);

    const buttonProps = {
        className: 'button primary',
        variant: 'filled',
        onClick: result === 'success' ? goToMain : closeModal,
    };

    const messageTitle = result === 'success' ? 'Форма успешно отправлена' : 'Ошибка';
    const buttonText = result === 'success' ? 'На главную' : 'Закрыть';

    return (
        <Modal
            open={openModal}
            onClose={() => {
                setOpenModal(false);
            }}
        >
            <ResultMessage title={<h3>{messageTitle}</h3>} result={result} />
            <Flex align="center" justify={result === 'success' ? 'center' : 'flex-end'}>
                <Button {...buttonProps}>{buttonText}</Button>
            </Flex>
        </Modal>
    );
}

export default ResultModal;
