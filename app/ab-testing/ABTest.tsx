import React, { ReactNode } from "react";

interface VariantProps {
  w: number;
  children: ReactNode;
}

interface ABTestProps {
  children: ReactNode;
}

const Variant: React.FC<VariantProps> = ({ children }) => {
  return <>{children}</>;
};

export const ABTest: React.FC<ABTestProps> & { Variant: typeof Variant } = ({ children }) => {
  const variants = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<VariantProps> =>
      React.isValidElement(child) && child.type === Variant
  );

  const totalWeight = variants.reduce((sum, variant) => sum + variant.props.w, 0);
  const randomValue = Math.random() * totalWeight;

  let cumulativeWeight = 0;
  const selectedVariant = variants.find((variant) => {
    cumulativeWeight += variant.props.w;
    return randomValue <= cumulativeWeight;
  });

  // register events for variant in DB to calculate optimal variant

  return selectedVariant ? selectedVariant.props.children : null;
};

ABTest.Variant = Variant;
