import { useState } from "react"

export default function ItemDetail() {

    const [itemFormData, setItemFormData] = useState({
        // name: '',
        // category: '',
        // brand: '',
        // price: '',
        // color: '',

    });

    return (
      <div>
            <div aria-label="page-container" className="flex flex-col items-center mt-12">
                <div aria-label="form-container" className="flex flex-col">
                    <div className="font-medium text-4xl text-[#3958FA]">Enter details of the item</div>

                    <div aria-label="form-content" className="mt-5 flex flex-col gap-3">
                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-[#3958FA] text-base after:content-['*'] after:text-[#EF2121]">Name of the item</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>
                        
                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base after:content-['*'] after:text-[#EF2121]">Category</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>
                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item brand</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base after:content-['*'] after:text-[#EF2121]">Price</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item color</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item description</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-[#3958FA] text-base ">Item discounted price</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item sizes avaliable</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item Material</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item gender</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item rating</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item quantity</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item avaliable in stock</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Model number</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>
                        
                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item weight</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Item waranty</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="text" />
                        </div>




                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-500 text-base">Upload images for the item(optional)</label>
                            <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="file" />
                            {/* <input
                                className="outline-none p-3 rounded-md bg-[#F5F5F5] text-[#333] text-lg font-bold hover:bg-[#E5E5E5] hover:text-[#333] hover:cursor-pointer"
                                type="file"
                            /> */}
                        </div>
                        
                        <div className="self-center mt-6">
                            <button className="p-2 px-20 bg-[#2238FF] rounded-md text-slate-100">Create</button>
                        </div>

                        
                    </div>
                </div>
            </div>
      </div>
    )
  }