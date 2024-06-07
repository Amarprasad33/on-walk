import { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function CreateStore() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [formData, setFromData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        shopName: "",
        phone: "",
        city: "",
        state: 0,
        pincode: "",
        address: ""
    });

    // "firstName": "John",
    // "lastName": "Doe",
    // "email": "john.doe@exampe.com",
    // "password": "password123AP@",
    // "shopName": "John Shop",
    // "phone": "1234567890",
    // "city": "New Yor",
    // "state": "New York",
    // "pincode": "10001",
    // "address": "123 Main St"
    const handleChange = (e) => {
        setFromData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    const handleFormSubmit = async () => {
        console.log("formMerchant", formData);
        let dummy = {
            firstName: "sahil",
            lastName: "kumar",
            email: "sahisdwl@gmail.com",
            password: "44S@hil44"        };
        // e.preventDefault();
		try {
			const url = `https://assumes-outlook-faq-newbie.trycloudflare.com/api/users`;
			const { data: res } = await axios.post(url, dummy);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    }

  return (
    <main className="flex flex-col w-full border-slate-700 pb-40">
        <Navbar />
        <div aria-label="page-container" className="flex flex-col items-center mt-12">
            <div aria-label="form-container" className="flex flex-col">
                <div className="font-medium text-4xl text-[#3958FA]">Enter your details</div>

                <div aria-label="form-content" className="mt-5 flex flex-col gap-3">
                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-[#3958FA] text-base after:content-['*'] after:text-[#EF2121]">First Name</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="firstName" onChange={handleChange}/>
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-[#3958FA] text-base after:content-['*'] after:text-[#EF2121]">Last Name</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="lastName" onChange={handleChange} />
                    </div>
                    
                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Email Address</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="email" onChange={handleChange} />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-[#3958FA] text-base after:content-['*']">Password</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="password" onChange={handleChange} />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Name of your shop</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="shopName" onChange={handleChange} />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Phone Number</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="phone" onChange={handleChange} />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">City</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="city" onChange={handleChange} />
                    </div>
                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">State</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="state" onChange={handleChange} />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Pincode</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="pincode" onChange={handleChange} />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Address</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="address" onChange={handleChange} />
                    </div>

                   
                    <button className="btn mt-4" onClick={handleFormSubmit}>Become a partner</button>

                    
                </div>
            </div>

        </div>
        
    </main>
  )
}