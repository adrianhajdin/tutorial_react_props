import React from 'react';

import './Posts.css';

import Post from '../Post/Post';

const BlogPosts = () => {
    const blogPosts = [
        { title: 'Weather Will Be A Thing Of The Past And Here is Why', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', author: 'Joseph Smith', img: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
        { title: 'Top 5 Common Prejudices About Weather', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', author: 'James Williams', img: 'https://northcoastcourier.co.za/wp-content/uploads/sites/73/2019/11/thunderstorm-3440450_960_720-520x400.jpg' },
        { title: '7 Quick Tips For Weather', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', author: 'Matthew Thomas', img: 'https://cdn.images.express.co.uk/img/dynamic/153/590x/BBC-Weather-Thunderstorms-rumble-over-Europe-1188639.jpg?r=1570648466807' },
        { title: '5 Unbelievable Facts About Weather', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', author: 'Thomas King', img: 'https://www.countypress.co.uk/resources/images/10017354.jpg?display=1&htype=0&type=responsive-gallery' }
    ];

    return (
        <div className="posts-container">
            {blogPosts.map((post, i) => <Post key={i} i={i} post={post} />)}
        </div>
    )
}

export default BlogPosts;