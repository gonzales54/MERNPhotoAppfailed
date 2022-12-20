import { Link, useNavigate } from "react-router-dom"
import UserPhoto from '../assets/profile.jpg'
import PostPhoto1 from "../assets/nature.jpg"
import PostPhoto2 from "../assets/nature1.jpg"
import NavigationMenu from "./parts/NavigationMenu"
import FollowTab from "./parts/FollowTab"

const Followings = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-screen flex flex-col">
      <header className="mb-4 px-4 py-2 flex items-center shadow">
        <button onClick={() => navigate(`/test/dashboard`)} type="button" className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <h1 className="text-lg font-medium">test</h1>
      </header>
      <main>
        <FollowTab user={`test`}/>
        <div className="px-6 overflow-x-hidden overflow-y-scroll">
          <div className="mb-4 flex items-center">
            <p className="mr-2">
              <img src={UserPhoto} alt="" className="w-9 h-9 object-cover rounded-full"/>
            </p>
            <h4>test</h4>
            <button type="button" className="ml-auto px-3 py-1 text-white text-sm bg-blue-500 rounded">Follow</button>
          </div>
          <div className="mb-4 flex items-center">
            <p className="mr-2">
              <img src={UserPhoto} alt="" className="w-9 h-9 object-cover rounded-full"/>
            </p>
            <h4>test</h4>
            <button type="button" className="ml-auto px-3 py-1 text-white text-sm bg-blue-500 rounded">Follow</button>
          </div>
        </div>
      </main>
      <NavigationMenu user={'test'}/>
    </div>
  )
}

export default Followings