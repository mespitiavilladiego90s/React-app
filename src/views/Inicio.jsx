
import useSWR from 'swr';
import Producto from '../components/Producto'
import useCrispyChips from '../hooks/useCrispyChips'
import clienteAxios from '../config/axios';

export default function Inicio() {

  const {categoriaActual} = useCrispyChips()

  //Consulta SWR
  const fetcher = () => clienteAxios('/api/productos').then(data => data.data)
  
  const {data, error, isLoading} = useSWR('/api/productos', fetcher, {
    refreshInterval: 1000
  })

  if(isLoading) return 'Cargando...';


  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
    <h1 className='text-4xl font-black'>{categoriaActual.nombre}</h1>
    <p className='text-2xl my-10'>
      Elige y personaliza los productos de la comanda a continuación.
    </p>
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
      {productos.map(producto => (
        <Producto 
        key={producto.imagen}
        producto={producto}
        />
      ))}
    </div>
    </>
  )
}
