import { useState, useEffect } from 'react';
import { PostList } from './components/PostList';
import { FavoriteList } from './components/FavoriteList';

function App() {
  const [postList, setPostList] = useState([]);
  const localFavoritePosts = localStorage.getItem("@MYFAVORITEPOSTS");
  const [favoritePosts, setFavoritePosts] = useState(localFavoritePosts ? JSON.parse(localFavoritePosts) : []);

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch("https://blog-fake-api.onrender.com/news");
      const json = await response.json();
      setPostList(json);
    }
    getPost();
  }, [])

  useEffect(() => {
    localStorage.setItem("@MYFAVORITEPOSTS", JSON.stringify(favoritePosts))
  }, [favoritePosts]);

  const addFavoritePost = (post) => {
    setFavoritePosts(prev => {

      if (!prev.some(favoritePost => favoritePost.id === post.id)) {
        return [...prev, post];
      } else {
        alert("Noticia já favoritada");
        return prev;
      }
    });
  };

  const removeFavoritePost = (postid) => {
    const newFavoritePosts = favoritePosts.filter(post => post.id !== postid);
    setFavoritePosts(newFavoritePosts);
  }

  return (
    <div className="App" >
      <PostList postList={postList} addFavoritePost={addFavoritePost} />
      <FavoriteList favoritePosts={favoritePosts} removeFavoritePost={removeFavoritePost} />
    </div>
  )
}
export default App


