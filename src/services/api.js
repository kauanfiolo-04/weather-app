const KEY='39ae1a0634c1435790b162030230501

const fetchData= async (city)=>{
  const url=`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
  
  const fetchResponse= await fetch(url)

  const data= await fetchResponse.json()

  return data
}

export default fetchData
