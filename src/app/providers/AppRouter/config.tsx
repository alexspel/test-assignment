import { RouteProps } from 'react-router-dom';
import { FirstStepPage } from '../../../pages/FirstStepPage';
import { MainPage } from '../../../pages/MainPage';
import { SecondStepPage } from '../../../pages/SecondStepPage';

export enum AppRoutes {
    main = 'main',
    step1 = 'step1',
    step2 = 'step2',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.main]: '/',
    [AppRoutes.step1]: '/step1',
    [AppRoutes.step2]: '/step2',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.main]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.step1]: {
        path: RoutePath.step1,
        element: <FirstStepPage />,
    },
    [AppRoutes.step2]: {
        path: RoutePath.step2,
        element: <SecondStepPage />,
    },
};
