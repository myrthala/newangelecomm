import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

const PokeAPI = () => {

    const [id, setID] = useState(null)

    const {data} = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])

    const handleSiguiente = () => {}

    const handleAnterior = () => {}

    return (
        <div className="container my-5">
            <h2>Poke api</h2>
            <hr/>

            {
                data
                    ?
                        <div>
                            <h3>{data.name}</h3>
                            <img src={data.sprites.front_default} alt={data.name}/>
                        </div>
                    : null
            }

            <button
                onClick={handleAnterior}
                className="btn btn-outline-primary"
                disabled={id === 1}
                >
                Anterior
            </button>
        </div>
    )
    
}