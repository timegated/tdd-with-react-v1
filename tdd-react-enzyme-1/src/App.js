import React from 'react';
function App() {
  const [count, setCount] = React.useState(0);

  const handleDecrementCount = () => {
    setCount(count - 1);
    if(count <= 0) {
      setCount(0);
    }
  };

  const handleResetCount = () => {
    setCount(0);
  };

  return (
    <div data-test="component-app" className="App">
    <h1 data-test="component-display">
      This counter is currently&nbsp;
      <span data-test="count">{count}</span>
    </h1>
    <button
      data-test="increment-button"
      onClick={() => setCount(count + 1)}
    >
      Increment!
    </button>
    <button
      data-test="decrement-button"
      onClick={() => handleDecrementCount()}
    >
      Decrement!
    </button>
    <button
      data-test="reset-button"
      onClick={handleResetCount}
    >
      Reset!
    </button>
    </div>
  );
}

export default App;
