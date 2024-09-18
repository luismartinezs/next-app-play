// "use client"
// components/AbTest.tsx
// import { useEffect } from "react";
import { getVariant } from "./ab-testing";
// import { trackEvent } from "./tracking";

type AbTestProps = {
  testName: string;
  variants: {
    [key: string]: JSX.Element;
  };
};

export const AbTest: React.FC<AbTestProps> = ({ testName, variants }) => {
  const variantKey = getVariant(testName, Object.keys(variants));

  // useEffect(() => {
  //   trackEvent(`${testName}-view`, variantKey);
  // }, [testName, variantKey]);

  return <>{variants[variantKey]}</>;
};
