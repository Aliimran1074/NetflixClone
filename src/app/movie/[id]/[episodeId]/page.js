import style from '../../../style/common.module.css'
import Image from 'next/image'
export default async function Episode({params}) {
    const id = params.id
    const episodeid =params.episodeId
    // console.log("Episode Id ",episodeId)
    // console.log(id)
    const url = `https://netflix54.p.rapidapi.com/season/episodes/?ids=${id}&lang=en`
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '87fb1137c8mshebeaf3e478e15a8p1f0688jsn1aab829f55b3',
        'x-rapidapi-host': 'netflix54.p.rapidapi.com'
      }
    }
    
    const response =await fetch(url,options)
    const data =await response.json()
    const completeData= data[0].episodes
    const matchEpisode = await completeData.find((currentElement)=>{
        return currentElement.episodeId===episodeid
    })
    let episodeId, title, contextualSynopsis, interestingMoment;

    if (matchEpisode) {
      ({ episodeId, title, contextualSynopsis, interestingMoment } = matchEpisode);
    }
    
    // console.log(matchEpisode)
    
    
    return (
      <>
      {
        !matchEpisode?'':<div className={style.container}>
        <h2 className={style.movie_title}>Netflix \ <span>{title}</span></h2>
           <div className={style.card_section}>
<div>
    <Image src={`${interestingMoment._342x192.webp.value.url}`} width={400} height={300}/>
</div>
<div>
    <h1>{title}</h1>
    <p>{contextualSynopsis.text}</p>
</div>
</div>

      </div>
      }
      
      </>
    )
  }
  