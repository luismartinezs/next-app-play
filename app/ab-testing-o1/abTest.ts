// abTest.ts
import { cookies } from 'next/headers';

export function isVariant(variantName: string): boolean {
  const cookieStore = cookies();
  const variant = cookieStore.get('abVariant')?.value;

  return variant === variantName;
}