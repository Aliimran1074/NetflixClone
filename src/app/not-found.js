import Link from 'next/link'
import style from './style/common.module.css' 
export default function NotFound() {
  return (
    <>
    <section className={style.container}>
    <div className={style.error_page}>
      <h1>
        404
      </h1>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
      <button>Go to Home Page</button></Link>
    </div> 
    </section>
    </>
  )
}