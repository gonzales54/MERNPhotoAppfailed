import NavigationMenu from "./parts/NavigationMenu"
import UserPhoto from "../assets/profile.jpg";
import PostPhoto from "../assets/nature.jpg"
import PostPhoto2 from "../assets/nature1.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";

const CreatePost = (): JSX.Element => {
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);

  return (
    <div className="h-screen flex flex-col">
      <header className="px-4 py-2 flex justify-between items-center shadow">
        <h1 className="text-sm font-medium">Create</h1>
      </header>
      <main className="overflow-y-scroll">
        {/*
        <div className="w-100 h-56 mb-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${PostPhoto})` }}>
        */}
        <div className="w-100 h-56 mb-4 flex justify-center items-center">
          <label htmlFor="photo" className="mr-3 px-4 py-1 inline-block bg-blue-500 text-sm text-white rounded cursor-pointer">
            <input type="file" name="photo" id="photo" className="hidden" />
            Choose file
          </label>
          <p>No file chosen</p>
        </div>
        <form method="post" className="">
          <div className="mb-2 px-4 py-2 flex justify-between items-center border-y-2">
            <Link to={'/'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </Link>
            <h3 className="font-medium">New Post</h3>
            <button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3B82F6" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </button>
          </div>
          <div className="px-4 py-2 flex border-b-2">
          <div className="w-14 h-14 mb-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${PostPhoto})` }}></div>
            <textarea name="caption" id="caption" cols={30} rows={3} className="px-3 focus:outline-none resize-none" placeholder="write a caption..."></textarea>
          </div>
          <div className={isLocationOpen ? "mb-2 px-4 pt-2 pb-4 flex flex-col border-b-2" : "mb-2 px-4 py-2 flex flex-col border-b-2"}>
            <div className={isLocationOpen ? "mb-4 flex justify-between items-center" : "flex justify-between items-center"} onClick={() => {setIsLocationOpen(!isLocationOpen)}}>
              <h3 className="">Add Location</h3>
              <p>
                {isLocationOpen 
                ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                }
              </p>         
   
            </div>
            <div className={isLocationOpen ? "bg-gray-50 flex items-center relative" : "hidden"}>
              <p className="absolute left-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </p>
              <input type="search" name="addlocaiton" id="addlocation" className="w-full pl-8 pr-2 py-2 text-gray-900 rounded border border-1 border-gray-300 focus:outline-none" placeholder="add location" />
            </div>  
          </div>
        </form>
      </main>
      <NavigationMenu user={'test'}/>
    </div>
  )
}

export default CreatePost