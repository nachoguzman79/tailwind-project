import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
import { CartItem } from "./components/CartItem";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);




  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn ={()=>setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar 
      isOpen={isSidebarOpen} 
      onClickClose={() => setIsSidebarOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-10 ">Cart</h2>
        <CartItem item={SHOE_LIST[0]}/>
        <CartItem item={SHOE_LIST[2]}/>
        <CartItem item={SHOE_LIST[3]}/>
        
        </Sidebar>
    </div>
  );
}
// el animate-fadeIn creado hace que toda la pagina cargue smooth
// da un feeling of smoothness
