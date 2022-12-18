import { useNavigate, Link } from "react-router-dom";
import UserPhoto from "../assets/profile.jpg"
import PostPhoto1 from "../assets/nature.jpg"
import PostPhoto2 from "../assets/nature1.jpg"
import NavigationMenu from "./parts/NavigationMenu";

const UserDashBoard = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="mb-4 px-4 py-2 flex justify-between items-center shadow">
        <h1 className="text-lg font-medium">test</h1>
        <Link to={'/create'} className="rounded-sm outline outline-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Link>
      </header>
      <main>
        <div className="mb-6 px-4">
          <div className="mb-4 flex justify-between items-center">
            <p className="">
              <img src={UserPhoto} alt="" className="w-16 h-16 rounded-full object-cover" />
            </p>
            <div className="flex flex-col">
              <p className="text-center text-lg font-medium">21</p>
              <p className="text-xs text-gray-500">Posts</p>
            </div>
            <div>
              <p className="text-center text-lg font-medium">1200</p>
              <p className="text-xs text-gray-500">Follower</p>
            </div>
            <div>
              <p className="text-center text-lg font-medium">128</p>
              <p className="text-xs text-gray-500">Followings</p>
            </div>
          </div>
          <div>
            <p className="text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </div>
        <div className="mb-6 flex justify-between shadow-md">
          <a href="" className="w-1/2 -mb-1 px-4 py-2 block border-b-4 border-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3B82F6" className="w-8 h-8 mx-auto fill-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          </a>
        </div>
        <div className="px-4 grid grid-cols-3 gap-2 overflow-y-scroll">
          <div className="relative">
            <Link to="/user/posts/46" className="block">
              <p className="rounded overflow-hidden">
                <img src={PostPhoto1} alt="" className="h-[5rem] rounded" />
              </p>
              <div className="hidden flex items-center absolute top-1/4 left-1/4">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="none" className="w-6 h-6 fill-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </p>
                <p className="ml-1 text-sm text-white">269</p>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link to="/user/posts/46" className="block">
              <p className="rounded overflow-hidden">
                <img src={PostPhoto2} alt="" className="h-[5rem] rounded" />
              </p>
              <div className="hidden flex items-center absolute top-1/4 left-1/4">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="none" className="w-6 h-6 fill-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </p>
                <p className="ml-1 text-sm text-white">269</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <NavigationMenu user={'test'}/>
    </div>
  )
}

export default UserDashBoard