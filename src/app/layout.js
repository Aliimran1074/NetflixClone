import Header from "./components/Header";
import './globals.css'
import {  Mulish} from 'next/font/google'
const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'], 
  subsets: ['latin'],
  display: 'swap',
})
 


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
       
      <body>
      
  <Header/>
        {children}


      </body>
    </html>
  )
}


{/* <header style={{backgroundColor:'black',color:"white"}}>
        <p> This is Header </p>
      </header> */}


            {/* <footer style={{backgroundColor:'blue',color:'green'}}>
        <p>This is Footer</p>
      </footer> */}