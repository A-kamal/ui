import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import SuggestionResults from './SuggestionResuts';
const SearchInput = (props) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-wrap flex-row w-1/2 md:h-1/3">
      <div className="flex flex-wrap w-full ">
        <div className="flex self-end">
          <Label
            className="font-bold mb-1 md:mb-0 mr-2 whitespace-nowrap  text-sm md:text-2xl flex self-end"
            htmlFor="cravingLabel"
            value="I am Looking for"
          />
        </div>
        <div className="flex items-center self-end grow">
          <input
            autoFocus={true}
            className="w-full text-sm md:text-2xl flex border-x-0 border-t-0 border-violet-800	 border-b-4 focus:outline-none text-violet-500 animate-bounce focus:animate-none placeholder-violet-200 shadow-md"
            id="search"
            onChange={props.handleChange}
            onKeyPress={props.handleKeyPress}
            required={true}
            value={props.search}
            placeholder="Sushi"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
