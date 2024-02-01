import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from '../shared/Loader/Loader';
import AppRouter from './providers/AppRouter/AppRouter';

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <AppRouter />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
