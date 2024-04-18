import { useState } from 'react'


function App() {
  const [postList, setPostList] = useState([]); 
  
  const getPosts = async () => {
    const response = await fetch("https://blog-fake-api.onrender.com/news");
    const json = await response.json();
    setPostList (json);
  }

  return (
    <div className="App">
      <button onClick={getPosts} >Solicitar API</button>
      <ul>
        {postList.map(post => (
          <li key={post.id}>
            <span>{post.category}</span>
            <h2>{post.title} - {post.author}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
