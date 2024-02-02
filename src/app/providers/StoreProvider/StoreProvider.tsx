import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from './config/schema';
import { createAppStore } from './config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: Partial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createAppStore(initialState as StateSchema);

    return <Provider store={store}>{children}</Provider>;
};
