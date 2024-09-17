const HeaderA = () => <div>Complex Heading A</div>;
const HeaderB = () => <div>Complex Heading B</div>;
const HeaderC = () => <div>Complex Heading C</div>;

const Heading = {
  A: HeaderA,
  B: HeaderB,
  C: HeaderC,
};

export default function AbTesting() {
  const variant = Math.random() < 0.5 ? "A" : "B";

  return Heading[variant];
}