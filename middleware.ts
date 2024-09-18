import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (!request.cookies.has('abVariant')) {
    // Randomly assign a variant
    const variant = Math.random() < 0.5 ? 'A' : 'B'
    response.cookies.set('abVariant', variant)
  }

  return response
}

export const config = {
  matcher: '/:path*',
}