import Home from "./Components/Home";
import AddColor from "./Components/AddColor";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/add" element={<AddColor/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
