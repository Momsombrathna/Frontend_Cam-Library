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
      <section className="text-gray-700 body-font">
          <form onSubmit={handleSubmit} className="container px-5 py-24 mx-auto">
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
                      <label for="category" className="leading-7 text-md font-medium pl-2 text-gray-600">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value = {id}
                        name="category"
                        onChange={e=>setID(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                  </div>


                  {/* Category input */}
                  <div className="p-2 w-1/2">
                      <label for="category" className="leading-7 text-md font-medium pl-2 text-gray-600">
                        Book Category
                      </label>
                      <input
                        type="text"
                        value = {category}
                        name="category"
                        onChange={e=>setCategory(e.target.value)}
                        placeholder="Enter book category name"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                  </div>

                  {/* Title Input */}
                  <div className="p-2 w-full">
                      <label for="tittle" className="leading-7 text-md font-medium pl-2 text-gray-600">
                        Tittle
                      </label>
                      <input
                        type="text"
                        value = {title}
                        name="title"
                        onChange={e=>setTitle(e.target.value)}
                        placeholder="Enter book tittle "
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                  </div>

                  {/* Message Input */}
                  <div className="p-2 w-full">
                      <label for="mesage"className="leading-7 text-md font-medium p-2 text-gray-600">
                        Message
                      </label>
                      <textarea
                        value = {message}
                        name="message"
                        placeholder="Write down your comment or message..."
                        onChange={e=>setMessage(e.target.value)}
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                  </div>
                  <div className="p-2 w-full">
                    <button type="submit" className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-md text-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
          </form>
      </section>
  )
};
export default Feedback;