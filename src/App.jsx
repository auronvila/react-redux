import PostsList from "./features/post/PostsList.jsx";
import AddPostForm from "./features/post/AddPostForm.jsx";

function App() {
  return (
    <main className={'App'}>
      <AddPostForm/>
      <PostsList/>
    </main>
  )
}

export default App
