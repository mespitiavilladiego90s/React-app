import { formatearDinero } from '../helpers';
import useCrispyChips from '../hooks/useCrispyChips'
import ResumenProducto from './ResumenProducto';

export default function Resumen() {
  const {pedido, total} = useCrispyChips();

  const comprobarPedido = () => pedido.length === 0;


  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">Mi comanda</h1>
      <p className="text-lg my-5">Aquí podrás ver el resumen y totales de tu pedido</p>

      <div className='py-10'>
          {pedido.length ===0 ? (
            <p className='text-center text-2xl'>No hay elementos en tu comanda aún</p>
          ) : (
            pedido.map(producto => (
              <ResumenProducto 
              key={producto.id}
              producto={producto}
              />
            ))
          )}
      </div>
            <p className='text-xl mt-10'>
              Total: {''}
              {formatearDinero(total)}
            </p>
            <form className='w-full'>
              <div className='mt-5'>
                <input
                type='submit'
                className={`${comprobarPedido() ? 'bg-indigo-100' :  'bg-indigo-600 hover:bg-indigo-800'} py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
                value='Confirmar pedido'
                disabled={comprobarPedido()}
                >
                </input>
              </div>
            </form>
      </aside>
  )
}
