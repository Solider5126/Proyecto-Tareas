import React from "react";

const Formulario = () => {
  return (
    <>
      <div className="flex justify-center py-5 items-center">
        <input type="text" className="w-64 p-2 bg-white  shadow-sm border-slate-300 border-2 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  sm:text-sm focus:ring-1" />
        <button className="bg-blue-500 p-2 text-white rounded-r-lg font-semibold hover:bg-white hover:text-black border-2 hover:border-blue-600">Crear Tarea</button>
      </div>
    </>
  );
};

export default Formulario;
