import React from "react";

// Define types for our props
type Variant = string;
type VariantComponent = React.ComponentType;
type VariantRatio = number;

interface ABTestProps {
  tests: Record<
    Variant,
    {
      component: VariantComponent;
      ratio: VariantRatio;
    }
  >;
}

export const ABTest = ({ tests }: ABTestProps) => {
  const variantEntries = Object.entries(tests);
  const totalRatio = variantEntries.reduce(
    (sum, [_, ratio]) => sum + ratio.ratio,
    0
  );

  const randomValue = Math.random() * totalRatio;
  let cumulativeRatio = 0;
  let selectedVariant: Variant | null = null;

  for (const [variant, ratio] of variantEntries) {
    cumulativeRatio += ratio.ratio;
    if (randomValue <= cumulativeRatio) {
      selectedVariant = variant;
      break;
    }
  }

  const SelectedComponent = selectedVariant
    ? tests[selectedVariant].component
    : null;

  return SelectedComponent ? <SelectedComponent /> : null;
};
