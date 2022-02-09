import React, {useState, useEffect} from "react";
import GifGridItem from "./GifGridItem";
// import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])
    useEffect( () => {
        getGifs(category);
    }, [category]);

    const getGifs = async ( category ) => {
        const api_key = "h4y55C5vN7USQkdCSiH0jm822XCASSXE";
        const endPoint = "api.giphy.com/v1/gifs/search";
        const limit = 4;
        const urlApi = `https://${endPoint}?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`;
        console.log(urlApi)
        const resp = await fetch(urlApi);
        const { data } = await resp.json();

        const gifs = data.map((item) => {
            return {
                id: item.id,
                title: item.title,
                url: item.images.downsized_medium.url,
            };
        });
        setImages(gifs);
    };
    return (
        <div className="mt-4 mb-4" style={{backgroundColor:"#41444899", borderRadius:'10px', color:'black'}}>
            <h2 className="title-card mt-2">{ category }</h2>
            <div className="d-flex">
                {
                    images.map(img =>{
                        return (
                           <GifGridItem 
                            key={img.id}
                            {...img}
                           />
                        )
                    })
                }
            </div>
        </div>
    );
};

GifGrid.propTypes = {};

export default GifGrid;
