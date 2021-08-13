import Post from "../post/Post";
import { useEffect, useState } from "react";
import { getPostsOfUser } from "../../services/user.service";

export default function Posts({id}) {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsOfUser(id).then(value => setPosts([...value]));
  }, [id]);
  return (
    <div>
      <h3>User #{id} posts</h3>
        {
          posts.map(value => <Post item = {value} key = {value.id}/>)
        }
    </div>
  );
}
