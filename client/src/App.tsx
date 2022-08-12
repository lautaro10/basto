import { BrowserRouter, Route, Routes } from "react-router-dom";
import Animals from "./infraestructure/pages/Animals";
import NewAnimal from "./infraestructure/pages/NewAnimal";
import UpdateAnimal from "./infraestructure/pages/UpdateAnimal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Animals />} />
        <Route path="/add" element={<NewAnimal />} />
        <Route path="/update" element={<UpdateAnimal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
