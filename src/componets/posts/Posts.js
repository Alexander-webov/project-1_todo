import React from 'react';

import PostsItem from './posts-item/Posts-item';

import './posts.css'

const Posts = ({ posts, important, deleteItem, done }) => {

    return (
        <div>
            <ul className="posts">
                {posts.map(el => {
                    return (
                        <PostsItem

                            importantBool={el.important}
                            doneBool={el.done}
                            important={() => important(el.id)}
                            done={() => done(el.id)}
                            deleteItem={() => deleteItem(el.id)}
                            key={el.id}
                            text={el.text} />
                    )
                })}
            </ul>
        </div>
    );
}

export default Posts;
