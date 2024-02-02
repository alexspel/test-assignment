import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from '../shared/Loader/Loader';
import AppRouter from './providers/AppRouter/AppRouter';
import { StoreProvider } from './providers/StoreProvider/StoreProvider';

function App() {
    return (
        <MantineProvider>
            <BrowserRouter>
                <StoreProvider>
                    <Suspense fallback={<Loader />}>
                        <AppRouter />
                    </Suspense>
                </StoreProvider>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
