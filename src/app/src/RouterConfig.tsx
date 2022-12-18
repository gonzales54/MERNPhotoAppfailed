import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import HomeView from './components/Home'
import LikedPost from './components/LikedPost'
import LoginView from './components/Login'
import Search from './components/Search'
import UserDashBoard from './components/UserDashBoard'

const RouterConfigList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomeView/>}/>
        <Route path={'/login'} element={<LoginView/>}/>
        <Route path={'/user'} element={<UserDashBoard/>}/>
        <Route path={'/search'} element={<Search/>}/>
        <Route path={'/create'} element={<CreatePost/>}/>
        <Route path={'/liked'} element={<LikedPost/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterConfigList