import React, { createContext, useState } from 'react';
import { User } from '../../domain/enity/User';
interface AppContextProps {
    isLoggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    pay: string;
    setPay: React.Dispatch<React.SetStateAction<string>>;
    dataUser: any,
    setDataUser: React.Dispatch<React.SetStateAction<User>>
    // save data user different place 
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
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
    // save data user different place 
    user: null,
    setUser: () => { },
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    // khi muốn hiện thị màn hình BottomNavigation thì setLoggedIn(true)
    // const [isLoggedIn, setLoggedIn] = useState(true);
    // Khi muốn hiện thị màn hình LoginScreen thì setLoggedIn(false)
    const [isLoggedIn, setLoggedIn] = useState(false);
    // false: LoginScreen, true: BottomNavigation
    const [pay, setPay] = useState<string>('Momo');
    const [dataUser, setDataUser] = useState<User>({} as User);
    const [user, setUser] = useState<User | null>(null)


    const appContextValue: AppContextProps = {
        isLoggedIn,
        setLoggedIn,
        pay,
        setPay,
        dataUser,
        setDataUser,
        user,
        setUser
    };

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
};
export const useAppContext = () => React.useContext(AppContext)