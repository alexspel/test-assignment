import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from '../shared/Loader/Loader';
import AppRouter from './providers/AppRouter/AppRouter';
function App() {
    return (
        <MantineProvider>
            <BrowserRouter>
                <Suspense fallback={<Loader />}>
                    <AppRouter />
                </Suspense>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
