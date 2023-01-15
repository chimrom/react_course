import React from "react";
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, title}) => {
    return <>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        {posts.map(post =>
            <PostItem key={post.id} id={post.id} title={post.title} body={post.body}/>
        )}
    </>
}

export default PostList