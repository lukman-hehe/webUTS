import "./globals.css"

export const metadata = {
  title: "Style Playground",
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
