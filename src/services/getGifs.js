const apiKey = 'bGZY6Urv8UBlZmOO5qgVN2MyaFVp6bCf'

export default function getGifs({ keyword = 'panda'} = {}) {
    const giphy_api_url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(giphy_api_url)
      .then(res => res.json())
      .then(response => {
        const { data } = response;
        const gifs = data.map(image => {
            const { id, title, images } = image
            const { url } = images.downsized
            return { id, title, url }
        })
        return gifs
      })
}