import axios from "axios";
import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginView = (): JSX.Element => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();  

  useEffect(() => {
		const getUser = async() => {
			await axios.get('/user')
			.then((res: any) => {
				if(res.data.user !== undefined) {
          navigate('/');
        }
			})
		}
		getUser()
  }, []);

  const loginUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof  e.target & {
      userName: {
        value: string
      }
      passWord: {
        value: string
      }
    }
    axios.post('/auth/login', {
      params: {
        userName: target.userName.value,
        passWord: target.passWord.value
      }
    }) 
    .then((res: any) => {
      setUser(res.data.user)
      target.userName.value = '';
      target.passWord.value = '';
      navigate('/');
    })   
  }
  return (
    <form method='post' className="w-1/3 mx-auto my-52 px-5 pt-6 pb-8 flex flex-col shadow" onSubmit={loginUser}>
      <h3 className="mb-8 text-center text-4xl">Login</h3>
      <input type="text" name="userName" id="userName" className='mb-4 px-2 py-1 border rounded focus:outline-none'/>
      <input type="password" name="passWord" id="passWord" className='mb-6 px-2 py-1 border rounded focus:outline-none'/>
      <button type="submit" className='py-1 text-white bg-blue-500 rounded'>Login</button>
    </form>
  )
}

export default LoginView