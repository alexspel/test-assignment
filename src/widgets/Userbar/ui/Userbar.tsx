import { User, getInitials } from '../../../entities/User';
import Avatar from '../../../shared/Avatar/Avatar';
import cls from './Userbar.module.scss';

interface UserbarProps {
    user: User;
}

const Userbar = (props: UserbarProps) => {
    const { user } = props;
    return (
        <div className={cls.Userbar}>
            <Avatar text={getInitials(user)} />
            <span className={cls.userInfo}>
                <span className={cls.title}>{`${user?.firstName} ${user?.lastName}`}</span>
                {user?.links && (
                    <span className={cls.links}>
                        {user.links.map((url: string) => (
                            <a key={url} href={url} className={cls.link}>
                                {url}
                            </a>
                        ))}
                    </span>
                )}
            </span>
        </div>
    );
};

export default Userbar;
