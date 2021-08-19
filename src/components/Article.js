import React from "react";
import blogData from "../data/blog";

function Article({posts}){
    return(
        <div key={posts.id}>
            <h3>{posts.title}</h3>
            <small>{posts.date}</small>
            <p>{posts.preview}</p>
        </div> 
    )
}

export default Article;