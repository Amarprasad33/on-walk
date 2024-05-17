export default function StoreManager() {
  return (
    <div id="store-manager-page" className="relative w-full h-screen">
          
          <div className="flex flex-col items-center text-center" >
            
  
            <div className="text-2xl w-[50%] mt-12">
              Hey There!
            </div>
  
            <button className="p-6 w-[28rem] bg-[#2238FF] rounded-md text-slate-100 mt-24" style={{'background': 'linear-gradient(28deg, rgba(29, 209, 221, 1) 0%, rgba(37, 178, 187, 1) 20%, rgba(34, 56, 255, 1) 42%, rgba(137, 52, 222, 1) 69%, rgba(211, 25, 214, 1) 100%)'}}>
                Manage your registered shop
            </button>
            <button className="p-6 w-[28rem] bg-[#2238FF] rounded-md text-slate-100 mt-24">View sales at your shop</button>
          </div>
    </div>
  )
}