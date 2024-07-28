"use client";

import { useState } from "react";

export const MyRCC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Client Component</h1>
      <p>Good old stateful react component rendered client side</p>
      <div className="flex gap-4 items-center">
        <div className="text-lg bg-gray-700 size-8 rounded-md flex items-center justify-center">
          <span>{count}</span>
        </div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};
