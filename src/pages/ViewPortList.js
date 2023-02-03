import React from "react";
import { useRef } from "react";
import { useLocation } from 'react-router-dom';
import ViewportList from "react-viewport-list";
function ViewPortList() {
    const {state} = useLocation()
  const ref = useRef(null);
  const items = state.data
  return (
    <div className="scroll-container" ref={ref}>
      <ViewportList viewportRef={ref} items={items} itemMinSize={40} margin={8}>
        {(item) => (
          <div key={item.id} className="post">
            <h3>
              {item.title} - {item.id}
            </h3>
            <p>{item.body}</p>
          </div>
        )}
      </ViewportList>
    </div>
  );
};
export default ViewPortList;