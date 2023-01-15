import {React, useState} from "react";
import PostList from "./Components/PostList/PostList";
import MyButton from "./Components/UI/button/MyButton";
import './Styles/App.css'

function App() {
  const[posts, setPosts] = useState( [
    {id: 1, title: 'JavaScript 1', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])
  
  return (
    <div className="App">
      <form>
          <input type="text" placeholder="Название поста"/>
          <input type="text" placeholder="Описание поста"/>
          <MyButton>Add</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов 1'}/>
    </div>
  );
}

export default App;
