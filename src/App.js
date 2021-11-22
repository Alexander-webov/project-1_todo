import React, { useState } from 'react';

import Header from './componets/header/Header';
import Search from './componets/search/Search';
import Posts from './componets/posts/Posts';
import Addpost from './componets/addPosts/AddPost';


import './App.css';


const dataTodo = {
  todoList: [
    { text: 'Начать делать свои проекты на REACT', important: false, done: false, id: 1 },
    { text: 'Пройти еще 3 курса по Rect', important: true, done: false, id: 2 },
    { text: 'Изучить Английский', important: false, done: true, id: 3 },
  ]
}






function App() {
  // Вывод постов
  const [posts, setPosts] = useState(dataTodo.todoList);

  // Поиск поста
  const [postSearch, setPostSearch] = useState('');

  //Добавлеия нового поста
  const [newPost, setNewPost] = useState({});

  //Фильтр постов с помощью кнопок
  const [filterBtns, setFilterBtn] = useState('all');



  const filter = (serchText) => {
    if (serchText.length === 0) {
      return posts;
    }
    return posts.filter(el => el.text.toLowerCase().includes(serchText.toLowerCase()))
  }

  const onChangeSearch = (e) => {
    setPostSearch(e.target.value)
  }

  const onTextNewPost = (e) => {
    return setNewPost(
      {
        text: e.target.value,
        important: false,
        done: false,
        id: Math.random() * 100000
      }
    )

  }

  const onAddNewPost = (e) => {
    e.preventDefault();
    if (newPost.text === undefined || newPost.text.length < 3) {
      return false
    }
    console.log(newPost.text);
    setPosts([...posts, newPost])
    setNewPost({ text: '' })
  }



  const onImportant = (id) => {
    const index = posts.findIndex(el => el.id === id)
    const oldEl = posts.slice(0, index);
    const newEl = posts.slice(index + 1);
    const el = posts[index];
    el.important = !el.important;
    setPosts([...oldEl, el, ...newEl,]);

  }

  const onDone = (id) => {
    const index = posts.findIndex(el => el.id === id)
    const oldEl = posts.slice(0, index);
    const newEl = posts.slice(index + 1);
    const el = posts[index];
    el.done = !el.done;
    setPosts([...oldEl, el, ...newEl,]);

  }


  const onDeleteItem = (id) => {

    const index = posts.findIndex(el => el.id === id)
    const newPosts = posts.slice(0, index)
    const newPosts2 = posts.slice(index + 1)
    setPosts([...newPosts, ...newPosts2])


  }

  const filtersBtn = () => {

    if (filterBtns === 'done') {
      return posts.filter(el => el.done)
    }
    if (filterBtns === 'active') {
      return posts.filter(el => !el.done)
    }
    if (filterBtns === 'all') {
      return posts;
    }
    console.log(filterBtns);
  }

  const onfilterBtns = (val) => setFilterBtn(val)

  return (
    <div className="App">
      <Header />
      <Search
        onChangeSearch={onChangeSearch}
        filterBtnActive={() => onfilterBtns('active')}
        filterBtnDone={() => onfilterBtns('done')}
        filterBtnAll={() => onfilterBtns('all')}
      />

      <Posts
        posts={filtersBtn(filter(postSearch))}
        important={onImportant}
        done={onDone}
        deleteItem={onDeleteItem}
      />

      <Addpost newPost={onAddNewPost} textNewPost={onTextNewPost} textNewPostValue={newPost.text} />
    </div>
  );
}

export default App;
