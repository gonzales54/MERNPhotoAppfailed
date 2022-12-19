import axios from "axios";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UserPhoto from "../assets/profile.jpg";
import PostPhoto from "../assets/nature.jpg"
import NavigationMenu from "./parts/NavigationMenu";

const HomeView = (): JSX.Element => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const navigate = useNavigate();

  const logout = () => {
    axios.get('/auth/logout')
    .then(() => {
      navigate('/login');
    })
  }

  return (
    <div className="h-screen flex flex-col bg-[#FDFDFD]">
      <header className="mb-4 px-4 py-4 shadow-md">
        <h1 className="font-medium">PhotoApp</h1>
      </header>
      <main className="px-4 grid sm:grid-cols-1 md:grid-cols-3 gap-4 overflow-y-scroll">
        <div className="mb-6 p-4 block rounded shadow relative">
          <div className="mb-4 flex items-center">
            <p>
              <img src={UserPhoto} alt="" className="w-10 h-10 object-cover rounded-full"/>
            </p>
            <div className="ml-2">  
              <h3 className="font-bold">test</h3>
              <p className="text-xs text-gray-500">United Kingdom</p>
            </div>
            <p className="ml-auto absolute right-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
            </p>
          </div>
          <Link to="/user/posts/46" className="">
            <p className="mb-4 rounded-lg overflow-hidden">
              <img src={PostPhoto} alt="" className="rounded-lg"/>
            </p>       
            <p className="mb-4 text-sm">
              <span className="text-base font-semibold">test: </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </p>
          </Link>
          <div className="mb-1 flex items-center">
              <p onClick={() => setIsLiked(!isLiked)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke={isLiked ? "none" : "#EF4444"} className={isLiked ? "w-6 h-6 fill-red-500" : "w-6 h-6"}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </p>
            <p className="ml-1 text-sm">269</p>
          </div>
          <p className="text-right text-xs text-gray-500">1 hour ago</p>
        </div> 
      </main>
      <NavigationMenu user={'test'}/>
    </div>
  )
}

export default HomeView