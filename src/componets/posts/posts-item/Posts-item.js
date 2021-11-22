import React from 'react';

import './posts-item.css'

const PostsItem = ({ text, important, importantBool, deleteItem, done, doneBool }) => {
    let mainBlockStyle = 'postsItem';
    if (importantBool) {
        mainBlockStyle += ' important'
    }
    let styleDone = ''

    styleDone += doneBool ? ' done' : '';

    return (
        <li className={mainBlockStyle}>
            <span className={styleDone} onClick={important}>{text}</span>
            <div>
                <button className={` del`} onClick={deleteItem}>DEL</button>
                <button onClick={done}>!</button>
            </div>
        </li>
    );
}

export default PostsItem;
