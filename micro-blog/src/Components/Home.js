import {useState} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'my new website', body: 'lorem', author: 'mario' , id: 1},
        {title: 'my party', body: 'lorem', author: 'luigi' , id: 2},
        {title: 'im kidnapped', body: 'lorem', author: 'peach' , id: 3},

    ]);

    const title = "Welcome to our blog"

    return(
 <div className="Home">
     <BlogList blogs={blogs} title={title}/>
 </div>
    )
}

export default Home