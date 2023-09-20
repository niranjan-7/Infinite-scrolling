
import React, { useState, useEffect } from 'react';
import { fetchMockData } from './sampleApi';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10; 

  const loadMore = async () => {
    if (loading) return;

    setLoading(true);
    const newItems = await fetchMockData((page - 1) * limit, limit);
    setItems([...items, ...newItems]);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadMore();
  }, []); // Load initial data when the component mounts.

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const loadMoreButton = loading ? (
    <p>Loading...</p>
  ) : (
    <button onClick={loadMore}>Load More</button>
  );

  return (
    <div>
      <h1>Infinite Scrolling Example</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {loadMoreButton}
    </div>
  );
};

export default InfiniteScroll;
