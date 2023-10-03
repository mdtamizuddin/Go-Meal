import './globals.css'

export const metadata = {
  title: 'Go Meal',
  description: 'Order Your Favourite Food',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  )
}
