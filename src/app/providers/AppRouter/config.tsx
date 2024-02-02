import { RouteProps } from 'react-router-dom';
import { CreatePage } from '../../../pages/CreatePage';
import { MainPage } from '../../../pages/MainPage';

export enum AppRoutes {
    main = 'main',
    create = 'create',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.main]: '/',
    [AppRoutes.create]: '/create',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.main]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.create]: {
        path: RoutePath.create,
        element: <CreatePage />,
    },
};
