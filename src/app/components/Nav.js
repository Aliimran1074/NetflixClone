import Link from 'next/link'
import style from '../style/navbar.module.css'

export default function Nav() {
  return (
    <>
      <nav className={style.navbar}>
        <div>
          <ul className={style.navbarList}>
            <li className={style.navbarItem}>
            <Link href='/' className={style.navbarLink}>Home</Link>
            </li>
            <li className={style.navbarItem}>
            <Link href='/about' className={style.navbarLink}>About</Link>
            </li>
            <li className={style.navbarItem}>
            <Link href='/movie' className={style.navbarLink} >Movie</Link>
            </li>
            <li className={style.navbarItem}>
            <Link href='/contact' className={style.navbarLink}>Contact</Link>
            </li>


          </ul>
        </div>


      </nav>
    </>
  )
}
