import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';
import { enhancedFetch } from './services/services';
import { retrieveList } from './services/action';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage/ErrorMessage';


const BASE_API_URL = `https://swapi.dev/api`;
const Character = () => {
    const [people, setPeople] = useState([]);
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { id} = useParams()

    useEffect(()=>{
        const fetchCharacter = async() =>{
            try{
                setLoading(true)
                const response = await enhancedFetch(BASE_API_URL + `/people/${id}`)
                setPeople(response) 
                const dataFilms = await retrieveList(response.films)
                setFilms(dataFilms)
            } catch{
                setError(true)
            }
            finally{
                setLoading(false)
            }
        }
        fetchCharacter()
    } , [id])

    const renderDetails =()=>{
            if (loading) {
          return <Loading/>
        }
    
        if (error) {
          return <ErrorMessage/>
        }
    
        return(
           <CharacterDetails
            name={people.name}
            Height={people.height}
            id={id}
            films={films}
           />
        )
    }
  
  return (
    <div>
        <div className="container">
        <div className="row">
       {renderDetails()}
        </div>
      </div>
    </div>
  )
}

export default Character