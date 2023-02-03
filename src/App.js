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
      <Route path='/' element={<Home {...props}/>}/>
      <Route path="/normal" element={<Normal {...props}/>}/>
      <Route path="/paginate" element={<Paginate {...props}/>}/>
      <Route path="/infinite" element={<Infinite {...props}/>}/>
      <Route path="/virtualize" element={<Virtualize {...props}/>}/>
      <Route path="/windowing" element={<Windowing {...props}/>}/>
      <Route path="/viewport" element={<ViewPortList {...props}/>}/>
    </Routes>
  );
}

export default App;
