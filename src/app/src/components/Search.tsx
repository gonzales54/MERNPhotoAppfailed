import NavigationMenu from "./parts/NavigationMenu"

const Search = (): JSX.Element => {
  return (
    <div className="h-screen flex flex-col">
      <header className="mb-4 px-4 py-2 flex justify-between items-center shadow">
        <h1 className="text-sm font-medium">Search</h1>
      </header>
      <main className="px-4 overflow-y-scroll">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input type="text" id="simple-search" className="w-full pl-10 p-2.5 block border border-gray-300 text-gray-900 text-sm bg-gray-50 rounded-lg focus:outline-none" placeholder="Search" required/>
        </div>
      </main>
      <NavigationMenu/>
    </div>
  )
}

export default Search