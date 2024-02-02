import Page from '../../../shared/Page/Page';
import { Steps } from '../../../widgets/Steps';
import CreateForm from './CreateForm/CreateForm';
import cls from './CreatePage.module.scss';

function CreatePage() {
    return (
        <Page className={cls.CreatePage}>
            <Steps current={'4'} steps={['3', '2', '4']} />
            <CreateForm />
        </Page>
    );
}

export default CreatePage;
