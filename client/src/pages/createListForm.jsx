import { useState } from "react";
import { useRef } from "react";



function CreateList() {
     const [ishowDropDown,setishowDropDown]=useState(false)
     const fileRef= useRef()

  return (
     <div className=" container mb-5 shadow-sm rounded-xl pb-5  mt-2 bg-slate-200 flex flex-col justify-center  w-[100%] lg:w-[80%] m-auto">
          <div className="image  w-full flex justify-center mb-5  relative">
               <img className="w-full  rounded-xl h-[400px] opacity-80" src="https://images.unsplash.com/photo-1670589953903-b4e2f17a70a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" alt="form image" />
                <header className="absolute  bg-slate-200 w-full text-center py-2  -bottom-4 text-4xl capitalize">
                    <h1 className="text-slate-700 text-shadow-xl">real estate form</h1>
                </header>
              </div>
               <div className="form-container  w-[90%]  m-auto">
                    <form  className="form flex flex-col justify-center   p-3 w-full mt-4">

                    <div className="group-one flex justify-center w-full ">
                         <input type="text"  id="name" className=" bg-white w-full focus:outline-slate-500 focus:bg-gray-100  rounded-md mx-3  p-3 box-sizing-border-box" placeholder="product name" />    
                    </div>

                    <div className="group-2-address mt-4">
                         <h1 className="text-black mx-3 mb-3 text-3xl text-start capitalize">address</h1>

                           <div className="grid lg:grid-cols-1  sm:grid-cols-1">
                              <input type="text" id="country" className="bg-white focus:outline-slate-500 focus:bg-gray-100    m-3 p-3 rounded-md" placeholder="country name" />
                              <input type="text" id="province" className="bg-white focus:outline-slate-500 focus:bg-gray-100  m-3 p-3 rounded-md" placeholder="province/state" />
                          </div>

                         <div className="grid lg:grid-cols-3  sm:grid-cols-1">
                              <input type="text" id="city" className="bg-white focus:outline-slate-500 focus:bg-gray-100    m-3 p-3 rounded-md" placeholder="city name" />
                              <input type="text" id="district" className="bg-white focus:outline-slate-500 focus:bg-gray-100    m-3 p-3 rounded-md" placeholder="destrict" />
                              <input type="text" id="zipcode" className="bg-white focus:outline-slate-500 focus:bg-gray-100    m-3 p-3 rounded-md" placeholder="zipcode" />
                         </div>
                    </div>


                    <div className=" group-3 mt-4 mx-3">
                          <h1 className="text-black mx-3 mb-4  text-3xl text-start capitalize">proporties features</h1>

                          <div className="grid gap-2 w-full grid grid-cols-2">
                               <div className="flex flex-col justify-center    gap-1">
                                          <label htmlFor="bedroom" className="text-[17px]  ml-1 text-slate-500 capitalize">bedroom</label>   
                                         <input type="number" id="bedroom" className="bg-white  focus:outline-slate-500 focus:bg-gray-100 text-center    p-1 rounded-md" min={0} />
                                  </div>
                                  <div className="flex flex-col   lg:w-full  justify-center  gap-1">
                                          <label htmlFor="bathroom" className="text-[17px] ml-1 text-slate-500 capitalize">bathroom</label>   
                                         <input type="number" id="bedroom" className="bg-white  focus:outline-slate-500 focus:bg-gray-100  text-center   p-1 rounded-md" min={0} />
                                  </div>
                          </div>



                         <div className="grid md:grid-cols-6 grid-cols-2 sm:grid-rows-2  gap-x-3 mt-3">

                                  <div className="flex items-center gap-2  mt-6">
                                          <label htmlFor="bathroom" className="text-[17px] text-slate-500 ml-1 capitalize">kitchen</label>  
                                          <input type="checkbox" id="kitchen" className="w-5 h-5"  />      
                                  </div>

                                  <div className="flex items-center gap-2  mt-6">
                                          <label htmlFor="parking" className="text-[17px] text-slate-500 ml-1 capitalize">parking</label>  
                                          <input type="checkbox" id="parking" className="w-5 h-5"  />  
                                  </div>

                                  <div className="flex items-center gap-2  mt-6">
                                          <label htmlFor="elevater" className="text-[17px] text-slate-500 ml-1 capitalize">elevater</label>  
                                          <input type="checkbox" id="elevater" className="w-5 h-5"  /> 
                                  </div>

                                  <div className="flex items-center gap-2  mt-6">
                                          <label htmlFor="furnished" className="text-[17px] text-slate-500 ml-1 capitalize">furnished</label>  
                                          <input type="checkbox" id="furnished" className="w-5 h-5"  /> 
                                        
                                  </div>

                         </div>
                    </div>

                    <div className="mt-4">
                    <h1 className="text-black  text-2xl text-start capitalize">price Detail</h1>
                         <div className="price-detail mt-3">
                              <input type="number" min={0} placeholder="sale price" id="price" className="bg-white focus:outline-slate-500 focus:bg-gray-100  mr-2 mb-3 p-3 rounded-md" />
                              <input type="number" min={0} placeholder="discount price" id="discountprice m-2" className="bg-white focus:outline-slate-500 focus:bg-gray-100  p-3 rounded-md" />
                         </div>
                    </div>
                   
                    <div className="mt-3">
                          <h1 className="text-black mx-3  text-xl text-start capitalize">type</h1>
                         <ul onClick={()=>setishowDropDown(!ishowDropDown)} className="dropdown flex justify-between items-center w-50 relative bg-white mt-2 py-2 px-2  hover:bg-gray-100 cursor-pointer rounded-md ">
                                   select type
                                   <div>
                                      <svg className="rotate-90 text-slate-600 text-[17px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19V5l11 7z" /></svg>
                                   </div>

                                   <ul className={`drodown-list rounded-md ${!ishowDropDown && "hidden"} absolute w-50 left-0 transition-all ${ishowDropDown ? "-bottom-2":"-bottom-20"}  bg-white`}>
                                           <li  className="drodown-item py-2 px-2 hover:bg-gray-100">Rent</li>
                                           <li  className="dropdown-item py-2 px-2 hover:bg-gray-100">sale</li>
                                   </ul>
                         </ul>

                    </div>
                       
                         <div className="grid grid-cols-1 lg:grid-cols-2  gap-2  mt-3 ">
                             <div className="h-50 ">
                              <label htmlFor="description " className="capitalize text-xl ">description</label>
                               <div className="w-full h-[80%] mt-1 p-2 bg-white rounded-md">
                                   <textarea  placeholder="description"  className="bg-white w-full rounded-md resize-none p-2 focus:outline-slate-500 focus:bg-gray-100  transition-all h-full  " name="description" id="discription">
                                </textarea>
                              </div>
                             </div>
                              <div className="w-full  flex items-center   items-center">
                                   <div className="bg-gray-100  self-end w-full -translate-y-2 h-40 rounded-md  flex justify-center items-center">
                                        <input hidden type="file" ref={fileRef} id="file"  accept="image/*" />
                                      <div onClick={()=>fileRef.current.click()}  className="border-2  bg-slate-200 hover:bg-slate-300 text-center h-30 flex justify-center items-center w-[100%] h-full border-2 border-dotted">
                                          <svg className="text-4xl " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8v2H5v14h14v-8h2v8q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13zm11-8V7h-2V5h2V3h2v2h2v2h-2v2z" /></svg>
                                      </div>
                                   </div>
                            </div>
                    </div>

                    <div className="flex gap-3 justify-end mt-20">
                         <button type="reset" className="p-2 w-[30%] capitalize cursor-pointer  border-2    border-red-700 text-red-700  cursor-pointer  hover:opacity-90 transition-all text-xl text-red-500  outline-none hover:bg-red-700 hover:text-white rounded-md">clear form</button>
                    
                         <button type="submite" className="p-2 w-[30%] capitalize cursor-pointer  border-2  xl-[30%] bg-slate-700 text-white cursor-pointer  hover:opacity-90 transition-all border-none outline-none text-xl rounded-md  ">create List</button>
                    </div>
                    
                    </form>
               </div>
     </div>
  )
}

export default CreateList;





