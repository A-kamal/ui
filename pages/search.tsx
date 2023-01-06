import React from "react";
import Link from "next/link";
import Head from "next/head";

import { useState, useEffect } from "react";
import SearchInput from "./components/SearchBar";
import SuggestionResults from "./components/SuggestionResuts";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      // const res = await fetch(`/api/search?q=${search}`);
      // const data = await res.json();
      const myPosts = [
        { id: 1, title: `${query} 1` },
        { id: 2, title: `${query} 2` },
      ];
      setPosts(myPosts);
    }
    fetchPosts();
  }, [query]);

  useEffect(() => {
    async function fetchSuggestions() {
      // const res = await fetch(`/api/suggestions?q=${currentInput}`);
      // const data = await res.json();
      if (currentInput.trim() === "") return setSuggestions([]);
      const mySuggestions = [
        {
          id: 1,
          english: `${currentInput} suggestion 1`,
          translation: "شيء",
        },
        {
          id: 2,
          english: `${currentInput} suggestion 2`,
          translation: "شيء",
        },
      ];
      setSuggestions(mySuggestions);
    }
    fetchSuggestions();
  }, [currentInput]);

  const onChange = (e) => setCurrentInput(e.target.value);
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      setQuery(currentInput);
      setSuggestions([]);
    }
  };

  return (
    <div>
      <Head>
        <title>Search local food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-4 flex flex-col items-center h-screen">
        <SearchInput
          value={currentInput}
          handleChange={onChange}
          handleKeyPress={onKeyDown}
        />
        <SuggestionResults suggestions={suggestions}></SuggestionResults>
        {query && posts.length > 0 && (
          <ul className="w-1/2 flex flex-col">
            {posts.map((post) => (
              <li
                key={post.id}
                className="mb-2 py-2 px-3 rounded-md bg-gray-200"
              >
                {post.title}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default Search;
