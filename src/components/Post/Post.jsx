import React from 'react';

import './Post.css';

const Post = (props) => (
    <div className="post-container">
        <h1 className="heading">{props.post.title}</h1>
        <img className="image" src={props.post.img} alt="post" />
        <p>{props.post.body}</p>
        <div className="info">
            <h5>Article number: {props.i + 1}</h5>
            <h4>Written by: {props.post.author}</h4>
        </div>
    </div>
);

export default Post;