export default function UserState() {
  return (
    <div class="antialiased font-sans">
      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 lg:p-4">
                <h1 className="text-4xl font-black">
                  Control de estado de empleados
                </h1>
                <div className="my-2 flex sm:flex-row flex-col">
                  <button
                    type="button"
                    class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Agregar nuevo empleado
                  </button>

                  <button
                    type="button"
                    class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Reiniciar sistema huella
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 lg:p-4 flex justify-center items-center">
                <img
                  src="../img/CrispyChipsLogo.jpg"
                  alt="imagen logotipo"
                  className="w-36 bg-gray-200"
                />
              </div>
            </div>
          </div>

          <div class="block relative">
            <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                class="h-4 w-4 fill-current text-gray-500"
              >
                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
              </svg>
            </span>
            <input
              placeholder="Buscar"
              class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Usuario
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Rol
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Ultima vez visto
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Daniel Cardona
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">Nov 29, 2023 - 08:20 P.M</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                
                
                <tr>
                  <td class="px-5 py-5 bg-white text-sm">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                          alt=""
                        />
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Alonzo Cox
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">Empleado</p>
                  </td>
                  <td class="px-5 py-5 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">11-28-2023 De 04:20 P.M a 11-29-2023 03:00 A.M</p>
                  </td>
                  <td class="px-5 py-5 bg-white text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Inactivo</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    </div>
  );
}
