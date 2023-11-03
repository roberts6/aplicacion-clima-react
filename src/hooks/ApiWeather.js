import {useEffect, useState} from "react";

export const useWeather = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
    const ApiKey = 'b4060850b11711d334cd83f63c4a74f9';

    const [ciudad, setCiudad] = useState('');
    const [dataError, setDataError] = useState('')
    const [dataClima, setDataClima] = useState(null);

    const fetchClima = async (ciudad) => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${ApiKey}`);
            const data = await response.json();
            setDataClima(data);
        } catch (error) {
            setDataError('No encontramos nada 😔',error);
        }
    }

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ciudad.length > 0) fetchClima(ciudad)
        setCiudad('')
    }

useEffect(() => {
  console.log(dataClima)
}, [dataClima])


    return {
        ciudad,
        dataClima,
        dataError,
        handleCambioCiudad,
        handleSubmit
    };
}