import '../App.css';
import {Link} from 'react-router-dom'

function Home(props) {
  return (
    <div style={{display:'grid', gap: '1em'}}>
        <Link to='/react-large-list-skill/normal' state={{...props}}>Normal</Link>
        <Link to='/react-large-list-skill/paginate' state={{...props}}>Paginate</Link>
        <Link to='/react-large-list-skill/infinite' state={{...props}}>Infinite</Link>
        <Link to='/react-large-list-skill/virtualize' state={{...props}}>Virtualize</Link>
        <Link to='/react-large-list-skill/windowing' state={{...props}}>Windowing</Link>
        <Link to='/react-large-list-skill/viewport' state={{...props}}>Viewport</Link>
    </div>
  );
}

export default Home;
