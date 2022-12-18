import { Link, useLocation, useParams } from 'react-router-dom'
import UserPhoto from "../../assets/profile.jpg";

const NavigationMenu = ({user} : {user: string}) => {
  const location = useLocation();
  
  interface svgType {
    '/': string,
    '/search': string,
    '/create': string,
    '/liked': string,
    '/dashboard': string | undefined
  }

  const svgData: svgType = {
    '/': 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
    '/search': 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
    '/create': 'M12 4.5v15m7.5-7.5h-15',
    '/liked': 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    '/dashboard': UserPhoto
  };

  return (
    <ul className="mt-auto px-6 py-2 flex justify-between shadow">
      {Object.keys(svgData).map((item: any, index: number) => {
        return (
          <li key={index}>
          <Link to={item === '/dashboard' ? `/${user}${item}` : item} className={item === "/create" && location.pathname === '/create' ? "block rounded-sm outline outline-2" : item === "/create" ? "block rounded-sm outline outline-1" : ""}>
            {item !== '/dashboard'
              ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={location.pathname === item && location.pathname !== '/create' ? 2 : 1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d={Object.values(svgData)[index]} />
              </svg>
              :
              <img src={Object.values(svgData)[index]} alt="" className={location.pathname === `/${user}/dashboard` ? "w-8 h-8 rounded-full object-cover outline outline-2" : "w-8 h-8 rounded-full object-cover"} />
            }
          </Link>
        </li>
        )
      })}
    </ul>
  )
}

export default NavigationMenu