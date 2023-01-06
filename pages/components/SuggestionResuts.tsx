import React from "react";
import Link from "next/link";
import { ListGroup } from "flowbite-react";
import { useState, useEffect } from "react";

const suggestionListData = [
  {
    id: 1,
    english: "Suggestion",
    translation: "شيء"
  },
  {
    id: 1,
    english: "Suggestion",
    translation: "شيء"
  },
  {
    id: 1,
    english: "Suggestion",
    translation: "شيء"
  }
]
const SuggestionResults = (props) => {
  return (
    <div className="flex flex-row w-1/2">
      <ListGroup className="grow">
        {props.suggestions?.map((suggestion, i) => (
          <Link key={i} href={`/search?q=${suggestion.english}`}>
            <ListGroup.Item key={suggestion.id}>
              {suggestion.english} | {suggestion.translation}
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </div>
  );
};

export default SuggestionResults;
