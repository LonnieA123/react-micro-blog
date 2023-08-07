import {useEffect, useState} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const title = "Welcome to our blog"



    useEffect(() => {
        fetch('http://localhost:8001/blogs')
            .then(res => {
                if (!res.ok){
                    throw Error('could not fetch data')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
    },[])

    return(
 <div className="Home">
     { error && <div> { error } </div>}
     { isLoading && <div>Loading...</div>}
     { blogs && <BlogList blogs={blogs} title={title} />}
 </div>
    )
}

export default Home