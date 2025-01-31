import MovieCard from "../components/MovieCard";
import style from '../style/common.module.css'
export default async function Movie() {

  await new Promise(resolve=>setTimeout(resolve,2000))
  
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '87fb1137c8mshebeaf3e478e15a8p1f0688jsn1aab829f55b3',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  }

      const response =await fetch(url,options)
      const data =await response.json()
      const episodeData=data[0].episodes
      const sessionId =data[0].seasonId
  return (
    <>
    <section className={style.movieSection}>
      <div className={style.container}>
      <h1>Series & Movies</h1>
   <div className={style.card_section}>
      {
        episodeData.map((currentElement)=>{
          return <MovieCard key={currentElement.episodeId} {...currentElement} sessionId={sessionId} />
        })
      }
      </div>
      </div>
      </section>
    </>
  )
}


// pahbzZEDaoWIDo8s  password of database
// curl --request GET \
// 	--url 'https://netflix54.p.rapidapi.com/season/episodes/?ids=80077209%2C80117715&offset=0&limit=25&lang=en' \
// 	--header 'x-rapidapi-host: netflix54.p.rapidapi.com' \
// 	--header 'x-rapidapi-key: 87fb1137c8mshebeaf3e478e15a8p1f0688jsn1aab829f55b3'