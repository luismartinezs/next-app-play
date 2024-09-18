// components/ABTestProvider.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ABTestContext = createContext<string | null>(null);

export function ABTestProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<string | null>(null);

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("abVariant="));
    setVariant(cookieValue ? cookieValue.split("=")[1] : null);
  }, []);

  return (
    <ABTestContext.Provider value={variant}>{children}</ABTestContext.Provider>
  );
}

export function useABTest() {
  return useContext(ABTestContext);
}
