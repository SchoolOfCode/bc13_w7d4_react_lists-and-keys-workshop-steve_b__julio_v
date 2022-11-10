import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <main id="main">
      <div className="container">
        {posts.map((post) => (
          <Post
            key={post.postId}
            title={post.title}
            date={post.date}
            author={post.author}
            text={post.text}
            highlights={post.highlights}
            image={post.image}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
