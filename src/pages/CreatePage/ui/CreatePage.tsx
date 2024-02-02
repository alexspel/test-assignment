import Page from '../../../shared/Page/Page';
import CreateForm from './CreateForm/CreateForm';
import cls from './CreatePage.module.scss';
import CreationStepper from './CreationStepper/CreationStepper';
import ResultModal from './ResultModal/ResultModal';

function CreatePage() {
    return (
        <Page className={cls.CreatePage}>
            <CreationStepper />
            <CreateForm />
            <ResultModal />
        </Page>
    );
}

export default CreatePage;
