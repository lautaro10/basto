import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimalsList from "./infraestructure/components/AnimalsList";
import NewAnimal from "./infraestructure/pages/NewAnimal";
import UpdateAnimal from "./infraestructure/pages/UpdateAnimal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimalsList />} />
        <Route path="/add" element={<NewAnimal />} />
        <Route path="/update" element={<UpdateAnimal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
