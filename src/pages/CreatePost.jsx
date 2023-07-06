import axios from 'axios';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [title, setTittle] = useState('')
    const [sumamry, setSummary] = useState('')
    const [files, setFiles] = useState('')
    const [quill, setQuill] = useState('')
    const navigate = useNavigate()

    console.log(files[0])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set("title", title)
        data.set("sumamry", sumamry)
        data.set("files", files[0])
        data.set("quill", quill)

        const res = await axios.post("/post",
            data
        )
        console.log(res)
        if(res.status === 200){
            navigate("/")
        }
    }

  return (
    <div className='flex justify-center m-5'>
        <div className='w-[500px]'>

        <div className='text-center'>CreatePost</div>
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input type='text' className='border p-2 m-1'  onChange={(e)=>setTittle(e.target.value)} value={title} placeholder='Title'/>
                <input type='summary' className='border p-2 m-1'  onChange={(e)=>setSummary(e.target.value)} value={sumamry} placeholder='Summary'/>
                <input type='file' className='m-1' onChange={(e)=>setFiles(e.target.files)} />
                <ReactQuill className=' m-1' onChange={(e)=>setQuill(e)} value={quill}/>
                <button  className='border p-2 m-1 bg-black text-white'>Create Post</button>

            </form>
        </div>
        </div>

    </div>
  )
}

export default CreatePost