import React, { useEffect, useState } from 'react'
import { enhancedFetch } from './services/services';
import { set } from './services/Stroage';
import CharacterCard from './CharacterCards';
import Pagination from './page/Pagination/Pagination';
import CardList from './CardList';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage/ErrorMessage';



const BASE_API_URL = `https://swapi.dev/api`;
const Home = () => {
    const [people, setPeople] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() =>{
        const fetchPeople = async () =>{
            try{
                setLoading(true)
                const response = await enhancedFetch(BASE_API_URL + `/people/?page=${page}`)
                setPeople(response.results)
            } catch{
                setError(true)
            }
            finally{
                setLoading(false)
            }
        }
        fetchPeople()
    } , [page])
     
    const saveToLocalStorage = (items) => {
        set('star-wars-character-favorites', items);
    }
    const filteredPeople = people.slice(0,3)

         
    const renderCharacter = () =>{
             if (loading) {
            return <Loading/>
        }

        if (error) {
            return <ErrorMessage/>
        }
        return(
            filteredPeople.map(people => {
                let id = people.url.split("/").at(-2)
                return(
                    <CharacterCard 
                    key={id}
                    id={id}
                    name={people.name} 
                    />
                )
            })
        )
    }

  return (
    <div className='Home'>
         <div className="container">
                <div className="col-lg-6 col-md-6 m-auto pb-5 pt-3">
                    <form role="search">
                        <input
                            className="form-control form-control-lg border-0 shadow"
                            type="search"
                            placeholder="Search Character..."
                            aria-label="Search"
                            onChange={e => setSearch(e.target.value)}
                        />
                    </form>
                </div>
                <CardList></CardList>
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-12">
                        <div className="row">
                            {renderCharacter()}
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                pageNumber={page}
                updatePageNumber={setPage}
            />
    </div>
  )
}

export default Home