import axios from 'axios';
import './style.scss'
import { useState } from 'react';
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { useLocation } from 'react-router-dom';

const Write = ()=>{

    const state = (useLocation().state && useLocation().state[0])

    const [title, setTitle] = useState((state && state.title)||"");
    const [value, setValue] = useState(state?.desc||"");
    const [file, setFile] = useState('');
    const [cat, setCat] = useState(state?.cat||"");

    const upload = async()=>{
        try {
            const formData = new FormData()
            
            formData.append("file", file)
            for (let pair of formData.entries()) {
                console.log(`${pair[0]}: ${pair[1]}`);
            }
            const res = await axios.post("http://localhost:3000/upload",formData,{
                withCredentials: true
            })
            return res.data
        } catch (error) {
            console.log(error);
        }
        
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const fileUrl = await upload()
        console.log(fileUrl);
        try {
            state ? await axios.post(`http://localhost:3000/posts/${state.id}`,(
                {
                    title:title,
                    desc:value,
                    cat:cat,
                    img:file ? fileUrl : ""
                }),{ withCredentials: true }
            )
            :await axios.post("http://localhost:3000/posts",(
                {
                    title:title,
                    desc:value,
                    cat:cat,
                    img:file ? fileUrl : ""
                }),{ withCredentials: true }
            )
        } catch (error) {

            console.log(error);
        }

    }
    

    return (
        <div className='write'>
            <div className="content">
                <input type="text" placeholder='title' name='title' value={title} onChange={e=>setTitle(e.target.value)}/>
                <div className='box'>
                    <ReactQuill className='box' theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b>Draft
                    </span>
                    <span>
                        <b>Visibility: </b>Public
                    </span>
                    <input type="file" id='file' className='file' onChange={(e)=>setFile(e.target.files[0])}/>
                    <label htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as draft</button>
                        <button onClick={handleSubmit}>Publish</button>
                    </div>
                </div>
                <div className="category">
                    <h1>Category</h1>
                    <div className='cat'>
                    <input type="radio" checked={cat=="A"} name="cat" id="A" value="A" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="art">A</label>
                    </div>
                    <div className='cat'>
                    <input type="radio" checked={cat=="B"} name="cat" id="B" value="B" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="B">B</label>
                    </div>
                    <div className='cat'>
                    <input type="radio" checked={cat=="C"} name="cat" id="C" value="C" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="C">C</label>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Write