import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Followers from './components/Follower'
import Followings from './components/Followings'
import HomeView from './components/Home'
import LikedPost from './components/LikedPost'
import LoginView from './components/Login'
import Post from './components/Post'
import Search from './components/Search'
import UserDashBoard from './components/UserDashBoard'

const RouterConfigList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomeView/>}/>
        <Route path={'/login'} element={<LoginView/>}/>
        <Route path={'/:name'}>
          <Route path={'dashboard'} element={<UserDashBoard/>}/>
          <Route path={'posts/:id'} element={<Post/>}/>
          <Route path={'followers'} element={<Followers/>}/>
          <Route path={'followings'} element={<Followings/>}/>
        </Route>
        <Route path={'/search'} element={<Search/>}/>
        <Route path={'/create'} element={<CreatePost/>}/>
        <Route path={'/liked'} element={<LikedPost/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterConfigList