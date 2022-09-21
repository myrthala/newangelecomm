import React from "react"
import { useEffect } from "react"


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryID} = useParams()

    useEffect(() => {
        setLoading(true)
        //1. Armar la referencia (sync)
        const productosRef = collection(db, 'productos')
        const q = categoryID
                    ? query(productosRef, where('category', '==', categoryID))
                    : productosRef
        //2. Consumir la ref (sync)
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ... doc.data()}))
                console.log(productos)
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryID])

    return ItemListContainer
}

export default ItemListContainer