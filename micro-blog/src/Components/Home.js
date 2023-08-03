import {useState} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'my new website', body: 'lorem', author: 'mario' , id: 1},
        {title: 'my party', body: 'lorem', author: 'luigi' , id: 2},
        {title: 'im kidnapped', body: 'lorem', author: 'peach' , id: 3},

    ]);

    const title = "Welcome to our blog"

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    return(
 <div className="Home">
     <BlogList blogs={blogs} title={title} handleDelete={handleDelete}/>
 </div>
    )
}

export default Home