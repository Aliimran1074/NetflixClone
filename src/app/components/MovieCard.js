import Image from 'next/image'
import style from '../style/common.module.css'
import Link from 'next/link'
export default function MovieCard({sessionId,...currentElement}) {
  const {episodeId, title,contextualSynopsis,interestingMoment} =currentElement
//   console.log(interestingMoment._342x192.webp.value.url)
    return (
    <>
      <div className={style.card}>
<div className={style.card_image}>
    <Image src={`${interestingMoment._342x192.webp.value.url}`} width={300} height={200}/>

</div>
<div className={style.card_data}>
    <h2>{title}</h2>
    <p>{`${contextualSynopsis.text.substring(0,50)} ...`}</p>
    <Link href={`/movie/${sessionId}/${episodeId}`}>
        <button>
            Read More
        </button>
    </Link>
</div>

      </div>
    </>
  )
}



