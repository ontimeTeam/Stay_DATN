import React, { createContext, Dispatch, useState, SetStateAction } from 'react';
import { User } from '@domain';

interface AppContextProps {
    isLoggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    pay: string;
    setPay: React.Dispatch<React.SetStateAction<string>>;
    dataUser: User,
    setDataUser: React.Dispatch<React.SetStateAction<User>>;
}

type AppContextProviderProps = {
    children: React.ReactNode;
};

const defaultContextValue: AppContextProps = {
    isLoggedIn: false,
    setLoggedIn: () => { },
    pay: 'Momo',
    setPay: () => { },
    dataUser: {} as User,
    setDataUser: () => { },
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    // khi muốn hiện thị màn hình BottomNavigation thì setLoggedIn(true)
    const [isLoggedIn, setLoggedIn] = useState(true);
    // Khi muốn hiện thị màn hình LoginScreen thì setLoggedIn(false)
    // const [isLoggedIn, setLoggedIn] = useState(false);
    // false: LoginScreen, true: BottomNavigation
    const [pay, setPay] = useState<string>('Momo');
    const [dataUser, setDataUser] = useState<User>({} as User);


    const appContextValue: AppContextProps = {
        isLoggedIn,
        setLoggedIn,
        pay,
        setPay,
        dataUser,
        setDataUser
    };

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
};
