// utils/abTesting.ts
import { cookies } from 'next/headers'

export function getVariant(testName: string, variants: Array<string>): string {
  const cookieStore = cookies()

  // Check if a variant is already set in the cookies
  const cookie = cookieStore.get(testName)

  if (cookie?.value) {
    return cookie.value
  }

  // Randomly pick a variant
  const selectedVariant = variants[Math.floor(Math.random() * variants.length)]

  // Set the cookie server-side to persist variant
  cookieStore.set(testName, selectedVariant)

  return selectedVariant
}

export function isVariant(testName: string, variant: string): boolean {
  const cookieStore = cookies()
  const cookie = cookieStore.get(testName)
  return cookie?.value === variant
}
