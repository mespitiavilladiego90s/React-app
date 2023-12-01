import {Link} from 'react-router-dom'

export default function Registro() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form>
          <div className="mb-4">
            <label className="text-slate-800"
            htmlFor="name"
            >Nombre</label>
            <input 
            type="text" 
            id="name"
            className="mt-2 w-full p-3 bg-gray-50"
            name="name"
            placeholder="Tu nombre"
            />
          </div>

          <div className="mb-4">
            <label className="text-slate-800"
            htmlFor="email"
            >Email:</label>
            <input 
            type="text" 
            id="email"
            className="mt-2 w-full p-3 bg-gray-50"
            name="email"
            placeholder="Tu email"
            />
          </div>

          <div className="mb-4">
            <label className="text-slate-800"
            htmlFor="password"
            >Password:</label>
            <input 
            type="password" 
            id="password"
            className="mt-2 w-full p-3 bg-gray-50"
            name="password"
            placeholder="Tu password"
            />
          </div>

          <div className="mb-4">
            <label className="text-slate-800"
            htmlFor="password_confirmation"
            >Repetir Password:</label>
            <input 
            type="password" 
            id="password_confirmation"
            className="mt-2 w-full p-3 bg-gray-50"
            name="password_confirmation"
            placeholder="Repetir password"
            />
          </div>
            <input
                type="submit"
                value="Crear cuenta"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            />
        </form>
      </div>

      <nav
      className="mt-5">
        <Link to="/auth/login">
            ¿Ya tienes cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  );
}
