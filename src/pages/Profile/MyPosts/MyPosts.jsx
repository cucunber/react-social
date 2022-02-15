import React from "react"
import s from "./MyPosts.module.scss"
import Post_1 from "./Post_1/Post_1"
import Post_2 from "./Post_2/Post_2";

const MyPosts = () => {
    return (
      <div>
        <div>
        My Posts
        </div>  
        <div>
          New post
        </div> 
        <div className={s.posts}>
          <Post_1 />
          <Post_2 />
        </div>
      </div>
)}

export default MyPosts;