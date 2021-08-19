import React from "react";
import Article from './Article.js';

function ArticleList({posts}){
    const articleComponents = posts.map(post => <Article key={post.id} posts = {post}/>)

    
return(
    <main>
       {articleComponents}
    </main>

)
}

export default ArticleList;