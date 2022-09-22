import { useState } from "react"


const Checkout = () => {

    

    const[nombre, setNombre] = useState('')
    const[email, setEmail] = useState('')
    const[direccion, setDir] = useState('')
    const[cel, setCel] = useState('')

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const handleDir = (e) => {
        setDir(e.target.value)
    }
    
    const handleCel = (e) => {
        setCel(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: {
                nombre: 'Conrado',
                direccion: 'Aldebaran 123',
                email: '123@asdf.com',
                cel: '123123123'
            }
        }
    }

    return(
    <div>
        <h2>Checkout</h2>
        <hr/>

        <form onSubmit={handleSubtmit}>
            <input value={nombre} onChange={} type={'text'} className="my-3 form-control" placeholder="Tu nombre" ></input>
            <input value={cel} onChange={} type={'text'} className="my-3 form-control" placeholder="Tu teléfono" ></input>
            <input value={email} onChange={} type={'text'} className="my-3 form-control" placeholder="Tu correo electrónico" ></input>
            <input  value={direccion} onChange={}type={'text'} className="my-3 form-control" placeholder="Tu dirección postal" ></input>
        </form>
    </div>

    )
}