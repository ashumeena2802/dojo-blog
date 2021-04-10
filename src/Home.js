import React from 'react'
import { useState,useEffect } from 'react'
import BlogList from './BlogList';


export default function Home() {
const [blogs,setBlogs] = useState(null);
const [isPending,setIsPending] = useState(true);
const [error,setError] = useState(null);

const [name,setName] = useState('mario');

// const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
// }

useEffect(async() =>{
    setTimeout(() => {
        fetch('http://localhost:8000/blogs')
    .then(res => {
        if(!res.ok){
            throw Error('could not fetch Blog');
        }
        return res.json();
    })
    .then((data) => {
        setIsPending(false);
        setBlogs(data);
        setError(null);
    })
    .catch(err => {
        setError(err.message);
        setIsPending(false);
    })
    },1000)
},[])

    return (
        <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
{blogs && <BlogList blogs={blogs} title="All Blogs!"  />}    

  {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs!" /> */}
      {/* <button onClick={() => setName('Luigi')}>Change Name</button> */}
      
        </div>
    );
}
