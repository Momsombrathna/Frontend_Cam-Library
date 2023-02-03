import axios from 'axios';
import { useState } from 'react';
import NavLog from '../NavLog'
const BookUpload = () => {

    /**
     * API Upload Book
     */
    const [tittle, setTittle] = useState('');
    const [smaillTittle, setSmaillTittle] = useState('');
    const [description, setDescription] = useState('');
    const [bookFile, setBookFile] = useState('');

    const Add = async () => {
        const data = {
            tittle,
            smaillTittle,
            description,
            bookFile, 
        }

        const url = "";
        const respone = await axios.post (url, data);
        console.log(respone);
    }
    
    /** 
     * End API Uoload Vook 
    */
    return (
        <>
        <NavLog/>

        <div class=" py-36 p-5">
            <div class="flex bg-white text-gray-500 rounded-lg shadow-xl border-2 overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div class="hidden lg:block lg:w-2/4 bg-cover"><img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png" className='rounded-l-lg' alt="welcome" /></div>
                <form class="w-full p-4 lg:w-1/2 md:px-10 px-5">
                    <div class="text-center mb-4">
                        <h2 class="text-3xl font-bold text-gray-700 text-center">Book Upload</h2>
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-600 text-sm font-bold mb-1">Tittle</label>
                        <input  
                        value={tittle} onChange={e => setTittle(e.target.value)}
                        class=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='name' placeholder='Enter tittle' type="text" required />
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-600 text-sm font-bold mb-1">Small Tittle</label>
                        <input  
                        value={smaillTittle} onChange={e => setSmaillTittle(e.target.value)}
                        class=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none"name="text" placeholder='Enter small tittle' type="text" required  />
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-600 text-sm font-bold mb-1">Description</label>
                        <input  
                        value={description} onChange={e => setDescription(e.target.value)}
                        class=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none" name="email" placeholder='Enter description' type="text" required  />
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-600 text-sm font-bold mb-1">File Upload</label>
                        <input 
                        onChange={e => setBookFile(e.target.files[0])} 
                        class=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none"  name="email" placeholder='Book File' type="file" required  />
                    </div>
                    
                  
                    <div class="mt-5">
                        <button onClick={Add} class="bg-blue-700 text-white text-center font-medium py-2 px-5 w-full rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type='submit'>Upload now</button>
                    </div>
                   <br></br>
                    
                </form>
            </div>
        </div>
        </>
    );
};

export default BookUpload;