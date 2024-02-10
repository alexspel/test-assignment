import { user } from 'app/data';
import { LoginForm } from 'features/LoginForm';
import { Userbar } from 'widgets/Userbar/Userbar';

export const MainPage = () => (
    <>
        <Userbar user={user} />
        <LoginForm />
    </>
);
