import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

const locationContext = createContext();

const LocationProvider = ({children}) =>
{
    const [location, setLocation] = useState([]);
    const [statesList, setStatesList] = useState([]);

    useEffect(()=>
    {
        getStatesList();
    },[])

    const getLocation = () =>
    {
        setLocation(JSON.parse(localStorage.getItem('location')));
    }

    const updateLocation = (address) =>
    {
        localStorage.setItem('location', JSON.stringify(address));
        getLocation();
    }

    const getStatesList = async () =>
    {
        try
        {
            const url = 'https://meddata-backend.onrender.com/states';
            const response = await axios.get(url);
            setStatesList(response.data);   
        } 
        catch(error)
        {
            console.log(error);
        }  
    }

    return(
        <locationContext.Provider value={{location, updateLocation, statesList}}>
            {children}
        </locationContext.Provider>
    )
}

const useLocation = () =>
{
    return useContext(locationContext);
}

export {LocationProvider, useLocation}

