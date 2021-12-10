import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {

  const initial = 1
  const max = 10

  return (
    <div className='hooks-ap'>

      <ItemCount initial={initial} max={max} />

    </div>
  )
}

export default App;