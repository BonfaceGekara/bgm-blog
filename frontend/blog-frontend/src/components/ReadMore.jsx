import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ReadMore() {

    const { id } = useParams();

    const [blog, setBlog] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/blog/readmore/${id}`)
            .then((response)=>{
                setBlog(response.data);
                console.log(response.data);
            })
            .catch((err) =>{
                console.error(err);
            })
    },[]);

    return(
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 card shadow-sm">
                <h1 className="text-danger p-3">{blog.title}</h1>
                <h3 className="text-primary p-3">{blog.sub_title}</h3>
                <p>{blog.content}</p>
                <div className="d-flex justify-content-end">
                    <p className="text-success">Posted by : {blog.posted_by}.</p>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
}

export default ReadMore;