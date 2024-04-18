import { useState, useEffect } from 'react'


function App() {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch("https://blog-fake-api.onrender.com/news");
      const json = await response.json();
      setPostList(json);
    }
    getPost();
  }, [])

  return (
    <div className="App" >
      <ul>
        {postList.map(post => (
          <li key={post.id}>
            <span>{post.category} - {post.author}</span>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
