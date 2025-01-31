import style from './style/common.module.css'
export default function Loading() {
  return (
    <>
      <section className={style.loading_section}>
        <div className={style.loading}></div>
      </section>
    </>
  )
}
