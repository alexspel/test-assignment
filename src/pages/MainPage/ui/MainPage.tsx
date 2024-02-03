import { user } from '../../../app/data';
import Divider from '../../../shared/Divider/Divider';
import Page from '../../../shared/Page/Page';
import { StartForm } from '../../../widgets/StartForm';
import { Userbar } from '../../../widgets/Userbar';

const MainPage = () => (
    <Page>
        <Userbar user={user} />
        <Divider />
        <StartForm />
    </Page>
);

export default MainPage;
