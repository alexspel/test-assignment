import Page from '../../../shared/Page/Page';
import { Steps } from '../../../widgets/Steps';
import CreateForm from './CreateForm/CreateForm';

function CreatePage() {
    return (
        <Page>
            <Steps current={'2'} steps={['3', '2', '4']} />
            <CreateForm />
        </Page>
    );
}

export default CreatePage;
