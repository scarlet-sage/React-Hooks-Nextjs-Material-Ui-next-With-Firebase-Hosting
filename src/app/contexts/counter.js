import React, {createContext, useState} from 'react';

const CounterContext = createContext();

const CounterProvider = ({children}) => {
  const [count, setCount] = useState(0);

  const reset = () => setCount(0);

  const increment = () => setCount(prevCount => prevCount + 1);

  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <CounterContext.Provider
      value={{
        count,
        reset,
        increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
};

export {CounterContext, CounterProvider}
