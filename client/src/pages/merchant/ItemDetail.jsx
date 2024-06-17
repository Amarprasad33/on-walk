import { useState } from "react"

export default function ItemDetail() {
    const [images, setImages] = useState([]);

    const [itemFormData, setItemFormData] = useState({
        // name: '',
        // category: '',
        // brand: '',
        // price: '',
        // color: '',

    });

    const handleImageUpload = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);
    }

    const categoryList = [
        "Clothing", "Electronics", "Home Decor", "Beauty", "Sports", "Stationery", "Grocery", "Furniture", "Automotive", "Health & Wellness", "Pets & Supplies", "Books & Literature", "Jewelry & Accessories", "Art & Crafts", "Toys & Games", "Food & Beverages", "Fitness & Gym", "Travel & Tourism", "Technology & Gadgets", "Music & Entertainment", "Fashion & Apparel"
    ];

    return (
        <div aria-label="page-container" className="flex flex-col items-center  mt-12">
            <div className="font-medium text-4xl text-[#3958FA]">Enter details of the item</div>
            <div className="mt-5 flex flex-row gap-3 w-[75%]">
                <div aria-label="form-content" className="mt-5 flex flex-col gap-3 w-[50%]">
                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-[#3958FA] text-base after:content-['*'] after:text-[#EF2121]">Name of the item</label>
                        <input className="outline-none  p-3 rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*'] after:text-[#EF2121]">Category</label>
                        {/* <input className="flex  outline-none  p-3 rounded-md bg-[#F5F5F5]" type="text" /> */}
                        <select id="category" name="category" onChange={(e) => console.log("New V", e.target.value)} className="flex outline-none p-3 rounded-md bg-[#F5F5F5] pr-1">
                            <option value="" disabled selected>Select a category</option>
                            {categoryList.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
                        </select>
                    </div>
                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base">Item brand</label>
                        <input className="flex outline-none  p-3 rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base after:content-['*'] after:text-[#EF2121]">Price</label>
                        <input className=" outline-none p-3  rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base">Item color</label>
                        <input className=" outline-none p-3  rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base">Item description</label>
                        <input className=" outline-none p-3  rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-[#3958FA] text-base ">Item discounted price</label>
                        <input className=" outline-none p-3  rounded-md bg-[#F5F5F5]" type="text" />
                    </div>

                    <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base">Item sizes avaliable</label>
                        <input className=" outline-none p-3  rounded-md bg-[#F5F5F5]" type="text" />
                    </div>
                </div>
                <div aria-label="form-content" className="mt-5 flex flex-col gap-3 w-[50%]">
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




                    {/* <div className="input-group flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 text-base">Upload images for the item(optional)</label>
                        <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="file" />
                        <input
                                className="outline-none p-3 rounded-md bg-[#F5F5F5] text-[#333] text-lg font-bold hover:bg-[#E5E5E5] hover:text-[#333] hover:cursor-pointer"
                                type="file"
                            />
                    </div> */}
                </div>

            </div>

            

            <div id="image_upload" className="flex items-center mb-8 mt-8 gap-5">
                <div className="flex flex-col gap-3">
                    <div id="main-image-container" className="w-[24rem] h-[24rem] flex justify-center items-center rounded-3xl" style={{ "outline": '2px dashed blue', "outlineDashArray": '15px 10px' }}>
                        <img src={images.length > 0 ? URL.createObjectURL(images[0]) : '/assets/image-upload.png'} className="w-full h-full object-cover rounded-3xl bg-cover bg-center" height={200} width={200} alt="" />
                    </div>
                    <div className="flex gap-2">
                    {images.map((image, index) => (

                        <div  id="other-images" key={index} className="w-[4rem] h-[4rem] rounded-lg">
                            <img
                                src={URL.createObjectURL(image)}
                                alt={`uploaded preview ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg    "
                            />
                            {/* <p className="text-center text-sm text-gray-700">{image.name}</p> */}
                        </div>
                    ))}
                        {/* <div id="other-images" className="w-[4rem] h-[4rem] border border-red-700">

                        </div>
                        <div id="other-images" className="w-[4rem] h-[4rem] border border-red-700">

                        </div> */}
                    </div>
   
                </div>
                <div className="input-group flex flex-col gap-2">
                    <label htmlFor="name" className="text-slate-500 text-base">Upload images for the item(optional)</label>
                    <input className=" outline-none p-3 rounded-md bg-[#F5F5F5]" type="file" id="file-upload" multiple onChange={handleImageUpload}/>
                    {/* <input
                            className="outline-none p-3 rounded-md bg-[#F5F5F5] text-[#333] text-lg font-bold hover:bg-[#E5E5E5] hover:text-[#333] hover:cursor-pointer"
                            type="file"
                        /> */}
                </div>
                
            </div>

            <div className="self-center mt-6">
                <button className="p-2 mb-5 px-20 bg-[#2238FF] rounded-md text-slate-100">Create</button>
            </div>


        </div>
    )
}


/*
 // For showing multiple files

 {files.map((file, index) => (
          <div key={index} className="card bg-white p-4 rounded-lg shadow-md">
            <img
              src={URL.createObjectURL(file)}
              alt={`uploaded preview ${index + 1}`}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="text-center text-sm text-gray-700">{file.name}</p>
          </div>
        ))}


*/