import { Noto_Serif_Bengali } from 'next/font/google'
import Footer from './componnent/Footer'
import Header from './componnent/Header'
import './globals.css'

const inter = Noto_Serif_Bengali({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  // const [isloading, setosloading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setosloading(false), 3000);
  // }, []);




  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {isloading && <Loading />} */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
