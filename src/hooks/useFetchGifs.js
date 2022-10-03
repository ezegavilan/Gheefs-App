import { useEffect, useState } from "react";

import { getGifs } from "../api/getGifs.js";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getImages = async() => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setLoading(false);
    }

    useEffect(() => {
        getImages().then();
    }, []);

    return {
        images,
        isLoading,
    }
}