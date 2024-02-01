import cls from './Avatar.module.scss';

interface AvatarProps {
    link?: string;
    text?: string;
}

const Avatar = (props: AvatarProps) => {
    const { link, text } = props;

    if (link) {
        return (
            <div
                className={cls.Avatar}
                style={{
                    backgroundImage: `url(${link})`,
                }}
            />
        );
    }

    return (
        <div className={cls.Avatar}>
            <span className={cls.text}>{text}</span>
        </div>
    );
};

export default Avatar;
