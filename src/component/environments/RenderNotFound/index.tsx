import React from "react";

// Note that create-react-navi-app will always show an error screen when this
// is called. This is because the underlying react-scripts package show
// the error screen when a NotFoundError is thrown, even though it's caught
// by <NotFoundBoundary>. To see the error rendered by this function,
// you'll just need to close the error overlay with the "x" at the top right.
export const RenderNotFound = () => {
  return (
    <div className="App-error">
      <h1>404 - Not Found</h1>
    </div>
  );
};
