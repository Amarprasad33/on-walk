import axios from "axios";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function StoreManager() {
  const navigate = useNavigate();
  /* 
    `https://assumes-outlook-faq-newbie.trycloudflare.com/api/getmerchant`
    const getUser = async ()=>{
        try {
          const token = localStorage.getItem("token");
          const url = "http://localhost:8080/api/getdata";
          const { data: res } = await axios.post(url, {token:token});
          setUserName(res.firstname+" "+res.lastname);
          setShow(true);
        } catch (error) {
          console.log(error);
        }
      }

      const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
      };
  */

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const url = `${process.env.API_URL}/api/getmerchant`;
        const res = await axios.post(url, { token: token });
        console.log('res', res);
        // setUserName(res.firstname+" "+res.lastname);
        // setShow(true);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, [])

  return (
    <div id="store-manager-page" className="relative w-full h-screen">

      <div className="flex flex-col items-center text-center" >


        <div className="text-2xl w-[50%] mt-12">
          Hey There!
        </div>

        <button className="p-6 w-[28rem] bg-[#2238FF] rounded-md text-slate-100 mt-24" onClick={() => navigate('/merch/manage/items')} style={{ 'background': 'linear-gradient(28deg, rgba(29, 209, 221, 1) 0%, rgba(37, 178, 187, 1) 20%, rgba(34, 56, 255, 1) 42%, rgba(137, 52, 222, 1) 69%, rgba(211, 25, 214, 1) 100%)' }}>
          Manage your registered shop
        </button>
        <button className="p-6 w-[28rem] bg-[#2238FF] rounded-md text-slate-100 mt-24" onClick={() => navigate('/merch/additem')}>List your Items</button>
      </div>
    </div>
  )
}