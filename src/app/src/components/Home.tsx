import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UserPhoto from "../assets/profile.jpg";
import PostPhoto from "../assets/nature.jpg"

const HomeView = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    axios.get('/auth/logout')
    .then(() => {
      navigate('/login');
    })
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="mb-4 py-4 shadow">
        <h1 className="text-2xl text-center font-medium">TimeLine</h1>
      </header>
      <main className="px-6 flex flex-col overflow-y-scroll posts">
        <a href="" className="mb-6 p-4 block rounded shadow">
          <div className="">
            <div className="mb-4 flex items-center">
              <p>
                <img src={UserPhoto} alt="" className="w-10 h-10 object-cover rounded-full"/>
              </p>
              <div className="ml-2">  
                <h3 className="font-bold">test</h3>
                <p className="text-xs text-gray-500">United Kingdom</p>
              </div>
              <p className="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
              </p>
            </div>
            <p className="mb-3">
              <img src={PostPhoto} alt="" className="rounded-lg"/>
            </p>
            <div>
              <div className="flex items-center">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="none" className="w-6 h-6 fill-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </p>
                <p className="ml-1 text-sm">269</p>
              </div>
            </div>
          </div>          
        </a>
      </main>
      <ul className="mt-auto px-6 py-2 flex justify-between">
        <li>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <img src={UserPhoto} alt="" className="w-8 h-8 object-cover rounded-full" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default HomeView