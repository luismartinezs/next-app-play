import { ABTest } from "./ABTest";

// Example usage
const HeaderA = () => <div>Complex Heading A</div>;
const HeaderB = () => <div>Complex Heading B</div>;
const HeaderC = () => <div>Complex Heading C</div>;

export default function AbTesting() {
  return (
    <ABTest
      tests={{
        A: {
          component: HeaderA,
          ratio: 0.4,
        },
        B: {
          component: HeaderB,
          ratio: 0.4,
        },
        C: {
          component: HeaderC,
          ratio: 0.2,
        },
      }}
    />
  );
}
