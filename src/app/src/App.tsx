import { FormEvent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

const App = (): JSX.Element => {
  const HomeView = (): JSX.Element => {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
  const LoginView = (): JSX.Element => {
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