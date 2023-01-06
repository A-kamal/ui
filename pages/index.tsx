import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      // const res = await fetch(`/api/search?q=${search}`);
      // const data = await res.json();
      const myPosts = [{ id: 1, title: 'My first post' }, { id: 2, title: 'My second post' }];  
      setPosts(myPosts);
    }
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* <header><Navigation/></header> */}
      


  </div>
);
};

export default Home;