import { User } from '../model/types/User';

export const getInitials = (user: User): string => {
    const { lastName, firstName } = user;

    return [firstName, lastName].map((name) => name.substring(0, 1)).join('');
};
