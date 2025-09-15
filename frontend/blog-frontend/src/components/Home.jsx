import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";

function Home() {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/blogs')
            .then((response)=>{
                setBlogs(response.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    },[]);

    return (
        <div>
            <h2>All Blogs</h2>

            {blogs.map(blog => (
                <div key = {blog._id} className="card  shadow-sm m-2">
                    <div className="card-body d-flex flex-column">
                        <h3 className="card-title">{blog.title}</h3>
                        <p className="card-text">{blog.sub_title}</p>
                        <div className="mt-auto d-flex justify-content-end">
                            <a href="" className="btn btn-primary btn-sm">Read more</a>
                        </div>
                    </div>
                </div>
            ) )}

        </div>
    );
}

export default Home;