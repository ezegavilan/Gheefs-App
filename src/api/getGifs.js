export const getGifs = async (category = "JavaScript") => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ph8K1R1hJBdH2V7Utub9YArTZmyLAnkV&limit=10&q=${ category }`;

    const response = await fetch(url);

    const { data = [] } = await response.json();

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
}
