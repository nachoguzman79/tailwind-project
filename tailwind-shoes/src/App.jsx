import { Nav } from "./components/Nav";
import { ShowDetail } from "./components/ShoeDetail";

export function App() {
  return (
    // global padding p-10
    <div className="p-10 xl:px-24"> 
    
      <Nav />
      <ShowDetail />

    </div>
  );
}
