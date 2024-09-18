// components/ABTestedButton.tsx
'use client'

import { useABTest } from './ABTestProvider'

export default function ABTestedButton() {
  const variant = useABTest()

  const buttonColor = variant === 'A' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'

  return (
    <button className={`text-white ${buttonColor}`}>
      Click me!
    </button>
  )
}