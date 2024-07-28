"use client";

import { useState } from "react";

export const MyRCC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Client Component</h1>
      <p>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-purple-600 text-white px-4 py-1 hover:bg-purple-700 rounded-md"
      >
        Increment
      </button>
    </div>
  );
};
