import React from 'react';
import { useLocation } from 'react-router-dom';
import { FixedSizeList as List } from "react-window";
import '../App.css';

function Windowing() {
    const {state} = useLocation()
  const data = state.data

  const Row = ({ index, key, style }) => (
   <div>
    <div key={key} style={style} className="post">
      <h3>{`${data[index].title}-${data[index].id}`}</h3>
      <p>{data[index].body}</p>
    </div>
   </div>
  )
  return (
    <List
      width={1400}
      height={700}
      itemCount={state.data.length}
      itemSize={120}
    >
      {Row}
    </List>
  );
}
export default Windowing;