import Page from '../../../shared/Page/Page';
import { Stepper } from '../../../widgets/Stepper';
import CreateForm from './CreateForm/CreateForm';
import cls from './CreatePage.module.scss';
import ResultModal from './ResultModal/ResultModal';

function CreatePage() {
    return (
        <Page className={cls.CreatePage}>
            <Stepper current={'4'} steps={['3', '2', '4']} />
            <CreateForm />
            <ResultModal />
        </Page>
    );
}

export default CreatePage;
