// app/layout.tsx
import { ABTestProvider } from './ABTestProvider'

export default function ABLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ABTestProvider>
          {children}
        </ABTestProvider>
      </body>
    </html>
  )
}