// import { isVariant } from "./abTest";

import ABTestedButton from "./ABTestedButton";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">
          Welcome to our A/B Test!
        </h1>
        <ABTestedButton />
      </main>
    </div>
  )}
