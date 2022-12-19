import { Link, useNavigate } from "react-router-dom"
import UserPhoto from '../assets/profile.jpg'
import PostPhoto1 from "../assets/nature.jpg"
import PostPhoto2 from "../assets/nature1.jpg"
import NavigationMenu from "./parts/NavigationMenu"
import FollowTab from "./parts/FollowTab"

const Followers = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col">
      <header className="mb-4 px-4 py-2 flex items-center shadow">
        <button onClick={() => navigate(-1)} type="button" className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <h1 className="text-lg font-medium">test</h1>
        <Link to={'/create'} className="ml-auto rounded-sm outline outline-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Link>
      </header>
      <main>
        <FollowTab user={`test`}/>
      </main>
      <NavigationMenu user={'test'}/>
    </div>
  )
}

export default Followers