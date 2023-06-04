import './globals.css'
import { Nav } from '@/components/Nav'

const siteName = 'BAGEL BASE';
const description = 'NYスタイルのベーグル専門店「BAGEL BASE」'

export const metadata = {
  title: {
    default: siteName,
  },
  description: 'NYスタイルのベーグル専門店「BAGEL BASE」',
  openGraph: {
    title: siteName,
    description,
    siteName,
    local: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>

    </html>
  )
}
