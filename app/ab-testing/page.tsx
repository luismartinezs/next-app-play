import { AbTest } from "./ABTest";

// Example usage
const HeaderA = () => <div>Complex Heading A</div>;
const HeaderB = () => <div>Complex Heading B</div>;
const HeaderC = () => <div>Complex Heading C</div>;

export default function AbTesting() {
  return (
		<div>
			<h1>Welcome to the Homepage</h1>
			<AbTest
				testName="header-test"
				variants={{
					variantA: <HeaderA />,
					variantB: <HeaderB />,
					variantC: <HeaderC />,
				}}
			/>
		</div>
	)
}