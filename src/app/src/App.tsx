import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './components/Home';
import LoginView from './components/Login';

const App = (): JSX.Element => {
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