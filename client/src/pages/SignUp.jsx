import { useState } from 'react'
import signUpImage from '/assets/boy_map.svg'
import createAccountIcon from '/assets/add-friend.png'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from 'antd';
import { GoogleOutlined } from '@ant-design/icons'
const { TextArea } = Input;



export const SignUp = () => {
    const [formData, setFromData] = useState({
        name: "",
        phone: 0,
        email: "",
        password: "",
        address: [],
        // role: "buyer",
    });
    const handleChange = (e) => {
        // if (e.target.id === "seller" || e.target.id === "buyer") {
        //     setFromData({
        //         ...formData,
        //         role: e.target.id,
        //     });
        // }
        if (e.target.id === "address") {
            setFromData({
                ...formData,
                [e.target.id]: [...formData.address, e.target.value],
            });
        }
        else {
            setFromData({
                ...formData,
                [e.target.id]: e.target.value,
            });
        }
    };
    // console.log(formData);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // try {
		// 	const url = "process.env.api_url/api/users";
		// 	const { data: res } = await axios.post(url, data);
		// 	navigate("/student/signin");
		// 	console.log(res.message);
		// } catch (error) {
		// 	if (
		// 		error.response &&
		// 		error.response.status >= 400 &&
		// 		error.response.status <= 500
		// 	) {
		// 		setError(error.response.data.message);
		// 	}
		// }

    };
    return (
        <div className='w-auto flex flex-col sm:flex-row  gap-4 h-screen ' style={{
            background: "linear-gradient(to right, #c9d6ff, #e2e2e2)",
        }}>
            <div className='flex w-[100%] sm:w-[55%]'>
                <img src={signUpImage} className='w-[100%] h-[100%]' />
            </div>
            <div className='p-2 flex w-[100%] sm:w-[45%] flex-col'>
                <div className='flex flex-row gap-4 mt-3 text-sm'>
                    <p className='mt-2 font-normal text-slate-600'>Have an account ?</p>
                    <Link to='/signin'>
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
                    }} >Sign Up to</span>
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
                        <label className='text-slate-600 w-[15%] mt-2'>User Name : </label>
                        <input type="text" placeholder="Name" className="border w-[85%] rounded-lg p-2 outline-none  " id="name" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-slate-600 w-[15%] mt-2'>Phone no. : </label>
                        <input type="number" placeholder="Phone no." className="border w-[85%] rounded-lg p-2 outline-none  " id="phone" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-slate-600 w-[15%] mt-2'>Email : </label>
                        <input type="email" placeholder="Email" className="border w-[85%] rounded-lg p-2 outline-none  " id="email" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-slate-600 w-[15%] mt-2'>Password : </label>
                        <Input.Password placeholder="" className="border w-[85%] rounded-lg p-2 outline-none " id="password" onChange={handleChange} />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-slate-600 w-[15%] mt-2'>Address : </label>
                        <TextArea placeholder="Address" className="border w-[85%] rounded-lg p-2 outline-none " id="address" onChange={handleChange} />
                    </div>
                    {/* <div className='flex flex-row gap-2'>
                        <label className='text-slate-600 w-[15%] mt-2'>Role :</label>
                        <div className='flex flex-wrap gap-6'>
                            <div className="flex gap-2">
                                <input type="checkbox" id="buyer" className="w-5" onChange={handleChange} checked={formData.role === "buyer"} />
                                <span className='text-slate-600 mt-1'>Customer</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id="seller" className="w-5 " onChange={handleChange} checked={formData.role === "seller"} />
                                <span className='text-slate-600 mt-1'>Shopper</span>
                            </div>
                        </div>
                    </div> */}
                    <div className='flex flex-row gap-4'>
                        <button onClick={handleSubmit} className='border w-[50%] mx-auto rounded-lg mt-5 bg-blue-400 pr-4 pl-4 pb-2 pt-2  hover:opacity-90  hover:scale-105 transition-scale duration-300'>
                            <div className='flex flex-row gap-4 justify-center'>
                                <p className='text-white font-semibold flex items-center'>Create your Account</p>
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
    )
}
