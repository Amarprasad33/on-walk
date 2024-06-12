import { Link } from "react-router-dom";

export default function MerchantLanding() {
    return (
      <main className="flex flex-col items-center">
        <div id="main-landing-page" className="relative w-full h-screen">
          <div id="bg" className="absolute h-screen w-full object-cover bg-center -z-10 blur-[1px] -top-8 bg-[url('/assets/Group-background-img.png')]" >
            {/* <img src="/Group-background-img.png" alt="" /> */}
          </div>
          <div className="flex flex-col items-center text-center" >
            <div className="text-7xl font-semibold w-[75%] mt-32">
              Boost Your Sales with Our Local Store Discovery App
            </div>
  
            <div className="text-2xl w-[50%] mt-12">
              Join our local store discovery app and connect with nearby customers looking for your products!
            </div>
            <Link to='/merch/manage/'>        
                <button className="p-6 px-36 bg-[#2238FF] rounded-md text-slate-100 mt-24" >Get Started</button>
            </Link>
          </div>
        </div>
  
        <div id="Features-panel" className="w-[80%] flex gap-20 h-screen flex gap-4 ">
          <div id="features-container" className="w-[60%] flex flex-col justify-center gap-5">
            <div className="text-2xl ">Why OnWalk?</div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 text-lg font-semibold">
                <span>1.</span>
                <span>Instant Visibility: Reach shoppers actively searching for products like yours in their area.</span>
              </div>
              <div className="flex gap-2 text-lg font-semibold">
                <span>2.</span>
                <span>Easy Setup: Simple registration process - list your store and start attracting customers in minutes.</span>
              </div>
              <div className="flex gap-2 text-lg font-semibold">
                <span>3.</span>
                <span>Increased Foot traffic: Drive more customers to your store and increase sales with our user-friendly app.</span>
              </div>
            </div>
          </div>
  
          <div className="feature-img w-[30%] h-[28rem] self-center bg-center bg-cover bg-[url('/assets/map-feature.jpg')]" ></div>
        </div>
  
        <div id="merchant-review-panel" className="w-[80%] h-screen flex flex-col items-center justify-center gap-4 ">
            <div className="text-3xl mb-8">Our Proud Merchants</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-center">
                    <div className="w-[20%] h-[10rem] bg-center bg-cover bg-[url('/assets/merch-1.jpg')]"></div>
                    <div className="text-xl font-medium w-[80%]">Listing our store on the app boosted foot traffic and sales significnatly. A must-have tool for local businesses!</div>
                </div>

                <div className="flex gap-4 items-center">
                    <div className="w-[20%] h-[10rem] bg-center bg-cover bg-[url('/assets/merch-2.jpg')]"></div>
                    <div className="text-xl font-medium w-[80%]">&quot;The app effortlessly connects us wtith nearby shoppers, enhancing our visibility and sales. A game-changer for our store!&quot;</div>
                </div>
            </div>
        </div>
      </main> 
    )
  }