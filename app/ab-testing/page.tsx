import { ABTest } from "./ABTest";

// Example usage
const HeaderA = () => <div>Complex Heading A</div>;
const HeaderB = () => <div>Complex Heading B</div>;
const HeaderC = () => <div>Complex Heading C</div>;

export default function AbTesting() {
  return (
    <ABTest>
      <ABTest.Variant w={40}>
        <HeaderA />
      </ABTest.Variant>
      <ABTest.Variant w={40}>
        <HeaderB />
      </ABTest.Variant>
      <ABTest.Variant w={20}>
        <HeaderC />
      </ABTest.Variant>
    </ABTest>
  );
}
