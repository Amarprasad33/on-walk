export default function Navbar() {
  return (
    <div>
        <nav className="relative flex gap-9 p-1.5 border-b border-[#B3B3B3]">
            <div className='flex gap-20'>
              {/* logo */}
              <div className="w-8 h-8 ml-6 bg-blue-700 rounded-full flex items-center justify-center">L</div>
              {/* icon - locaiton */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center"><img src="assets/icons/location.svg" alt="" /></div>
              {/* menu */}
              <div className="flex gap-11">
                  <span className='text-base font-normal hover:border-b-[2px] hover:border-blue-700 transition duration-300 ease-in-out cursor-pointer'>Home</span>
                  <span className='text-base font-normal hover:border-b-[2px] hover:border-blue-700 transition duration-300 ease-in-out cursor-pointer'>Sign In</span>
                  <span className='text-base font-normal hover:border-b-[2px] hover:border-blue-700 transition duration-300 ease-in-out cursor-pointer'>About</span>
                  <span className='text-base font-normal hover:border-b-[2px] hover:border-blue-700 transition duration-300 ease-in-out cursor-pointer'>Contact</span>
              </div>
            </div>
  
            {/* search group */}
            <div className="flex gap-4 ml-auto mr-40 lg:mr-56">
                <input className='px-3 py-1 outline-none border border-gray-500' type="text" placeholder="What are you looking for?" />
                <div><img src="assets/icons/wishlist.svg" alt="" /></div>
                <div><img src="assets/icons/cart.svg" alt="" /></div>
            </div>
        </nav>
    </div>
  )
}