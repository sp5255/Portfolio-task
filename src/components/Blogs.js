import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import Card from "./Card";
import ShowContent from "./ShowContent";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [isDispaly, setDisplay] = useState(false);
    const [content, setContent] = useState("");    

    useEffect(() => {
        (async () => {
            const resp = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await resp.json();
            setBlogs(data);
        })();
    }, []);
    

    const showContents = (id) => {
        // console.log("show content called");
        setDisplay((current) => !current);
        // if (!isDispaly) return;
        
        (async () => {
            const resp = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            const res = await resp.json();
            console.log("content", res);
            setContent(res);
        })();
    };

    const showBlogs = (blogs) => {
        const arr = [];
        for (let i = 0; i < 15; i++) {
            arr.push(blogs[i]);
        }
        return arr;
    };
    // console.log("blogs", blogs);    
    return (
        <div className="position-relative">
            <h4 className=" mt-4 text-center">Blogs</h4>
            <div className="d-flex flex-wrap justify-content-around">
                {showBlogs(blogs).map((blog, idx) => (
                    <Card blog={blog} key={idx} fn={showContents} />
                ))}
            </div>

            {isDispaly && (
                <ShowContent content={content} close={showContents} />
            )}
        </div>
    );
};

export default Blogs;
