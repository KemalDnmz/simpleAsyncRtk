import { useSelector } from "react-redux";

function Posts() {
  const { status, posts } = useSelector((store) => store.lesson);
  // or
  // const {status,posts} =useSelector(state => state.lesson)
  return (
    <div>
      {status === "loading" ? (
        <h3>Loading...!</h3>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.postID}>
              <h3>{post.caption}</h3>
              <h4>{post.likes}</h4>
            </div>
          );
        })
       
      )}
    </div>
  );
}

export default Posts;
