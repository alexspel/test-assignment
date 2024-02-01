import { user } from '../../../app/data';
import Divider from '../../../shared/Divider/Divider';
import Page from '../../../shared/Page/Page';
import { Userbar } from '../../../widgets/Userbar';
import cls from './MainPage.module.scss';

const MainPage = () => {
    return (
        <Page className={cls.MainPage}>
            <Userbar user={user} />
            <Divider />
        </Page>
    );
};

export default MainPage;
