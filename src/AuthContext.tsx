import * as React from "react";
import {ReactNode, useContext} from "react";

interface AuthContextType {
    user?: string;
    login: (nickname: string) => void;
    logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [user, setUser] = React.useState<string>();

    const login = (nickname: string) => setUser(nickname);
    const logout = () => setUser(undefined);

    const value: AuthContextType = {user, login, logout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth error");
    }
    return context;
}