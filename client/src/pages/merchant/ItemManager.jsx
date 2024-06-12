import { useEffect, useState } from "react";
import NavbarAfterLogin from "../../components/NavbarAfterLogin";

export default function ItemManager() {
    let [arr, setArr] = useState([]);
    function addItems(){
        let newArr = [...arr];
        for(let i = 1; i <= 100; i++){
            newArr.push(i);
        }
        setArr(newArr);
    }
    useEffect(() => {
        addItems();

    }, []);
    return (
        <div id="main-landing-page" className="relative w-full flex flex-col h-screen  border border-blue-600">
            <NavbarAfterLogin />
            <div className="flex flex-col gap-6 items-center text-center max-h-[88vh] overflow-y-scroll" style={{'position': 'relative'}} >
                {arr.map((item) => (
                    <div key={item} id={`item-card-${item}`} className="w-[75%] p-3  rounded-lg shadow-xl">
                        <div className="flex gap-10 items-center">
                            <div id="img-container" className="w-[20%] h-[10rem] bg-center bg-cover bg-[url('/assets/no-preview.png')]"></div>
                            <div id="item-details" className="flex flex-col gap-4 items-baseline">
                                <div>Item name: </div>
                                <div>Catetogy: </div>
                                <div>Price: </div>
                            </div>
                            <div id="item-action-btns" className="ml-auto mr-10">
                                <h4>Quantity</h4>
                                <div id="quantity" className="flex gap-[6px] bg-blue-600 text-white p-1 rounded-md">
                                    <button className="px-1.5 hover:scale-150">-</button>
                                    <div className="px-1.5">{2}</div>
                                    <button className="px-1.5 hover:scale-150">+</button>
                                </div>
                                <button className="flex gap-[10px] items-center font-medium text-[1.2rem] border border-black mt-[14px] py-[4px] px-[8px] rounded-md hover:scale-110 transition-all duration-200" >
                                    <div id="icon" className=" bg-center bg-cover h-[1.5rem] w-[1.5rem] bg-[url('/assets/icons/setting.png')]"></div>
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div id="action-btns" className="mt-1 mb-2 flex gap-4 items-center self-center">
                <button className="p-2 w-[18rem] bg-[#2238FF] rounded-md text-slate-100 hover:scale-90 transition-all duration-300" style={{'background': 'linear-gradient(28deg, rgba(29, 209, 221, 1) 0%, rgba(37, 178, 187, 1) 20%, rgba(34, 56, 255, 1) 42%, rgba(137, 52, 222, 1) 69%, rgba(211, 25, 214, 1) 100%)'}}>
                    Add a new item
                </button>
                <button className="flex gap-[10px] items-center font-medium text-[1.2rem] border border-black py-[4px] px-[8px] rounded-md hover:scale-110 transition-all duration-200" >
                    <span>Save</span>
                </button>
            </div>
            
        </div>
    )
}