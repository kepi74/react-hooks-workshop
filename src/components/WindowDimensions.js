import React from 'react';
import useObjectDimensions from '../hooks/useObjectDimensions';

const WindowDimensions = () => {
  const windowDimensions = useObjectDimensions();
  let items = [];
  for (let dimension in windowDimensions) {
    items.push(<li key={dimension}>{`${dimension}: ${windowDimensions[dimension]}`}</li>);
  }
  return (
    <div>
      <h3>Window dimensions:</h3>
      <ul>
        {items}
      </ul>
    </div>
  );
};

export default WindowDimensions;