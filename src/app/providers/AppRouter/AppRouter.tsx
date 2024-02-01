import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../../../shared/Loader/Loader';
import { RouteConfig } from './config';

const AppRouter = () => (
    <Routes>
        {Object.values(RouteConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={<Suspense fallback={<Loader />}>{element}</Suspense>}
            />
        ))}
    </Routes>
);

export default AppRouter;
