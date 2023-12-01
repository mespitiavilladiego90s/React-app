import useCrispyChips from '../hooks/useCrispyChips'
import Categoria from './Categoria'

export default function Sidebar() {

    const {categorias} = useCrispyChips()
  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img
                className="w-40"
                src="img/CrispyChipsLogo.jpg"

            />
        </div>

        <div className='mt-10'>
            {categorias.map(categoria => (
                <Categoria 
                key={categoria.id}
                categoria={categoria}/>
            ))}
        </div>

        <div className='my-5 px-5'>
                <button 
                type='button'
                className='text-center bg-red-500 w-full p-3 font-bold text-white'
                >
                    Cancelar Comanda
                </button>
        </div>
    </aside>
  )
}
