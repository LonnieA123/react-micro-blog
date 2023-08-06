import {useEffect, useState} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const title = "Welcome to our blog"



    useEffect(() => {
        fetch('http://localhost:8001/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
    },[])

    return(
 <div className="Home">
     {blogs && <BlogList blogs={blogs} title={title} />}
 </div>
    )
}

export default Home