import { Link, useLocation } from "react-router-dom"

const FollowTab = ({user} : {user: string}) => {
  const location = useLocation();

  return (
    <div className="flex justify-between shadow-md">
      <Link to={`/test/followers`} className={location.pathname === `/${user}/followers` ? "w-1/2 -mb-1 py-2 flex justify-center items-end border-b-4 border-blue-500" : "w-1/2 py-2 flex justify-center items-end"}>
        <span className="mr-1 block text-lg">1200</span>
        <span className="pb-0.5 block text-sm text-gray-500">Followers</span>
      </Link>
      <Link to={`/test/followings`} className={location.pathname === `/${user}/followings` ? "w-1/2 -mb-1 py-2 flex justify-center items-end border-b-4 border-blue-500" : "w-1/2 py-2 flex justify-center items-end"}>
        <span className="mr-1 block text-lg">128</span>
        <span className="pb-0.5 block text-sm text-gray-500">Followings</span>
      </Link>
    </div>
  )
}

export default FollowTab