import { Flex } from '@mantine/core';
import ResultIcon from '../../../shared/ResultIcon/ResultIcon';
import cls from './ResultMessage.module.scss';

interface ResultMessageProps {
    title: React.ReactNode;
    result: 'success' | 'error';
}

function ResultMessage(props: ResultMessageProps) {
    const { title, result } = props;
    return (
        <Flex direction="column" align="center" justify="flex-start" className={cls.ResultMessage}>
            {title}
            <ResultIcon result={result} />
        </Flex>
    );
}

export default ResultMessage;
