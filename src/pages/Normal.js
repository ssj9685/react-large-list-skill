import { useLocation } from 'react-router-dom';
import '../App.css';

function Normal() {
  const {state} = useLocation()

  return (
    <div>
      {state.data.map(((item) => (
        <div key={item.id} className="post">
          <h3>{item.title} - {item.id}</h3>
          <p>{item.body}</p>
        </div>
      )))}
    </div>
  );
}

export default Normal;
