/**
 * Based on https://mobx-react.js.org/recipes-context
 */

import * as React from 'react';
import { useLocalStore } from "mobx-react-lite";

import { AppStore, AppStoreImpl } from './AppStore';

function createStore() {
    return new AppStoreImpl();
}

const storeContext = React.createContext<AppStore | null>(null);

export interface StoreProviderProps {
    children: React.ReactElement;
}

export const StoreProvider = ({children}: StoreProviderProps): React.ReactElement => {
    const store = useLocalStore(createStore);

    return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
}

export const useStore = () => {
    const store = React.useContext(storeContext);

    if(!store) {
        throw new Error('useStore must be called within a StoreProvider.');
    }

    return store;
}