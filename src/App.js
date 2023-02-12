import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Infinite from './pages/Infinite'
import Normal from './pages/Normal'
import Paginate from './pages/Paginate'
import ViewPortList from './pages/ViewPortList'
import Virtualize from './pages/Virtualize'
import Windowing from './pages/Windowing'

function App(props) {
  return (
    <Routes>
      <Route path='/react-large-list-skill' element={<Home {...props}/>}/>
      <Route path="/react-large-list-skill/normal" element={<Normal {...props}/>}/>
      <Route path="/react-large-list-skill/paginate" element={<Paginate {...props}/>}/>
      <Route path="/react-large-list-skill/infinite" element={<Infinite {...props}/>}/>
      <Route path="/react-large-list-skill/virtualize" element={<Virtualize {...props}/>}/>
      <Route path="/react-large-list-skill/windowing" element={<Windowing {...props}/>}/>
      <Route path="/react-large-list-skill/viewport" element={<ViewPortList {...props}/>}/>
    </Routes>
  );
}

export default App;
