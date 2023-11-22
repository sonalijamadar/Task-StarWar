import Films from "./page/Films";
import "./style.css";


const CharacterDetails = ({ name,  id, height, films }) => {
    
    return (
        <div className="col-md-12 col-lg-12 mt-5">
            <div className="row g-0 border rounded-4 overflow-hidden flex-md-row mb-4 shadow h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="pb-2 border-bottom fw-bolder">{name}</h3>
                    <div className='content mt-2'>
                        <div className="row mb-3">
                            <div className="col-lg-6 col-md-6 themed-grid-col">
                                <div className="mt-2">
                                    <span className="fw-bold">Height: </span>
                                    <span>{height}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="pb-2 mt-3 border-bottom fw-bolder">Films</h3>
                    <div className='content mt-2'>
                        <div className="row mb-3 mx-2">
                            <Films films={films}></Films>
                        </div>
                    </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img
                        className="img-fluid"
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                        alt="Star Wars Character"
                    />
                </div>
            </div>
        </div>




    )
}

export default CharacterDetails