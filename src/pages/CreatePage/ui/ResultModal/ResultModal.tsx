import { Button, Flex } from '@mantine/core';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../app/providers/AppRouter/config';
import { Modal } from '../../../../widgets/Modal';
import { ResultMessage } from '../../../../widgets/ResultMessage';
import { getResult, getShowModal } from '../../model/selectors';
import { createPageActions } from '../../model/slices/CreatePageSlice';

function ResultModal() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(getResult);
    const openModal = useSelector(getShowModal);

    const closeModal = useCallback(() => {
        dispatch(createPageActions.setShowResult(false));
    }, [dispatch]);

    const goToMain = useCallback(() => {
        dispatch(createPageActions.resetCreation());
        navigate(RoutePath.main);
    }, [dispatch, navigate]);

    const buttonProps = {
        className: 'button primary',
        variant: 'filled',
        onClick: result === 'success' ? goToMain : closeModal,
    };

    const messageTitle = result === 'success' ? 'Форма успешно отправлена' : 'Ошибка';
    const buttonText = result === 'success' ? 'На главную' : 'Закрыть';

    return (
        <Modal open={openModal} onClose={closeModal}>
            {result && <ResultMessage title={<h3>{messageTitle}</h3>} result={result} />}
            <Flex align="center" justify={result === 'success' ? 'center' : 'flex-end'}>
                <Button {...buttonProps}>{buttonText}</Button>
            </Flex>
        </Modal>
    );
}

export default ResultModal;
