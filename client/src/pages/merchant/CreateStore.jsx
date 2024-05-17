import { useState } from "react";
import Navbar from "../../components/Navbar";


export default function CreateStore() {
    const [formData, setFromData] = useState({
        merchantName: "",
        shopName: "",
        category: "",
        address: "",
        city: "",
        state: "",
        phone: 0,
        email: ""
    });

  return (
    <main className="flex flex-col w-full border-slate-700 pb-40">
        <Navbar />
        <div aria-label="page-container" className="flex flex-col items-center mt-12">
            <div aria-label="form-container" className="flex flex-col">
                <div className="font-medium text-4xl text-[#3958FA]">Enter your store details</div>

                <div aria-label="form-content" className="mt-5 flex flex-col gap-3">
                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-[#3958FA] text-base after:content-['*'] after:text-[#EF2121]">Your Name</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                    </div>
                    
                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Name of your shop</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-[#3958FA] text-base after:content-['*']">Category of shop</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Address of shop</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Town/City</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">State</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Phone Number</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Email Address</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                    </div>
                </div>
            </div>

        </div>
        
    </main>
  )
}