
import {Routes, Route} from "react-router-dom"

import Home from './pages/Home';
import Error from './pages/Error'
import About from './pages/About'
import Lodging from './pages/lodging'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lodging/:id?" element={<Lodging />} />
      <Route path="*" element={<Error />} /> 
    </Routes>
    </div>
  );
}
/* feuille de route à implanter*/

export default App;
