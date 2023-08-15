import {useEffect, useState} from "react";
import BlogList from "./BlogList";
import useFetch from "../Hooks/useFetch";

const Home = () => {
    const {data, isLoading, error } = useFetch('http://localhost:8000/blogs')

    const title = "Welcome to our blog"

    return(
 <div className="Home">
     { error && <div> { error } </div>}
     { isLoading && <div>Loading...</div>}
     { data && <BlogList blogs={data} title={title} />}
 </div>
    )
}

export default Home