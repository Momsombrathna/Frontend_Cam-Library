import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Feedback = () => {

    const [id, setID] = useState("");
    const [category,setCategory] = useState("");
    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");

    const navigate = useNavigate();


    //handle submit post data to api
    const handleSubmit = (e) => {
    e.preventDefault();
    let data = {id, category, title, message };
  
    fetch("https://testapi-9qwq.onrender.com/feedback", {
      method: "POST",
      headers: {
        "content-Type": "application/json"},
      body: JSON.stringify(data),
    }).then((res)=>{ 
      toast.success('Successful send form.');
      navigate('/homelogin')
  }).catch((err)=>{
      toast.error('Failed :'+err.message);
  });
  };
  
  return(
  <form>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Book Suggestion
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Please input Book Category, name, tittle and message.
            </p>
          </div>

          {/* section */}
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

              {/* id input */}
            <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="category" className="leading-7 text-sm text-gray-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value = {id}
                    name="category"
                    onChange={event=>setID(event.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>


              {/* Category input */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="category" className="leading-7 text-sm text-gray-600">
                    Book Category
                  </label>
                  <input
                    type="text"
                    value = {category}
                    name="category"
                    onChange={event=>setCategory(event.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Title Input */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="Title"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    value = {title}
                    name="title"
                    onChange={event=>setTitle(event.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for=""
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    value = {message}
                    name="message"
                    onChange={event=>setMessage(event.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={handleSubmit} className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-md text-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  )
};
export default Feedback;