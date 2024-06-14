import { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { Input } from 'antd';
import signUpImage from '/assets/merchSignUp.svg'
import createAccountIcon from '/assets/add-friend.png'


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
        state: "",
        pincode: "",
        address: "",
        // location: {
        //     type: "Point",
        //     coordinates: [0, 0]
        // }
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

    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        try {
            const url = `${process.env.API_URL}/api/merchant/signup`;
            const { data: res } = await axios.post(url, formData);
            navigate("/merch/signin");
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
            console.log('err', error);
        }
    }

    return (

        <div className='w-auto flex flex-col sm:flex-row  gap-4 ' style={{
            background: "linear-gradient(to right, #c9d6ff, #e2e2e2)", 'paddingBottom': '8px'
        }}>
            <div className='flex w-[100%] sm:w-[45%]'>
                <img src={signUpImage} className='w-[100%] h-[100%]' />
            </div>
            <div className='p-2 flex w-[100%] sm:w-[45%] flex-col ml-[4rem]'>
                <div className='flex flex-row gap-4 mt-3 text-sm' style={{'position': 'absolute', 'right': '6rem'}}>
                    <p className='mt-2 font-normal text-slate-600'>Have an account ?</p>
                    <Link to='/merch/signin'>
                        <button className='text-black font-semibold border rounded-lg bg-slate-300 pr-4 pl-4 pb-2 pt-2 text-center hover:opacity-70  hover:scale-105 transition-scale duration-300'>Sign In</button>
                    </Link>
                </div>
                <div className='mt-10 flex flex-row mx-auto gap-4'>
                    <span style={{
                        fontSize: '3.5vw',
                        fontWeight: '700',
                        backgroundImage: "linear-gradient(to left,#6b7280, #030712)",
                        backgroundSize: '100%',
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-1.5px',
                        wordSpacing: '-5px'
                    }} >List your Shop</span>
                    <span style={{
                        fontSize: '3.5vw',
                        fontWeight: '700',
                        backgroundImage: "linear-gradient(to left,#60a5fa, #1e40af)",
                        backgroundSize: '100%',
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-1.5px',
                        wordSpacing: '-5px'
                    }}>in On Walk</span>
                </div>
                <form className='p-[0.7rem] flex flex-col gap-4' >
                    <div className="flex gap-8">
                        <div className='flex flex-row w-1/2'>
                            <input required={true} type="text" placeholder="First Name" className="border w-full rounded-lg p-2 outline-none  " id="firstName" onChange={handleChange} />
                        </div>
                        <div className='flex flex-row w-1/2'>
                            <input required type="text" placeholder="Last Name" className="border w-full rounded-lg p-2 outline-none  " id="lastName" onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <input required type="number" placeholder="Phone no." className="border w-full rounded-lg p-2 outline-none  " id="phone" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <input required type="text" placeholder="Shop Name" className="border w-full rounded-lg p-2 outline-none  " id="shopName" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <input required type="text" placeholder="City" className="border w-full rounded-lg p-2 outline-none  " id="city" onChange={handleChange} />
                    </div>
                    <div className="flex gap-8">
                        <div className='flex flex-row w-1/2'>
                            <input required type="text" placeholder="State" className="border w-full rounded-lg p-2 outline-none  " id="state" onChange={handleChange} />
                        </div>
                        <div className='flex flex-row w-1/2'>
                            <input required type="text" placeholder="Pincode" className="border w-full rounded-lg p-2 outline-none  " id="pincode" onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <input required type="text" placeholder="Address" className="border w-full rounded-lg p-2 outline-none  " id="address" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <input required type="email" placeholder="Email" className="border w-full rounded-lg p-2 outline-none  " id="email" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Input.Password required placeholder="password" className="border w-full rounded-lg p-2 outline-none " id="password" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row gap-4'>
                        <button onClick={handleSubmit} className='border w-[50%] mx-auto rounded-lg mt-5 bg-blue-400 pr-4 pl-4 pb-2 pt-2  hover:opacity-90  hover:scale-105 transition-scale duration-300'>
                            <div className='flex flex-row gap-4 justify-center'>
                                <p className='text-white font-semibold flex items-center'>Create your Account</p>
                                <img src={createAccountIcon} className='w-8 h-8 ' />
                            </div>
                        </button>
                    </div>
                    {error && <p>{error}</p>}

                </form>
            </div>
        </div>

        // <main className="flex flex-col w-full border-slate-700 pb-40">
        //     <div aria-label="page-container" className="flex flex-col items-center mt-12">
        //         <div aria-label="form-container" className="flex flex-col">
        //             <div className="font-medium text-4xl text-[#3958FA]">Enter your details to register your store</div>

        //             <div aria-label="form-content" className="mt-5 flex flex-col gap-3">
        //                 <div className="input-group flex flex-col gap-2">
        //                     <label htmlFor="name" className="text-[#3958FA] text-base after:content-['*'] after:text-[#EF2121]">First Name</label>
        //                     <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="firstName" onChange={handleChange} />
        //                 </div>

        //                 <div className="input-group flex flex-col gap-2">
        //                     <label htmlFor="name" className="text-[#3958FA] text-base after:content-['*'] after:text-[#EF2121]">Last Name</label>
        //                     <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="lastName" onChange={handleChange} />
        //                 </div>

        //                 <div className="input-group flex flex-col gap-2">
        //                     <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Email Address</label>
        //                     <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="email" onChange={handleChange} />
        //                 </div>

        //                 <div className="input-group flex flex-col gap-2">
        //                     <label htmlFor="name" className="text-[#3958FA] text-base after:content-['*']">Password</label>
        //                     <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="password" onChange={handleChange} />
        //                 </div>

        //                 <div className="input-group flex flex-col gap-2">
        //                     <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Name of your shop</label>
        //                     <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="shopName" onChange={handleChange} />
        //                 </div>

        //                 <div className="input-group flex flex-col gap-2">
        //                     <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Phone Number</label>
        //                     <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="phone" onChange={handleChange} />
        //                 </div>

        //                 <div className="input-group flex flex-col gap-2">
        //                     <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">City</label>
        //                     <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="city" onChange={handleChange} />
        //                 </div>
        //                 <div className="input-group flex flex-col gap-2">
        //                     <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">State</label>
        //                     <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="state" onChange={handleChange} />
        //                 </div>

        //                 <div className="input-group flex flex-col gap-2">
        //                     <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Pincode</label>
        //                     <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="pincode" onChange={handleChange} />
        //                 </div>

        //                 <div className="input-group flex flex-col gap-2">
        //                     <label htmlFor="name" className="text-slate-500 text-base after:content-['*']">Address</label>
        //                     <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" id="address" onChange={handleChange} />
        //                 </div>


        //                 <button className="btn mt-4" onClick={handleFormSubmit}>Become a partner</button>


        //             </div>
        //         </div>

        //     </div>

        // </main>
    )
}