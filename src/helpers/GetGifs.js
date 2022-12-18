export const getGif= async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=Aw6cAuewsff9qXSKl4tfUCku4E6uCOKl&q=${category}&limit=10`;
    const resp = await fetch(url);
  
    const {data} = await resp.json();
    
    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    //console.log(gifs);
    return await gifs;
  }