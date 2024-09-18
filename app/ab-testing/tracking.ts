// tracking.ts
export function trackEvent(eventName: string, variant: string) {
  if (typeof window !== 'undefined') {
    // Send event data to your analytics service or API
    console.log(`Tracking event: ${eventName}, Variant: ${variant}`)
  }
}
