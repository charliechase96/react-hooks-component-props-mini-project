import React from "react";
import Article from "./Article";

function ArticleList({articles}) {

    const posts = articles.map(article => {
        return (<Article key={article} />
    )});

    return (
        <main>
            {posts}
        </main>
    )
}

export default ArticleList;