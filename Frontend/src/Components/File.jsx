import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const File = () => {
    const [image, setImage] = useState(null);
    const handlefile = (e) => {
        setImage(e.target.files[0])
    }
    const handleupload = async () => {
        const formaData = new FormData()
        formaData.append('image', image)
        console.log(formaData);
        const res = await axios.post('http://localhost:3000/img', formaData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
        console.log(res)
    }
    return (
        <>
            <label>Upload Image</label>
            <input type="file" onChange={handlefile} />
            <button onClick={handleupload}>Upload</button>
        </>
    )
}

export default File