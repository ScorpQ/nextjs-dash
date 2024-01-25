import { inter } from '../app/ui/fonts'
import '@/app/ui/global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>TestCase</title>
        <link href='https://www.mecellem.com/assets/icons/icon.css?4cb18f1beddb66a33174sda' rel='stylesheet'></link>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
