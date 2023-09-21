import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList() {

    const articles = blogData.posts.map(post => {
        return (
            <Article 
                key={post.id} 
                date={post.date} 
                title={post.title} 
                preview={post.preview}  
            />
        )
    })
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;