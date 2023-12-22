import { Link } from "react-router-dom";
import { Header } from "../Header";
import { useEffect, useState } from "react";
import axios from "axios";

export const IndexPage = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/places').then(response => {
            setPlaces([...response.data]);
        });
    }, []);

    const photoLink='http://localhost:4000/';

    return (
        <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {places.length > 0 && places.map(place => (
                <Link to={'/place/'+place._id}>
                    <div className="bg-gray-500 mb-2 rounded-2xl flex">
                        {place.photos?.[0] && (
                            <img className="rounded-2xl object-cover  aspect-square" 
                            src={place.photos[0].includes('http')?place.photos[0]:photoLink+place.photos[0]} alt="img" />
                        )}
                    </div>
                    <h3 className="font-bold ">{place.address}</h3>
                    <h2 className="text-sm text-gray-500 ">{place.title}</h2>
                    <div className="mt-1" >
                        <span className="font-bold" >${place.price}</span>
                    </div>
                </Link>
            ))}

        </div>

    );
};