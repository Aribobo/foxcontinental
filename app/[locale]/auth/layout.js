
import '../../globals.css'
import Navbar from "../../components/Navbar";


export const metadata = {
  title: 'Log In',
  description: 'Log-In',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <Navbar/> */}
      {children}
      </body>
    </html>
  )
}
