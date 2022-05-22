import { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import Input from "./Input";

function Feed() {
  const [realtimePosts, setRealtimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();
      setRealtimePosts(responseData);
      setHandlePost(false);
      setUseSSRPosts(false);
    };

    fetchPosts();
  }, [handlePost]);
  console.log(realtimePosts);
  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/**Posts */}
      {realtimePosts.map((post)=>(
          <>
              <img src={post.photoUrl} alt="" />
              <div>{post.input}</div>
          </>
          
      ))}
    </div>
  );
}

export default Feed;
