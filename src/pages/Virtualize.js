import React from "react";
import { useLocation } from "react-router-dom";
import { List } from "react-virtualized";
import "../App.css";

function Virtualize() {
  const { state } = useLocation();
  const data = state.data;

  const renderRow = ({ index, key, style }) => (
    <div>
      <div key={key} style={style} className="post">
        <h3>{`${data[index].title}-${data[index].id}`}</h3>
        <p>{data[index].body}</p>
      </div>
    </div>
  );

  return (
    <List
      width={1200}
      height={window.innerHeight}
      rowRenderer={renderRow}
      rowCount={state.data.length}
      rowHeight={120}
    />
  );
}
export default Virtualize;
