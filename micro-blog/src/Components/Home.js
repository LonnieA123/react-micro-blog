import {useState} from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'my new website', body: 'lorem', author: 'mario' , id: 1},
        {title: 'my party', body: 'lorem', author: 'luigi' , id: 2},
        {title: 'im kidnapped', body: 'lorem', author: 'peach' , id: 3},

    ]);


    return(
 <div className="Home">
     {blogs.map((blog)=> (
         <div className={"blog-preview"} key={blog.id}>
             <h2>{blog.title}</h2>
             <p>Written by: {blog.author}</p>
         </div>
     ))}
 </div>
    )
}

export default Home