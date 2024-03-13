import { useState } from "react";

import "./App.css";
import Formulario from "./components/Formulario";
import Mostrar from "./components/Mostrar";

function App() {


  return (
    <main className="mx-auto container">
      <Formulario />
      <Mostrar />
    </main>
  );
}

export default App;
