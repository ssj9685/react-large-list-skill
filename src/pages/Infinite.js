import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useLocation } from "react-router-dom";
import "../App.css";

function Infinite() {
  const { state } = useLocation();
  const data = state.data;

  const showItems = (posts) => {
    var items = [];
    for (var i = 0; i < records; i++) {
      items.push(
        <div className="post" key={posts[i].id}>
          <h3>{`${posts[i].title} - ${posts[i].id}`}</h3>
          <p>{posts[i].body}</p>
        </div>
      );
    }
    return items;
  };
  const itemsPerPage = 20;

  const [hasMore, setHasMore] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);

  const loadMore = () => {
    if (records === state.data.length) {
      setHasMore(false);
    } else {
      setrecords(records + itemsPerPage);
    }
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={
        <h4 key={Math.random()} className="loader">
          Loading...
        </h4>
      }
      useWindow={true}
    >
      {showItems(data)}
    </InfiniteScroll>
  );
}

export default Infinite;
