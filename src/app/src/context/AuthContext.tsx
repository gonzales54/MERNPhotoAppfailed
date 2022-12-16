import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import { UserType } from "../types/UserType";


interface IAuthContext {
	user: UserType | null | undefined,
	setUser: React.Dispatch<React.SetStateAction<UserType | null | undefined>>
}

const AuthContext = createContext<IAuthContext>({ user: undefined, setUser: (user) => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
	const [user, setUser] = useState<UserType | null | undefined>(undefined);
  
  useEffect(() => {
		const getUser = async() => {
			await axios.get('/user')
			.then((res: any) => {
				setUser(res.data.user);
			})
		}
		getUser()
  }, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);