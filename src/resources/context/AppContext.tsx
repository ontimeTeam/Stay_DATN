import React, { createContext, useState } from 'react';
import { User } from './User';

interface AppContextProps {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  pay: string;
  setPay: React.Dispatch<React.SetStateAction<string>>;
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
  user: null,
  setUser: () => { },
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // khi muốn hiện thị màn hình BottomNavigation thì setLoggedIn(true)
  const [isLoggedIn, setLoggedIn] = useState(true);
  // Khi muốn hiện thị màn hình LoginScreen thì setLoggedIn(false)
  // const [isLoggedIn, setLoggedIn] = useState(false);
  // false: LoginScreen, true: BottomNavigation
  const [pay, setPay] = useState<string>('Momo');
  
  const [userData, setUserData] = useState(null);

  const [user, setUser] = useState<User | null>(null)

  const appContextValue: AppContextProps = {
    isLoggedIn,
    setLoggedIn,
    pay,
    setPay,
    user,
    setUser
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
