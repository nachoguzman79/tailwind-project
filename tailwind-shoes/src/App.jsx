import { Nav } from "./components/Nav";
import { ShowDetail } from "./components/ShoeDetail";

export function App() {
  return (
    
    <div className="animate-fadeIn p-10 xl:px-24"> 
    
      <Nav />
      <ShowDetail />

    </div>
  );
}
// el animate-fadeIn creado hace que toda la pagina cargue smooth
// da un feeling of smoothness