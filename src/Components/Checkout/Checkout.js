import { useState } from "react"


const Checkout = () => {

    

    const[values, setValues] = useState({
        nombre: '',
        email: '',
        cel: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values, //spread de values: copia y pega todos los valores anteriores. (replicar el estado anterior) 
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value
            
        })
    }
    
 

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values
        }
        console.log("Submit del Form")
        console.log(orden)

        if (values.nombre.length < 2){
            alert("Nombre incorrecto")
            return
        }
        if (values.cel.length <10){
            alert("Teléfono incorrecto")
            return
        }
    }

    

    return(
    <div>
        <h2>Checkout</h2>
        <hr/>

        <form onSubmit={handleSubtmit}>
            <input name="nombre" value={nombre} onChange={handleInputChange} type={'text'} className="my-3 form-control" placeholder="Tu nombre" ></input>
            <input name="cel" value={cel} onChange={handleInputChange} type={'text'} className="my-3 form-control" placeholder="Tu teléfono" ></input>
            <input name="email" value={email} onChange={handleInputChange} type={'text'} className="my-3 form-control" placeholder="Tu correo electrónico" ></input>
            <input name="direccion" value={direccion} onChange={handleInputChange}type={'text'} className="my-3 form-control" placeholder="Tu dirección postal" ></input>
        </form>
    </div>

    )
}