import { Link } from "react-router-dom"
import UserPhoto from "../assets/profile.jpg"
import PostPhoto1 from "../assets/nature.jpg"
import PostPhoto2 from "../assets/nature1.jpg"
import NavigationMenu from "./parts/NavigationMenu";

const LikedPost = (): JSX.Element => {
  return (
    <div className="h-screen flex flex-col">
      <header className="mb-4 px-4 py-2 flex justify-between items-center shadow">
        <h1 className="text-sm font-medium">Liked Post</h1>
      </header>
      <main className="px-4 grid grid-cols-3 gap-2 overflow-y-scroll">
        <a href="" className="block">
          <div className="relative">
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
          </div>
        </a>
        <a href="" className="block">
          <div className="relative">
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
          </div>
        </a>
      </main>
      <NavigationMenu user={'test'}/>
    </div>
  )
}

export default LikedPost