import './style.scss'
import { useState } from 'react';
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const Write = ()=>{
    const [value, setValue] = useState('');
    return (
        <div className='write'>
            <div className="content">
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
                    <input type="file" id='file' className='file'/>
                    <label htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="category">
                    <h1>Category</h1>
                    <div className='cat'>
                    <input type="radio" name="cat" id="art" value="art"/>
                    <label htmlFor="art">Art</label>
                    </div>
                    <div className='cat'>
                    <input type="radio" name="cat" id="science" value="science"/>
                    <labscience htmlFor="science">science</labscience>
                    </div>
                    <div className='cat'>
                    <input type="radio" name="cat" id="love" value="love"/>
                    <label htmlFor="love">love</label>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Write