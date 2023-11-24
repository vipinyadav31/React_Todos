import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GptApi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    const handleSort = () => {
      const sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
      setPosts(sortedPosts);
    };

  return (
    <div>
      <button onClick={handleSort}>Sort by Title</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GptApi;