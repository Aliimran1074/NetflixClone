import Link from 'next/link'
import style from '../style/navbar.module.css'
import Image from 'next/image'
import Nav from './Nav'
export default function Header() {
  return (
    <header className={style.main_header}>
      <div className="navbar_brand"> 
    <Link href="/" > </Link>
<Image src='/logo.png' alt='my logo image ' width={150} height={40}/>
      </div>
      <Nav/>
    </header>
  )
}
