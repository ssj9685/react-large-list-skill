import '../App.css';
import {Link} from 'react-router-dom'

function Home(props) {
  return (
    <div style={{display:'grid', gap: '1em'}}>
        <Link to='/normal' state={{...props}}>Normal</Link>
        <Link to='/paginate' state={{...props}}>Paginate</Link>
        <Link to='/infinite' state={{...props}}>Infinite</Link>
        <Link to='/virtualize' state={{...props}}>Virtualize</Link>
        <Link to='/windowing' state={{...props}}>Windowing</Link>
        <Link to='/viewport' state={{...props}}>Viewport</Link>
    </div>
  );
}

export default Home;
