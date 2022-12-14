import { FormEvent, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

const App = (): JSX.Element => {
  const HomeView = (): JSX.Element => {
    const navigate = useNavigate();
    const config = {
      headers: {
        Authroization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzEwMDEwMTAsImV4cCI6MTY3MTAwNDYxMH0.2GbwnPEdGPeLf5EkTvIf3ajGsmISqGz36L0cbtXvA8Y'
      }
    }
    const [currentUser, setCurrentUser] = useState<any>([]);
    useEffect(() => {
      axios.get('/user', config)
      .then((res: any) => {
        console.log(res.data)
      })
    }, []);
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
  const LoginView = (): JSX.Element => {
    const navigate = useNavigate();
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
        if(res.data.data !== '') {
          navigate('/');
        }
      })
    }
    return (
      <form method='post' onSubmit={loginUser}>
        <input type="text" name="userName" id="userName" className='userName'/>
        <input type="password" name="passWord" id="passWord" className='passWord'/>
        <button type="submit" className='submitBtn'>Login</button>
      </form>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomeView/>}/>
        <Route path={'/login'} element={<LoginView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;