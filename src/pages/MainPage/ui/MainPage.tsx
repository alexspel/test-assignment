import { user } from '../../../app/data';
import Divider from '../../../shared/Divider/Divider';
import Page from '../../../shared/Page/Page';
import { IntroForm } from '../../../widgets/IntoForm';
import { Userbar } from '../../../widgets/Userbar';

const MainPage = () => {
    return (
        <Page>
            <Userbar user={user} />
            <Divider />
            <IntroForm />
        </Page>
    );
};

export default MainPage;
