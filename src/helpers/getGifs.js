const getGifs = async( category ) => {
  
  const API = `https://api.giphy.com/v1/gifs/search?api_key=z4oOW4rFiXQ8s0W4FrcbqZ6Vx5HXgEkV&q=${ category }&limit=5`
  const resp = await fetch( API )
  const { data } = await resp.json()

  const gifs = data.map( gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url
  }))

  return gifs
}

export { getGifs }