import React from 'react';

import './addPost.css';


const Addpost = ({ newPost, textNewPost, textNewPostValue }) => {
    return (
        <div className="addpost">
            <p>Добавить новый пост:</p>
            <form onSubmit={newPost} className="addpost-form">
                <input onChange={textNewPost} type="text" placeholder="Введите новое название заметки..." value={textNewPostValue} />
                <button>Добавить</button>
            </form>
        </div>
    );
}

export default Addpost;
