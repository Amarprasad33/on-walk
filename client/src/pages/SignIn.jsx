import { useState } from 'react'
import signInImage from '/assets/girl_phone.svg'
import createAccountIcon from '/assets/add-friend.png'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from 'antd';
import { GoogleOutlined } from '@ant-design/icons'
import axios from 'axios';




export const SignIn = () => {
    
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [formData, setFromData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setFromData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    // console.log(formData);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
		try {
			const url = `${process.env.API_URL}/api/merchant/signin`;
			const { data: res } = await axios.post(url, formData);
			localStorage.setItem("token", res.data);
			window.location = "/student";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
            console.log('err', error)
		}
    };
    return (
        <div className='w-auto flex flex-col sm:flex-row  gap-4 h-screen' style={{
            background: "linear-gradient(to right, #c9d6ff, #e2e2e2)",
        }}>
            <div className='flex w-[100%] sm:w-[55%]'>
                <img src={signInImage} className='w-[100%] h-[100%]' />
            </div>
            <div className='relative p-2 flex w-[100%] sm:w-[45%] flex-col justify-center'>
                <div className='flex flex-row gap-4 mt-3 text-sm fixed top-2'>
                    <p className='mt-2 font-normal text-slate-600'>Don&apos;t have an account ?</p>
                    <Link to='/signup'>
                        <button className='text-black font-semibold border border-[#1e2222] rounded-lg bg-inherit pr-4 pl-4 pb-2 pt-2 text-center hover:opacity-70  hover:scale-105 transition-scale duration-300'>Sign Up</button>
                    </Link>
                </div>
                <div className='flex flex-col'>
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
                        }} >Sign In to</span>
                        <span style={{
                            fontSize: '3.5vw',
                            fontWeight: '700',
                            backgroundImage: "linear-gradient(to left,#60a5fa, #1e40af)",
                            backgroundSize: '100%',
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-1.5px',
                            wordSpacing: '-5px'
                        }}>On Walk</span>
                    </div>
                    <form className='p-6 flex flex-col gap-4' >
                        
                        <div className='flex flex-row gap-2'>
                            <label className='text-slate-600 w-[15%] mt-2'>Email : </label>
                            <input type="email" placeholder="Email" className="border w-[85%] rounded-lg p-2 outline-none  " id="email" onChange={handleChange} />
                        </div>
                        <div className='flex flex-row gap-2'>
                            <label className='text-slate-600 w-[15%] mt-2'>Password : </label>
                            <Input.Password placeholder="" className="border w-[85%] rounded-lg p-2 outline-none " id="password" onChange={handleChange} />
                        </div>
                        
                        <div className='flex flex-row gap-4'>
                            <button onClick={handleSubmit} className='border w-[50%] mx-auto rounded-lg mt-5 bg-blue-400 pr-4 pl-4 pb-2 pt-2  hover:opacity-90  hover:scale-105 transition-scale duration-300'>
                                <div className='flex flex-row gap-4 justify-center'>
                                    <p className='text-white font-semibold flex items-center'>Sign In</p>
                                    <img src={createAccountIcon} className='w-8 h-8 ' />
                                </div>
                            </button>
                            <button onClick={handleSubmit} className='border w-[50%] mx-auto rounded-lg mt-5 border-[#60a5fa] bg-white pr-4 pl-4 pb-2 pt-2  hover:opacity-90  hover:scale-105 transition-scale duration-300'>
                                <div className='flex flex-row gap-4 justify-center'>
                                    <p className='text-blue-400 font-semibold flex items-center'>Sign in from Google</p>
                                    <GoogleOutlined style={{ fontSize: '30px', color: '#60a5fa' }} />
                                </div>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}