import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
  <div>
    <h1>Paquetes de Clases</h1>
    <NavBar />
    <ItemListContainer greeting='¡Bienvenidx! A continuación verá el listado de clases disponibles.' descripcion=' Inserte texto de descripción.' />
  </div> 
  );
}

export default App;