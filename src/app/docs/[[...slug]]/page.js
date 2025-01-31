export default ({params}) => {
  if(params.slug?.length===2){
      return(
      <>
      <h1>All is well {params.slug[0]} and {params.slug[1]}</h1>
      </>
    )

  }
  else if(params.slug?.length===1){
    return(
        <>
        <h1>All is well {params.slug[0]} </h1>
        </>
      )
  }
  else{
    return(
        <>
        <h1>All is well  </h1>
        </>
      )
  }
}
