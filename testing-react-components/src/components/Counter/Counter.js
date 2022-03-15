import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increaseHandler = () => {
    setCount(prevCount => prevCount + 1);
  }
  const decreaseHandler = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <div className="counter">count: {count}</div>
      <button className="increment" onClick={increaseHandler}>Increase Count</button>
      <button className="decrement" onClick={decreaseHandler}>Decrease Count</button>
    </>
  )
}

export default Counter