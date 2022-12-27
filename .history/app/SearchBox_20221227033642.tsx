"use client";
import React, { useState } from "react";

function SearchBox() {
  const [input, SetInput] = useState("");
  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          SetInput(e.target.value);
        }}
        placeholder="Search Keywords ...."
        className="w-full h-14 rounded-sm placeholder-orange-500 text-red-500 outline-none bg-transparent dark:text--400 flex-1"
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
